import React, { useState } from "react";
import SearchBar from "../components/searchBar";
import ShowCountries from "../components/showCountries";
import useFetch from "../hooks/fetchRegion";

function SouthAmerica() {
  const { data } = useFetch(
    "https://restcountries.com/v3.1/region/South America"
  );
  const [search, setSearch] = useState("");

  return (
    <div>
      <h1 className="text-center mb-3 mt-3">South America</h1>
      <SearchBar data={data} setSearch={setSearch} search={search} />
      <ShowCountries countries={data} search={search} />
    </div>
  );
}
export default SouthAmerica;
