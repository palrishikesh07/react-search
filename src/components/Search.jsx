import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        placeholder="Search Name"
      />
    </div>
  );
};

export default Search;
