import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";


const navLinkClass = ({ isActive }) =>
  `text-decoration-none ${isActive ? "active selected text-white" : "text-white"}`;

const SideBar = () => {
  const navigate = useNavigate();
  const collapseRef = useRef(null);

  const handleNavClick = (path) => {
    navigate(path);
    if (collapseRef.current) {
      const bsCollapse = window.bootstrap.Collapse.getInstance(collapseRef.current);
      if (bsCollapse) {
        bsCollapse.hide();
      }
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-xl ">
        <div
          className="container-fluid align-items-start"
          style={{ minHeight: "100vh" }}
        >
          <button
            className="navbar-toggler mb-3 bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ borderColor: "white" }}
          >
            <span className="navbar-toggler-icon" style={{ filter: "invert(1)" }}></span>
          </button>

          <div
            className="collapse navbar-collapse overlay-collapse "
            id="navbarNav"
            ref={collapseRef}
          >
            <ul className="navbar-nav flex-column gap-3">
              <li className="nav-item">
                <p className="text-secondary px-2 textito-navbar-inactive">BROWSE</p>
              </li>

              <li className="nav-item">
                <button
                  className={navLinkClass({ isActive: window.location.pathname === "/" })}
                  onClick={() => handleNavClick("/")}
                  style={buttonStyle}
                >
                  <h5 className="px-2 textito-navbar">HOME</h5>
                </button>
              </li>

              <li className="nav-item">
                <button
                  className={navLinkClass({ isActive: window.location.pathname === "/content-characters" })}
                  onClick={() => handleNavClick("/content-characters")}
                  style={buttonStyle}
                >
                  <h5 className="px-2 textito-navbar">CHARACTERS</h5>
                </button>
              </li>

              <li className="nav-item">
                <button
                  className={navLinkClass({ isActive: window.location.pathname === "/content-species" })}
                  onClick={() => handleNavClick("/content-species")}
                  style={buttonStyle}
                >
                  <h5 className="px-2 textito-navbar">SPECIES</h5>
                </button>
              </li>

              <li className="nav-item">
                <button
                  className={navLinkClass({ isActive: window.location.pathname === "/content-planets" })}
                  onClick={() => handleNavClick("/content-planets")}
                  style={buttonStyle}
                >
                  <h5 className="px-2 textito-navbar">PLANETS</h5>
                </button>
              </li>

              <li className="nav-item">
                <button
                  className={navLinkClass({ isActive: window.location.pathname === "/content-starships" })}
                  onClick={() => handleNavClick("/content-starships")}
                  style={buttonStyle}
                >
                  <h5 className="px-2 textito-navbar">STARSHIPS</h5>
                </button>
              </li>

              <li className="nav-item">
                <button
                  className={navLinkClass({ isActive: window.location.pathname === "/content-vehicles" })}
                  onClick={() => handleNavClick("/content-vehicles")}
                  style={buttonStyle}
                >
                  <h5 className="px-2 textito-navbar">VEHICLES</h5>
                </button>
              </li>

              <li className="nav-item">
                <button
                  className={navLinkClass({ isActive: window.location.pathname === "/content-films" })}
                  onClick={() => handleNavClick("/content-films")}
                  style={buttonStyle}
                >
                  <h5 className="px-2 textito-navbar">FILMS</h5>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

const buttonStyle = {
  background: "none",
  border: "none",
  padding: 0,
  cursor: "pointer",
  textAlign: "left",
  width: "100%",
};

export default SideBar;
