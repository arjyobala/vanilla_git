import React, { useState } from "react";
import data from "../utilities/SampleData";
import styles from "./results.module.css";

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
                <tbody>
                  <tr>
                    <th>Organization</th>
                    <th>Description</th>
                    <th>Stargazers</th>
                    <th>Watchers</th>
                  </tr>
                  <tr>
                    <td style={{ width: "150px" }}>
                      <a target="_blank" href={item.html_url}>
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

// Results.defaultProps = {
//   list: [{ name: "one" }, { name: "two" }],
// };
