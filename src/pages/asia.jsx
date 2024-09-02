import React, { useState } from "react";
import SearchBar from "../components/searchBar";
import ShowCountries from "../components/showCountries";
import useFetch from "../hooks/fetchRegion";

function Asia() {
  const { data } = useFetch("https://restcountries.com/v3.1/region/asia");
  const [search, setSearch] = useState("");

  return (
    <div>
      <h1 className="text-center mb-3 mt-3">Asia</h1>
      <SearchBar data={data} setSearch={setSearch} search={search} />
      <ShowCountries countries={data} search={search} />
    </div>
  );
}
export default Asia;
