import React, { useEffect, useState } from "react";
import { UserApi } from "../api/UserApi.tsx";
import { Line, LineChart, ResponsiveContainer, XAxis } from "recharts";

function SessionDuration(userId) {
  const [userAverageSession, setUserAverageSession] = useState(undefined);

  useEffect(() => {
    UserApi.getUserAverageSession(userId.userId).then((response) => {
      setUserAverageSession(response.data);
    });
  }, []);

  if (undefined !== userAverageSession) {
    console.log(userAverageSession);
  }

  return (
    <div className="sessionDurationGraph">
      {undefined === userAverageSession ? (
        ""
      ) : (
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart data={userAverageSession.sessions}>
            <defs>
              <linearGradient id={`color#FFFFFF`} x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.4}></stop>
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity={1}></stop>
              </linearGradient>
            </defs>
            <XAxis
              dataKey="day"
              stroke="#FFFFFF"
              tickLine={false}
              axisLine={false}
            />
            <Line type="monotone" dataKey="sessionLength" stroke={`url(#color#FFFFFF)`} dot={false} strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default SessionDuration;
