import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const projects = [
{
name:"Earn It!",
description: "An application to keep your kids motivated to learn with positive reinforcement!",
image: "../images/earnit_img.png",
github_link:"https://github.com/edatez/Rewarding-App", 
deployed_url: "https://reward-application.herokuapp.com/"
},
{
  name:"Med Handoff",
  description: "Med Handoff is the point of patient care where information is most likely to be lost. To mitigate this gap in communication, Med-Handoff application standardizes the process so that patient care can be optimized and gaps in communication closed.",
  image: "../images/MedHandoff.png",
  github_link:"https://github.com/chrisjm093/med-handoff", 
  deployed_url: "https://uwproject2bootcamp.herokuapp.com/"
},

{
name:"CookWhatYouHave",
description: "Have you ever stared into the abyss of your fridge wondering what you can make with just apples, flour, and milk?",
image: "../images/CookWhatYouHave.png",
github_link:"https://github.com/haphan64/CookWhatYouHave", 
deployed_url: "https://haphan64.github.io/CookWhatYouHave/"
},
{
name:"Budget Tracker",
description: "Budget Tracker application that is available for offline access and functionality.",
image: "../images/BudgetTracker.png",
github_link:"https://github.com/edatez/Progressive-Budget", 
deployed_url: "https://gentle-cove-07462.herokuapp.com/"
},
{
name:"Scheduler Application",
description: "A simple calendar application that allows the user to save events for each hour of the workday day from 9AM to 5PM.",
image: "../images/Scheduler.png",
github_link:"https://github.com/edatez/Scheduler", 
deployed_url: "https://edatez.github.io/Scheduler/"
},
{
name:"Fitness Tracker",
description: "Simplest and most intuitive workout tracker",
image: "../images/FitnessTracker.png",
github_link:"https://github.com/edatez/fitness_tracker", 
deployed_url: "https://ancient-wildwood-50690.herokuapp.com/"
},
{
name:"Burgers Galore!",
description: "An app that lets users input the names of burgers they'd like to eat and devour.",
image: "../images/BurgersApp.png",
github_link:"https://github.com/edatez/Burger", 
deployed_url: "https://secret-hollows-21666.herokuapp.com/"
},
];

class Portfolio extends Component{
  state= {projects}


  render () {
    return (
      <>
        <Container>
          <Row>
          {projects.map((element) => {
          return (
            <Col md={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={element.image} 
//               myClickHandler = (params) => {
//               console.log("Click!!!");
//               });

//           render() {
//           return (
//           <EventCard myOnClick={()=> this.myClickHandler("any parameters")} />
//     );
// }
               />
              <Card.Body>
                <Card.Title>{element.name}</Card.Title>
                <Card.Text>{element.description}</Card.Text>
                
              </Card.Body>
            </Card>
            </Col>
            );
        })};
          </Row>    
        </Container>      
      </>
    );
  };
}




export default Portfolio;
