import useGlobalReducer from "../hooks/useGlobalReducer";

import SearchBar from "./SearchBar";

export const Navbar = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="mt-3 container-fluid border-top border-bottom d-flex align-items-center flex-wrap">
      <h3 className="mb-0 text-white mx-1 py-2 flex-grow-1">
        BROWSE DATA BANK //
      </h3>

      <div className="ms-auto me-3" style={{ minWidth: "200px", maxWidth: "100%" }}>
        <SearchBar />
      </div>

      <div className="dropdown">
        <button
          className="btn text-white dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://amol-kulkarni.com/project/starwars/featured.jpg"
            alt="profile"
            className="rounded-circle"
            style={{ height: "4rem", maxWidth: "100%" }}
          />
        </button>
        <ul className="dropdown-menu mx-2 bg-dark">
          <button className="mx-2 btn btn-outline-success">FAVORITES:</button>

          {store.favorites.map((nom) => (
            <li
              className="mx-3 pointer my-2 text-white favorite"
              key={nom}
            >
              {nom}{" "}
              <i
                className="fa-solid fa-trash text-danger"
                onClick={() => {
                  dispatch({
                    type: "delete_favorites",
                    payload: nom,
                  });
                }}
              ></i>
            </li>
          ))}

          {store.favorites.length > 0 && (
            <button
              onClick={() => {
                dispatch({
                  type: "delete_all_favorites",
                });
                alert("All favorites have been deleted");
              }}
              className="mx-2 mt-5 pointer btn btn-outline-danger"
            >
              CLEAR FAVORITES
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};
