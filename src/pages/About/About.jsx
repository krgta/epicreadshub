import React from "react";
import "./About.css";
// import aboutImg from "../../images/about-img.jpg";
import aboutImg from "../../images/about-us-pic.png";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">
              About Civilised Book Manager
            </h2>
            <p className="fs-17">
              "Civilised Book Manager" is a user-friendly website that
              revolutionizes book management with its advanced features. Using
              machine learning, it provides personalized book recommendations,
              allowing users to discover new reads based on their preferences.
              Users can rate books, contributing to a collective rating system
              that helps others make informed choices. The website also offers a
              convenient readlist feature, enabling users to organize and plan
              their reading goals. With its systematic approach and intelligent
              algorithms, "Civilised Book Manager" transforms the reading
              experience into a seamless and engaging journey for book
              enthusiasts.
            </p>
            <h2>Contact Us (via LinkedIn)</h2>
            <ul>
              <a href="https://www.linkedin.com/in/rohit-rajpoot-4727b9293/">
                <h4 className="fs-17">Rohit Singh Rajpoot</h4>
              </a>
              <a href="https://www.linkedin.com/in/keshav-gupta-7409182b3/">
                <h4 className="fs-17">Keshav Gupta</h4>
              </a>
              <a href="https://www.linkedin.com/in/krishna-gupta-91761628a/">
                <h4 className="fs-17">Krishna Gupta</h4>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
