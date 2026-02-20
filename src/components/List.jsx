import React from "react";

const List = ({ data }) => {
  return (
    <div>
      {data ? (
        data.map((user) => (
          <li key={user.id}>
            <span style={nameStyle}> {user.firstName}</span>
            <span>
              {user.lastName} {user.email}
            </span>
          </li>
        ))
      ) : (
        <p>No Data available</p>
      )}
    </div>
  );
};

const nameStyle = {
  display: "inline-block",
  width: "40%",
};

export default List;
