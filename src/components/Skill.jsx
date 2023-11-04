import React from 'react';

const Skill = ({ skill, color, level }) => {
  // Check if level is null, and if so, return null to prevent rendering the component.

  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" ? "👶" : null}
      </span>
      <span>
        {level === "intermediate" ? "👍" : null}
      </span>
      <span>
        {level === "advanced" ? "💪" : null}
      </span>
    </div>
  );
}

export default Skill;
