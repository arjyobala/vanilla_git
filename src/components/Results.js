import React from "react";

const Results = ({ list }) => {
  return (
    <div>
      {list.map((item) => (
        <li key={item.id}>{item.login}</li>
      ))}
    </div>
  );
};

export default Results;

Results.defaultProps = {
  list: [{ name: "one" }, { name: "two" }],
};
