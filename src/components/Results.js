import React from "react";

const Results = ({ org, list }) => {
  return (
    <div>
      {list.map((item) => (
        <div>
          <a href={item.html_url}>{item.name}</a>
        </div>
      ))}
      {org.login}
    </div>
  );
};

export default Results;

Results.defaultProps = {
  list: [{ name: "one" }, { name: "two" }],
};
