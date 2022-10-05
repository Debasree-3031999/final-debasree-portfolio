import React from "react";
import GitHubCalendar from "react-github-calendar";
 import "./GithubCalendar.css";
const GitHubCal = () => {
  const github = {
    margin: "auto",
    border: "5px solid #A3E900",
    padding: "20px",
    borderRadius: "10px",
  };
  return (
    <div className="github">
      <h2>DAYS I CODE</h2>
      <div
        w={["100%", "100%", "65%"]}
        style={github}
        className="github_Calender"
       >
        <GitHubCalendar
          style={{ margin: "auto" }}
          username="Debasree-3031999"
          year={new Date().getFullYear()}
        />
      </div>
    </div>
  );
};
export default GitHubCal;