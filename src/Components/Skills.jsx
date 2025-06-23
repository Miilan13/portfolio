import React from "react";
import "./Skills.css";

const skills = [
  { name: "HTML5", icon: "🌐" },
  { name: "CSS3", icon: "🎨" },
  { name: "JavaScript", icon: "⚙️" },
  { name: "React.js", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "Express.js", icon: "🚂" },
  { name: "MongoDB", icon: "🍃" },
  { name: "MySQL", icon: "💾" },
  { name: "GitHub", icon: "🐱" },
  { name: "Bootstrap", icon: "🅱️" },
  { name: "Tailwind CSS", icon: "🌬️" },
  { name: "REST API", icon: "🔗" },
];

const Skills = () => {
  return (
    <section className="skills-section py-5">
      <div className="container">
        <div className="row text-center">
          {skills.map((skill, i) => (
            <div className="col-6 col-md-3 mb-4" key={i}>
              <div className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-name">{skill.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
