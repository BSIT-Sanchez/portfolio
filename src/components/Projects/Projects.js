import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bcp from "../../Assets/Projects/bcpCourses.png";
import sms from "../../Assets/Projects/sms.png";
import Netflixo from "../../Assets/Projects/netflixo.png";
import gym from "../../Assets/Projects/gym.png";
import lms from "../../Assets/Projects/lms.png";
import hotel from "../../Assets/Projects/hotel.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gym}
              isBlog={false}
              title="GenerationXgym"
              description="GenerationXGym, we've revolutionized the fitness experience by leveraging cutting-edge technology and modern design. Built using ReactJS and styled with TailwindCSS, our platform offers a seamless, responsive, and visually stunning interface for fitness enthusiasts of all levels."
              ghLink="https://github.com/BSIT-Sanchez/GenerationXGym"
              demoLink="https://generationxgym.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotel}
              isBlog={false}
              title="DineEase"
              description="DineEase redefines the way you book your stay with a sleek, intuitive platform designed for a seamless reservation experience. Built with ReactJS and Next.js, and powered by Sanity.io, our application ensures fast, reliable, and dynamic performance for users seeking their perfect hotel accommodations."
              ghLink="https://github.com/BSIT-Sanchez/DineEase"
              demoLink="https://dine-ease.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Netflixo}
              isBlog={false}
              title="Netflixo"
              description="Welcome to Netflixo, a next-generation streaming platform designed to bring you the best in entertainment with a sleek, modern interface. Inspired by Netflix and crafted using ReactJS and TailwindCSS, Netflixo offers a seamless, visually captivating experience that makes discovering and enjoying your favorite movies and shows easier than ever."
              ghLink="https://github.com/BSIT-Sanchez/netflixoClient"
              demoLink="https://netflixo-client.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bcp}
              isBlog={false}
              title="Online-Courses"
              description="Introducing our cutting-edge online courses platform, meticulously crafted with ReactJS and styled with TailwindCSS. This dynamic platform is designed to provide an exceptional learning experience, offering a wide range of courses that you can access from anywhere, at any time."
              ghLink="https://github.com/BSIT-Sanchez/Online-Courses"
              demoLink="https://bsit-sanchez.github.io/Online-Courses/home.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lms}
              isBlog={false}
              title="LMS"
              description="We are excited to introduce our comprehensive Learning Management System (LMS) and Student Management System (SMS), built with the robust MERN stack. Currently under development, this platform aims to streamline and enhance the educational experience for both administrators and students."
              ghLink="https://github.com/BSIT-Sanchez/LMS-Projects/tree/main/LMS"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sms}
              isBlog={false}
              title="SMS"
              description="We are excited to introduce our comprehensive Student Management System (SMS) and Learning Management System (LMS), built with the robust MERN stack. Currently under development, this platform aims to streamline and enhance the educational experience for both administrators and students."
              ghLink="https://github.com/BSIT-Sanchez/LMS-Projects/tree/main/SMS"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
