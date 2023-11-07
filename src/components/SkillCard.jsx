import React from "react";

const SkillCard = ({ img, text, textColor }) => {
  return (
    <div className="skill__card shadow-lg lg:transition-transform lg:hover:scale-110 lg:animate-in lg:slide-in-from-bottom-12 lg:duration-700">
      <img src={img} alt="" />
      <h1 className={`font-bold ${textColor}`}>{text}</h1>
    </div>
  );
};

export default SkillCard;
