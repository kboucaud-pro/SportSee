import React, { useEffect, useState } from "react";
import { UserApi } from "../api/UserApi.tsx";
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

function DailyActivity(userId) {
  const [userDailyActivity, setUserDailyActivity] = useState(undefined);

  useEffect(() => {
    UserApi.getUserActivity(userId.userId).then((response) => {
      setUserDailyActivity(response.data);
    });
  }, []);

  if (undefined !== userDailyActivity) {
    console.log(userDailyActivity);
  }

  return (
    <div className="sessionDurationGraph">
      {undefined === userDailyActivity ? (
        ""
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={userDailyActivity.sessions}
            margin={{
              top: 20,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <Legend
              verticalAlign="top"
              align="right"
              iconType="circle"
              height={20}
              margin={{
                top: 20,
                right: 0,
                left: 0,
                bottom: 5,
              }}
            />
            <YAxis width={40} orientation="right" tickCount={3} axisLine={false} tickLine={false} />
            <XAxis tickLine={false} />
            <CartesianGrid vertical={false} />
            <Bar dataKey="kilogram" fill="#282D30" barSize={7} radius={[10, 10, 0, 0]} />
            <Bar dataKey="calories" fill="#E60000" barSize={7} radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default DailyActivity;
