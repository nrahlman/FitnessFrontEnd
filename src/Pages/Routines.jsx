import React, { useState, useEffect } from "react";
import { getPublicRoutines } from "../API/routines";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { GetRoutines, links } from "../API/activities";
import AddRoutine from "../Components/AddRoutine";
import "../Styles/Routines.css";

const Routines = ({ token }) => {
  const location = useLocation();
  const numberStuff = location.state?.numberStuff || 0;
  const [routines, setRoutines] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(15);
  const navigate = useNavigate();
  const [modalActivityId, setModalActivityId] = useState(null);
  const [showAddRoutineModal, setShowAddRoutineModal] = useState(false);

  useEffect(() => {
    async function fetchData() {
      if (numberStuff === 0) {
        const routinesData = await getPublicRoutines();

        setRoutines(routinesData);
      } else {
        const routinesData = await GetRoutines(numberStuff);
        setRoutines(routinesData);
      }
    }
    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredRoutines = routines.filter((routine) =>
    routine.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredRoutines.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(filteredRoutines.length / itemsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  const updateRoutines = (newRoutine) => {
    setRoutines([...routines, newRoutine]);
  };


  const getPageNumbers = () => {
    const start = 1;
    const end = Math.ceil(filteredRoutines.length / itemsPerPage);
    const current = currentPage;
    const before = currentPage - 1 > 0 ? currentPage - 1 : null;
    const after =
      currentPage + 2 <= end ? (currentPage === 1 ? currentPage + 2 : currentPage + 1) : null;
    return { start, end, current, before, after };
  };

  const { start, end, current, before, after } = getPageNumbers();

  return (
    <div className="routinesContainer">
      <h1 className="routinesBanner">Public Routines</h1>
      <div className="searchContainer">
        <input
          id="searchInput"
          type="text"
          placeholder="Search routines..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button onClick={() => setShowAddRoutineModal(true)}>
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
            Create Routine
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
      <section className="routines">
        {showAddRoutineModal && (
          <div className="modal">
            <div className="modal-content">
              <AddRoutine
                token={token}
                updateRoutines={updateRoutines}
                onClose={() => setShowAddRoutineModal(false)}
              />
            </div>
          </div>
        )}

        {currentItems.map((routine) => {
          return (
            <div className="routine" key={routine.id}>
              <div className="routinesHeader">
                <h2>
                  {routine.name}{" "}
                  <span className="author">by: {routine.creatorName}</span>
                </h2>

              </div>

              <p>
                {" "}
                <span className="bold"> Goal:</span> {routine.goal}
              </p>

              <h4>Exercises:</h4>
              <ul className="exercises">
                {routine.activities.map((activity) => {
                  return (
                    <li
                      className="activityRoutines"
                      key={activity.id}
                      style={{
                        backgroundImage: `url(${links[Math.floor(Math.random() * 27)]})`,
                        "--description": `"${activity.description} "`,
                        width: "25%",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <p className="activityTitle">{activity.name}</p>
                      <p className="activityDirections">
                        {activity.count} Reps X {activity.duration} mins
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </section>
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

export default Routines;
