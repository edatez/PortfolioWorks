import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";

function About() {
  return (
    <Container>
      <Row>
        <div className="box">
          <h1>About Me</h1>
          <Row>
          <Col md={3}>
              <img src="../../images/Eda.jpg"
                alt="Eda Tezcanli"
                className="img-fluid rounded float-left"></img>
            </Col>
            <Col md={6}>
              <p>
                Hello, my name is Eda. I am a full stack web developer with an
                extensive background in user experience and design. Recent
                graduate of the University of Washington Coding Boot Camp with
                skills in both font-end and back-end. Holds a Bachelor's degree
                in Industrial Engineering as well as a Master's degree in
                Industrial Design. I have experience in instructing and working
                as a designer with cross-functional teams.
              </p>
              <br></br>
              <p>
                I have a firm understanding of HTML, CSS, and JavaScript with
                many deployed applications on my{" "}
                <a href="https://github.com/edatez">GitHub account</a>. I am now
                skilled in HTML, CSS, Javascript, MongoDb, and React. I applied
                aspects of UX and agile development in a recent project where I
                worked in a team of four to develop an app called “Med Handoff”
                that helps to standardize patient care by mitigating the gap in
                communication between health practitioners and their supervisors
                so that patient care can be optimized. This project received
                favorable reviews for both purpose and outcomes when presented
                to industry leaders during the boot camp demo day. Eager to
                combine my background in design with my technical skills to
                create intuitive interactions and experiences on the web.
              </p>
            </Col>
          </Row>
        </div>
      </Row>
    </Container>
  );
}

export default About;
