import { Circle } from "rc-progress";
import React from "react";

type Props = {};

const SkillBar = (props: Props) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative">
        <Circle
          percent={10}
          strokeWidth={6}
          strokeLinecap="round"
          strokeColor={"#85D262"}
          transition="stroke 0.5s ease 0s"
          className="w-16 h-16"
        />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm">
          10%
        </span>
      </div>
      <h4 className="text-left text-sm">HTML 5</h4>
    </div>
  );
};

export default SkillBar;
