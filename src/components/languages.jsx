function Languages({ countries }) {
  return (
    <li
      className="list-group-item list-group-item-secondary"
      style={{ maxHeight: "50px", overflowY: "auto" }}
    >
      Languages:{" "}
      {countries.languages
        ? Object.values(countries.languages).join(", ")
        : "N/A"}
    </li>
  );
}

export default Languages;
