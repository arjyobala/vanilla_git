import React from "react";
import "./results.module.css";
const Results = ({ list, response }) => {
  return (
    <div>
      {/* If there is an error display the h1 */}
      {response ? <h1>Not Found</h1> : null}

      {/* If there is a list and response is null display the repo list */}
      {list && !response
        ? list.map((item) => (
            <div>
              <table
                style={{
                  alignContent: "center",
                  margin: "auto",
                  maxWidth: "900px",
                  padding: "auto, 100px",
                }}
              >
                <tr>
                  <th>Organization</th>
                  <th>Description</th>
                  <th>Stargazers</th>
                  <th>Watchers</th>
                </tr>
                <tbody>
                  <tr>
                    <td style={{ width: "200px" }}>
                      <a target="_blank" rel="noreferrer" href={item.html_url}>
                        {item.name}
                      </a>
                    </td>
                    <td style={{ width: "250px" }}>
                      <p>{item.description}</p>
                    </td>
                    <td style={{ width: "150px" }}>
                      <p>Stargazers : {item.stargazers_count}</p>
                    </td>
                    <td style={{ width: "150px" }}>
                      <p>Watchers : {item.watchers_count}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))
        : null}
    </div>
  );
};

export default Results;
