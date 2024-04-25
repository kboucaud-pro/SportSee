import React, { useEffect, useState } from "react";

import Topbar from "../components/Topbar.tsx";
import Leftbar from "../components/Leftbar.tsx";

import { UserApi } from "../api/UserApi.tsx";

import "../style/home.css";
import ObjectiveCircle from "../components/ObjectiveCircle.tsx";
import SessionDuration from "../components/SessionDuration.tsx";
import DailyActivity from "../components/DailyActivity.tsx";

function Home() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    UserApi.getUserById(12).then(function (response) {
      setUserData(response.data);
      setLoading(false);
    });
  }, []);

  if (!loading) {
    console.log(userData);
  }

  //console.log(process.env.REACT_APP_DATA_MODE);
  return (
    <div className="top-bar-body">
      <Topbar />
      <div className="left-bar-body">
        <Leftbar />
        <div className="body">
          {loading ? (
            <span>Chargement en cours</span>
          ) : (
            <div className="user-data">
              <div className="welcome-header">
                <span>Bonjour {userData.userInfos.firstName}</span>
                <span>Félicitation, vous avez explosés vos objectifs hier</span>
              </div>
              <div className="user-values">
                <div className="user-graphes">
                  <span className="user-main-graph"><DailyActivity userId={userData.id} /></span>
                  <div className="user-secondary-graphes">
                    <span className="secondary-graph">
                      <SessionDuration userId={userData.id} />
                    </span>
                    <span className="secondary-graph"></span>
                    <span className="secondary-graph">
                      <ObjectiveCircle data={userData.todayScore} />
                    </span>
                  </div>
                </div>
                <div className="user-nutriments">
                  <span className="nutriment"></span>
                  <span className="nutriment"></span>
                  <span className="nutriment"></span>
                  <span className="nutriment"></span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
