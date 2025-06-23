import React from "react";
import profileImg from "../assets/Profile_img.jpg";
import "./About.css";

const About = () => {
  return (
    <section className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5 text-center mb-4 mb-md-0">
            <img
              src={profileImg}
              alt="Milan Solanki"
              className="img-fluid rounded-4 shadow-lg border border-primary"
              style={{ maxWidth: "280px", height: "auto" }}
            />
          </div>
          <div className="col-md-7 text-light">
            <p className="mb-3">
              Hello! I'm <strong>Milan Solanki</strong>, a passionate and detail-oriented B.Tech IT student with a focus on full-stack web development. I specialize in the <strong>MERN stack (MongoDB, Express.js, React.js, Node.js)</strong> and love turning ideas into scalable, user-friendly applications.
            </p>
            <p className="mb-3">
              I have hands-on experience building responsive websites and applications using modern tools and frameworks. I enjoy crafting clean UI, writing maintainable code, and continuously learning to stay updated in the tech world.
            </p>
            <p className="mb-3">
              Currently, I’m aiming to grow as a front-end developer while mastering back-end technologies. My goal is to become a skilled full-stack developer and contribute to meaningful projects in a collaborative environment.
            </p>
            <p>
              When I'm not coding, I enjoy exploring new tech trends, working on side projects, and being part of developer communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
