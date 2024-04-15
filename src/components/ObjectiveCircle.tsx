import React from "react";
import { Cell, Label, Pie, PieChart } from "recharts";
import PieLabel from "./PieLabel.tsx";

function ObjectiveCircle(data) {
  const currentObjective = data.data * 100;
  const leftObjective = 100 - currentObjective;

  const pieValues = [
    { name: "Objectif réalisé", value: currentObjective },
    { name: "Objectif a faire", value: leftObjective },
  ];

  return (
    <PieChart width={180} height={180}>
      <Pie
        data={pieValues}
        dataKey="value"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
		startAngle={180}
		endAngle={540}
		cornerRadius={40}
		stroke="none"
      >
        <Cell key="cell-0" fill="#FF0000" />
        <Cell key="cell-1" fill="#FBFBFB" />
		<Label
            content={<PieLabel currentObjective={currentObjective} />}
            position="center"
          />
      </Pie>
    </PieChart>
  );
}

export default ObjectiveCircle;
