import React, { useState } from "react";

function SearchBar({ data, setSearch }) {
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchBoxVisible, setSearchBoxVisible] = useState(false);

  const handleSearchFilter = (e) => {
    const searchWord = e.target.value;
    setSearch(searchWord);
    if (searchWord) {
      const newFilter = data.filter((value) => {
        return value.name.common
          .toLowerCase()
          .includes(searchWord.toLowerCase());
      });
      setFilteredCountries(newFilter);
      setSearchBoxVisible(true);
    } else {
      setFilteredCountries([]);
      setSearchBoxVisible(false);
    }
  };

  const clickSearch = (name) => {
    setSearch(name);
    setFilteredCountries([]);
    setSearchBoxVisible(false);
  };

  return (
    <div className="input-group mb-3 position-relative">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon1">
          Search
        </span>
      </div>
      <input
        type="text"
        className="form-control"
        placeholder="Israel"
        aria-label="Search"
        aria-describedby="basic-addon1"
        onChange={handleSearchFilter}
      />
      {searchBoxVisible && (
        <div className="search-box bg-light">
          {filteredCountries.map((value, i) => (
            <span
              style={{ cursor: "pointer" }}
              onClick={() => clickSearch(value.name.common)}
              key={i}
            >
              {value.name.common}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
