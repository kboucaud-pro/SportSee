import React from "react";
import { Cell, Label, Pie, PieChart, ResponsiveContainer } from "recharts";
import PieLabel from "./PieLabel.tsx";

function ObjectiveCircle(data) {
  const currentObjective = data.data * 100;
  const leftObjective = 100 - currentObjective;

  const pieValues = [
    { name: "Objectif réalisé", value: currentObjective },
    { name: "Objectif a faire", value: leftObjective },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={[{ background: 1 }]}
          dataKey="background"
          cx="50%"
          cy="50%"
          innerRadius={0}
          outerRadius={60}
          stroke="none"
          fill="#FFFFFF"
        >
        </Pie>
        <Pie
          data={pieValues}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          startAngle={90}
          endAngle={450}
          cornerRadius={40}
          stroke="none"
          fill="#FFFFFF"
        >
          <Cell key="cell-0" fill="#FF0000" />
          <Cell key="cell-1" fill="#FBFBFB" />
          <Label
            content={<PieLabel currentObjective={currentObjective} />}
            position="center"
          />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default ObjectiveCircle;
