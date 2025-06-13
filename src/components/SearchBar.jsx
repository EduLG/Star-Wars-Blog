import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  // Función para obtener todos los datos de localStorage
  const getAllData = () => {
    const characters = JSON.parse(localStorage.getItem("swapi_characters")) || [];
    const films = JSON.parse(localStorage.getItem("swapi_films")) || [];
    const species = JSON.parse(localStorage.getItem("swapi_species")) || [];
    const vehicles = JSON.parse(localStorage.getItem("swapi_vehicles")) || [];
    const starships = JSON.parse(localStorage.getItem("swapi_starships")) || [];
    const planets = JSON.parse(localStorage.getItem("swapi_planets")) || [];

    return [...characters, ...films, ...species, ...vehicles, ...starships, ...planets];
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const all = getAllData();

    // Filtrar en tiempo real
    const filtered = all.filter((item) =>
      item?.name?.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredResults(filtered);
  };

  const handleKeyDown = (e) => {
    if (e.key !== "Enter") return;

    const all = getAllData();

    const foundItem = all.find(
      (item) => item?.name?.toLowerCase() === searchTerm.toLowerCase()
    );

    if (foundItem) {
      const index = all.indexOf(foundItem);

      if (index <= 9) {
        navigate(`/content-databank/people/${foundItem.uid}`);
      } else if (index <= 15) {
        navigate(`/content-databank/films/${foundItem.uid}`);
      } else if (index <= 25) {
        navigate(`/content-databank/species/${foundItem.uid}`);
      } else if (index <= 35) {
        navigate(`/content-databank/vehicles/${foundItem.uid}`);
      } else if (index <= 45) {
        navigate(`/content-databank/starships/${foundItem.uid}`);
      } else if (index <= 55) {
        navigate(`/content-databank/planets/${foundItem.uid}`);
      }
    } else {
      alert("Data unknown");
    }
  };

  return (
    <div
      className="search-bar"

    >
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        style={{
          width: "100%",
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          borderRadius: "0.3rem",
          border: "1px solid #ccc",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
};

export default SearchBar;