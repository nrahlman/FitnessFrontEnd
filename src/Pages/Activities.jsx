import React, { useEffect, useState } from "react";
import { DisplayActivities, links } from "../API/activities";
import { useNavigate } from "react-router-dom";
import PostActivity from "../Components/PostActivity";
import UpdateActivities from "../Components/UpdateActivities";
import "../App.css";

const Activities = ({ token }) => {
  const [activities, setActivities] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(24);
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalActivityId, setModalActivityId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getActivities() {
      const activities = await DisplayActivities();
      setActivities(activities);
    }
    getActivities();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const filteredActivities = activities.filter((activity) =>
    activity.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const currentItems = filteredActivities.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(filteredActivities.length / itemsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // reset current page when search query changes
  };

  const getPageNumbers = () => {
    const start = 1;
    const end = Math.ceil(filteredActivities.length / itemsPerPage);
    const current = currentPage;
    const before = currentPage - 1 > 0 ? currentPage - 1 : null;
    const after =
      currentPage + 2 <= end ? (currentPage === 1 ? currentPage + 2 : currentPage + 1) : null;
    return { start, end, current, before, after };
  };

  const { start, end, current, before, after } = getPageNumbers();


  return (
    <div className="activitiesContainer">
      <h1 className="activitiesBanner">Activities</h1>
      <div className="searchContainer">
        <input
          id="searchInput"
          type="text"
          placeholder="Search activities..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button onClick={() => setShowModal(true)}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
              ></path>
            </svg>{" "}
            Create Activity
          </span>
        </button>
      </div>
      <div className="pagination">
        {current > start && (
          <button className="nextButton" onClick={() => setCurrentPage(current - 1)}>{"<<"}</button>
        )}
        {Array.from({ length: end - start + 1 }, (_, i) => start + i).map(
          (number) => {
            if (
              number === start ||
              number === end ||
              (number >= current - 1 && number <= current + 2)
            ) {
              return (
                <button
                  key={number}
                  id={number}
                  onClick={handleClick}
                  className={`${currentPage === number ? "active" : ""} numberButton`}
                >
                  {number}
                </button>
              );
            } else if (number === start + 1 || number === end - 1) {
              return <span className="dots" key={number}>...</span>;
            } else {
              return null;
            }
          }
        )}
        {current < end && (
          <button className="nextButton" onClick={() => setCurrentPage(current + 1)}>{">>"}</button>
        )}
      </div>
      <div className="activities">
        {modalActivityId && (
          <div className="modal">
            <div className="modal-content">
              <UpdateActivities
                token={token}
                id={modalActivityId}
                onClose={() => setModalActivityId(null)}
              />
            </div>
          </div>
        )}
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <PostActivity
                token={token}
                id={modalActivityId}
                onClose={() => setShowModal(false)}
              />
            </div>
          </div>
        )}

        {currentItems.map((activity) => {
          return (
            <div
              className="activity"
              key={activity.id}
              style={{
                backgroundImage: `url(${links[Math.floor(Math.random() * 27)]})`,
                "--description": `"${activity.description} "`,
                width: "20%",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <p className="activityTitle">{activity.name}</p>
              <button onClick={() => setModalActivityId(activity.id)}>Edit</button>

              <button
                className="routineButton"
                onClick={() =>
                  navigate(`/routines`, { state: { numberStuff: activity.id } })
                }
              >
                Routines
              </button>
            </div>
          );
        })}
      </div>
      <div className="pagination">
        {current > start && (
          <button className="nextButton" onClick={() => setCurrentPage(current - 1)}>{"<<"}</button>
        )}
        {Array.from({ length: end - start + 1 }, (_, i) => start + i).map(
          (number) => {
            if (
              number === start ||
              number === end ||
              (number >= current - 1 && number <= current + 2)
            ) {
              return (
                <button
                  key={number}
                  id={number}
                  onClick={handleClick}
                  className={`${currentPage === number ? "active" : ""} numberButton`}
                >
                  {number}
                </button>
              );
            } else if (number === start + 1 || number === end - 1) {
              return <span className="dots" key={number}>...</span>;
            } else {
              return null;
            }
          }
        )}
        {current < end && (
          <button className="nextButton" onClick={() => setCurrentPage(current + 1)}>{">>"}</button>
        )}
      </div>
    </div>
  );
};

export default Activities;