import React, { useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";
import NavbarTop from "../components/NavbarTop";

const Starships = () => {
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();
  const [starships, setStarships] = useState([]);

 useEffect(() => {
    const storedStarships = localStorage.getItem("swapi_starships");
    if (storedStarships && storedStarships !== "undefined") {
      setStarships(JSON.parse(storedStarships));
    }
  }, []);

  return (
    <div className=" mt-5 ">
       <div className="d-flex justify-content-center mb-4">
        <NavbarTop />
      </div>
     
     
        <ul className="row row-cols-1 row-cols-xl-5 mx-0' px-o  ">
          {starships.map((ship) => {
            return (
              <li
                key={ship.uid}
                className="col mb-3 d-flex justify-content-center px-2"
              >
                <div
                  className="card w-100"
                  style={{ height: "35rem", backgroundColor: "#282727" }}
                >
                  <img
                    src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/starships/${ship.uid}.jpg`}
                    className="card-img-top imgMenu"
                    style={{ height: "22rem" }}
                    alt={`foto de ${ship.name}`}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/placeholder.jpg";
                    }}
                    onClick={() =>
                      navigate(`/content-databank/starships/${ship.uid}`)
                    }
                  />
                  <div className="card-body border-top border-danger d-flex flex-column">
                    <h5 className="card-title text-white">{ship.name}</h5>
                    <div className="d-flex mt-auto pt-5 ">
                      <div
                        className="d-flex bank_data_hover"
                        onClick={() =>
                          navigate(`/content-databank/starships/${ship.uid}`)
                        }
                      >
                        <img
                          src="https://www.svgrepo.com/show/512914/star-wars-134.svg"
                          alt="icono Starwars"
                          style={{
                            width: "1.8rem",
                            height: "1.4rem",
                            objectFit: "cover",
                              position:"top",
                            filter:
                              "invert(17%) sepia(90%) saturate(1882%) hue-rotate(0deg) brightness(98%) contrast(119%)",
                          }}
                          className="pe-2"
                        />
                        <p
                          className=""
                          style={{
                            color: "#dc3545",
                            filter: "opacity(0.8",
                            cursor: "pointer",
                          }}
                        >
                          Databank{" "}
                        </p>
                      </div>
                     <button
                        className="pe-2 ms-auto star btn btn-outline-success h-75 w-25 btn-sm"
                        onClick={() => {
                          if (store.favorites.includes(ship.name)) {
                            alert(
                              `${ship.name} is already in your favorites list`
                            );
                            return;
                          }

                          dispatch({
                            type: "add_favorites",
                            payload: ship.name,
                          });
                        }}>
                          ☆
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
    </div>
  );
};

export default Starships;