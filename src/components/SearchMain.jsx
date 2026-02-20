import React, { useEffect, useState } from "react";
import useFetchAPI from "../hooks/useFetchAPI";
import Search from "./Search";
import List from "./List";

const SearchMain = () => {
  const { data, loading, error } = useFetchAPI("https://dummyjson.com/users");
  const [allData, setAllData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [debounceSearch, setDebounceSearch] = useState("");

  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      setDebounceSearch(searchTerm);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (debounceSearch) {
      const filterUsers = allData.filter((user) =>
        `${user.firstName} ${user.lastName} ${user.email}`
          .toLowerCase()
          .includes(debounceSearch.toLowerCase()),
      );
      setFilterData(filterUsers);
    } else {
      setAllData(data);
      setFilterData(data);
    }
  }, [data, debounceSearch]);

  return (
    <div>
      <h2>SearchMain</h2>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {error && <p>There is Error {error}</p>}
      {loading ? <p>Loading...</p> : <List data={filterData} />}
    </div>
  );
};

export default SearchMain;
