import React, { useEffect, useState } from "react";

import Topbar from "../components/Topbar.tsx";
import Leftbar from "../components/Leftbar.tsx";

import { UserApi } from "../api/UserApi.tsx";

import "../style/home.css";

function Home() {
  const [userData, setUserData] = useState(undefined);

  useEffect(() => {
    UserApi.getUserById(12).then(function (response) {
      setUserData(response.data);
    });
  });

  //console.log(process.env.REACT_APP_DATA_MODE);
  return (
    <div className="top-bar-body">
      <Topbar />
      <div className="left-bar-body">
        <Leftbar />
        <div className="body">
          {undefined === userData ? (
            <span>Chargement en cours</span>
          ) : (
            <span>Bonjour {userData.userInfos.firstName}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
