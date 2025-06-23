import React from "react";
import profileImg from "../assets/Profile_img.jpg";
import "./Home.css";

const techStack = [
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
  { name: "Tailwind", icon: "🌬️" },
];

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="container my-2">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-5 fw-bold lh-1 text-white">
              <span className="text-primary  font-light ">Namasté, I'm</span> <span className="font-extrabold">Milan Solanki</span>
            </h1>
            <p className="lead text-white">
              I build modern, responsive web applications using MongoDB,
              Express.js, React.js, and Node.js. I’m passionate about clean
              code, smooth user experiences, and turning ideas into real-world
              projects.
            </p>
          </div>
          <div className="col-lg-4 offset-lg-1 d-flex align-items-center justify-content-center p-0 overflow-hidden shadow-lg">
            <img
              className="img-fluid rounded-circle shadow-lg border border-primary my-3"
              src={profileImg}
              alt="Profile"
              style={{ width: "250px", height: "250px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      {/* Infinite Loop Section */}
      <section className="infinite-loop-section m-1 p-2">
        <div className="loop-row">
          <div className="loop-track to-left">
            {[...techStack, ...techStack].map((tech, i) => (
              <div className="loop-item" key={`top-${i}`}>
                <span className="icon">{tech.icon}</span>
                <span className="label">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="loop-row">
          <div className="loop-track to-left">
            {[...techStack, ...techStack].map((tech, i) => (
              <div className="loop-item" key={`bottom-${i}`}>
                <span className="icon">{tech.icon}</span>
                <span className="label">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
