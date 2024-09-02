import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);

  async function fetchUrl() {
    const res = await fetch(url);
    const fetchedData = await res.json();
    setData(fetchedData);
  }

  useEffect(() => {
    fetchUrl();
  }, [url]);

  return { data };
}

export default useFetch;
