
import React from "react";

const PieLabel = ({ viewBox, currentObjective = 0 }) => {
  const { cx, cy } = viewBox;
  return (
    <React.Fragment>
      <text x={cx - 15} y={cy - 5}>
        <tspan
          style={{
            fontWeight: 500,
            fontSize: "26px",
            fill: "#282D30",
            fontFamily: "Roboto",
          }}
        >
          {currentObjective}%
        </tspan>
      </text>
      <text x={cx - 50} y={cy + 15}>
        <tspan
          style={{
            fontSize: "16px",
            fill: "#74798C",
            fontFamily: "Roboto",
          }}
        >
          de votre objectif
        </tspan>
      </text>
    </React.Fragment>
  );
};

export default PieLabel;