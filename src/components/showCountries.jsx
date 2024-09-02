import React from "react";
import Languages from "./languages";

function ShowCountries({ countries, search }) {
  return (
    <div className="countries-container d-flex flex-wrap gap-4 justify-content-center">
      {countries
        .filter((item) => {
          return search.toLowerCase() === ""
            ? true
            : item.name.common.toLowerCase().includes(search.toLowerCase());
        })
        .map((country) => (
          <div
            key={country.name.common}
            className="card card-shadow"
            style={{ width: "18rem" }}
          >
            <img
              src={country.flags.png}
              className="card-img-top"
              style={{ height: "200px" }}
              alt={country.name.common}
            />
            <div className="card-body">
              <h5 className="card-title">{country.name.common}</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li
                className="list-group-item list-group-item-primary"
                style={{ maxHeight: "50px", overflowY: "auto" }}
              >
                Capital City:{" "}
                {country.capital && country.capital.length > 0
                  ? country.capital[0]
                  : "None"}
              </li>
              <Languages countries={country} />
              <li className="list-group-item list-group-item-info text-dark">
                Population: {country.population.toLocaleString()}
              </li>
            </ul>
          </div>
        ))}
    </div>
  );
}

export default ShowCountries;
