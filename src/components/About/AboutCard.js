import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Lando Sanchez </span>
            from <span className="purple"> Quezon City, Philippines.</span>
            
            
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Online Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime Movies
            </li>
            
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Code with purpose, innovate with passion, and leave a lasting impact on the world."{" "}
          </p>
          <footer className="blockquote-footer">Sanchez</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
