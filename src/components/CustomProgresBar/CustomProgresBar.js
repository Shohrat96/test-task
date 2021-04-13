import React from "react";
import { Progress } from "antd";

const CustomProgresBar = ({ percent, trailColor }) => {
  return (
    <Progress
      showInfo={false}
      strokeColor={{
        "0%": "#4d1ed3",
        "100%": "#a282ff",
      }}
      trailColor={trailColor || "#fff"}
      percent={percent}
    />
  );
};

export default CustomProgresBar;
