import React, { useState, useEffect } from "react";
import { getPublicRoutines } from "../API/routines";
import { useNavigate } from "react-router-dom";

import "../Styles/Routines.css";
import { links } from "../API/activities";

const Routines = () => {
  const [routines, setRoutines] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(15);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const routinesData = await getPublicRoutines();
      setRoutines(routinesData);
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

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredRoutines.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

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
        <button>
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
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={currentPage === number ? "active" : ""}
          >
            {number}
          </button>
        ))}
      </div>
      <section className="routines">
        {currentItems.map((routine) => {
          return (
            <div className="routine" key={routine.id}>
              <div className="routinesHeader">
                <h2>
                  {routine.name}{" "}
                  <span className="author">by: {routine.creatorName}</span>
                </h2>
                <button onClick={() => navigate(`/routines/${routine.id}`)}>
                  Start Workout
                </button>
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
                        backgroundImage: `url(${
                          links[Math.floor(Math.random() * 25)]
                        })`,
                        "--description": `"${activity.description}"`,
                      }}
                    >
                      <p className="activityTitle">{activity.name}</p>
                      <p className="activityDirections">{activity.count} Reps X {activity.duration} mins</p>
                    </li>
                  );
                })}
              </ul>
              
            </div>
          );
        })}
      </section>
      <div className="pagination">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={currentPage === number ? "active" : ""}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Routines;
