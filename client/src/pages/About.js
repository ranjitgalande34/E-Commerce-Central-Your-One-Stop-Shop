import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Hey there, I'm <strong>Ranjit</strong>, a software developer with a knack for e-commerce. I've created this website to make your online shopping experience smooth and enjoyable. With a passion for coding and design, I'm committed to providing you with a top-notch platform for all your shopping needs.

Beyond the screen, I'm a tech enthusiast, always eager to explore the latest innovations. Join me on this journey, and together, we'll navigate the digital aisles of convenience and style. Welcome, and happy shopping!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;