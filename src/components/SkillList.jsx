import React from 'react'
import Skill from './Skill';
const SkillList = () => {
    const skills = [
        {
          skill: "HTML+CSS",
          level: "advanced",
          color: "#2662EA"
        },
        {
          skill: "JavaScript",
          level: "advanced",
          color: "#EFD81D"
        },
        {
          skill: "Web Design",
          level: "advanced",
          color: "#C3DCAF"
        },
        {
          skill: "Git and GitHub",
          level: "intermediate",
          color: "#E84F33"
        },
        {
          skill: "React",
          level: "advanced",
          color: "#60DAFB"
        },
        
      ];
  return (
    <div className="skill-list">
        <div className="skill-list">
        {
            skills.map((skilllist)=>{
                if (skilllist.level != null)
                    return <Skill skill={skilllist.skill} level={skilllist.level} color={skilllist.color}/>
                return null;
            })
        }
    </div>
      
    </div>
  )
}

export default SkillList
