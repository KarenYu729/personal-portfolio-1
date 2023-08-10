import {Container, Row, Col, Tab, Nav} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/proj-img-1.png";
import projImg2 from "../assets/img/proj-img-2.png";
import projImg3 from "../assets/img/proj-img-3.png";
import colorSharp2 from "../assets/img/color-sharp.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './project.style.css'

import projImg4 from "../assets/img/proj-img-4.png"
import projImg5 from "../assets/img/proj-img-5.png"
import projImg6 from "../assets/img/proj-img-6.png"
import projImg7 from "../assets/img/proj-img-7.png"
import projImg8 from "../assets/img/proj-img-8.png"
import projImg9 from "../assets/img/proj-img-9.png"


const Projects = () => {

    const projects = [
        {
            title: "Birds' Species Detector and Classifier",
            description: "Python, Detectron2, PyTorch, Faster R-CNN",
            projectURL: "https://www.youtube.com/watch?v=bKNdOiYu7QM",
            imgUrl: projImg1,
        },
        {
            title: "New York Traffic Accident Study",
            description: "R, R shiny, ggplot2",
            projectURL: "#",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            projectURL: "https://www.youtube.com/watch?v=ZAxsq64Wb5Q",
            imgUrl: projImg3,
        },
    ];

    const projects2 = [
        {
            title: "Weather App",
            description: "HTML, CSS, JavaScript",
            projectURL: "https://github.com/KarenYu729/WeatherApp",
            imgUrl: projImg4,
        },
        {
            title: "Monster Rolodex",
            description: "React, HTML, CSS, JavaScript",
            projectURL: "https://github.com/KarenYu729/monster-rolodex",
            imgUrl: projImg5,
        },
        {
            title: "Tic-Tac-Toe",
            description: "HTML, CSS, JavaScript",
            projectURL: "https://github.com/KarenYu729/tic-tac-toe",
            imgUrl: projImg6,
        },
        {
            title: "Shopping Cart",
            description: "React, HTML, CSS, JavaScript",
            projectURL: "https://github.com/KarenYu729/shopping-cart",
            imgUrl: projImg7,
        },
        {
            title: "React Calculator",
            description: "React, HTML, CSS, JavaScript",
            projectURL: "https://github.com/KarenYu729/react-calculator",
            imgUrl: projImg8,
        },
        {
            title: "To Do List",
            description: "React, HTML, CSS, JavaScript",
            projectURL: "https://github.com/KarenYu729/to-do-list",
            imgUrl: projImg9,
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({isVisible}) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>
                                        Welcome to my portfolio! Here, you'll find a snapshot of some of my noteworthy
                                        projects. Please note that some internship projects are not featured here,
                                        and I've focused on showcasing my data science and front-end endeavors.
                                    </p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills"
                                             className="nav-pills mb-5 justify-content-center align-items-center"
                                             id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp"
                                                     className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <p>In this section, you'll discover projects that delve into the realm
                                                    of data science. I've explored various aspects, including image
                                                    recognition, data analysis, and data visualization. Utilizing Python
                                                    and R languages, these projects reflect my analytical prowess and
                                                    problem-solving skills.</p>
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>

                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <p>Step into the world of front-end development with Tab 2. Here, I've
                                                    curated an assortment of projects primarily crafted using HTML,
                                                    CSS, and JavaScript. Some have even embraced the power of the React
                                                    framework, showcasing my proficiency in creating engaging and
                                                    interactive user experiences.</p>
                                                <Row>
                                                    {
                                                        projects2.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>

                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <p>Stay tuned for more exciting content! Tab 3 is currently a placeholder,
                                                    but I'm excited to populate it with fresh projects and insights in the near future.</p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>

            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}

export default Projects;