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
              <img
                src="../../images/Eda.jpg"
                alt="Eda Tezcanli"
                className="img-fluid rounded float-left"
              ></img>
            </Col>
            <Col md={6}>
              <p>
                Hello, my name is Eda. Full stack web developer with a background in user experience and design. Hold a
                Bachelor's degree in Industrial Engineering and a
                Master's degree in Industrial Design. Experienced in
                instructing and working as a designer with cross-functional
                teams.
              </p>
              <br></br>
              <p>
                Have a firm understanding of HTML, CSS, and JavaScript with
                many deployed applications on my{" "}
                <a href="https://github.com/edatez">GitHub account</a>. Now
                skilled in HTML, CSS, Javascript, MongoDb, and React. I applied
                aspects of UX and agile development in a recent project
                developed an app called “Med Handoff” that helps to standardize
                patient care by mitigating the gap in communication between
                health practitioners and their supervisors so that patient care
                can be optimized. This project received favorable reviews for
                both purpose and outcomes. Eager to combine my background in
                design with my technical skills to create intuitive interactions
                and experiences on the web.
              </p>
            </Col>
            <Col md={6}>
                    <div className="box">
                        <h3>My Info</h3>
                        <ul>
                            <li><a href="https://github.com/edatez">GitHub</a></li>
                            <li><a href="https://www.linkedin.com/in/eda-tezcanli-tuncer/">LinkedIn</a></li>
                            <li>Email me at <a href="mailto:edatezcanli@gmail.com">edatezcanli@gmail.com</a></li>
                        </ul>
                    </div>
                </Col>
          </Row>
        </div>
      </Row>
    </Container>
  );
}

export default About;
