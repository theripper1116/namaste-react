import React, { useState } from "react";

import UserDetails from "./UserDetails";

const AboutUS = () => {
  const [userName, setUserName] = useState("");
  return (
    <div className="about-us">
      <h3>About US: - </h3>
      <div>
        <input
          type="text"
          placeholder="Enter Github username"
          id="get-github-username"
        ></input>
        <button
          className="btn m-2 p-2"
          onClick={() => {
            setUserName(document.getElementById("get-github-username").value);
          }}
        >
          Click to fetch
        </button>
      </div>
      {userName === "" ? <></> : <UserDetails userName={userName} />}
    </div>
  );
};

export default AboutUS;
