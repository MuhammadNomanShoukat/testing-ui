import React from "react";
import "./why-choose-us.style.scss";
import {Row, Col, Container} from "react-bootstrap";

const WhyChooseUs = ({card_list}) => {
    const chard_list_data = card_list.map(()=>{
        
    });
    return(
        <section id="why_choose_us_section">
            <Container fluid className="main-container">
                <Container className="inner-container">
                    <Row>
                        <Col lg={12}>
                            <div className="heading-content">
                                <div className="heading">
                                    <h2>WHY <span className="green-text">CHOOSE US</span></h2>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <div className="description-content">
                                <div className="heading">
                                    <h3>High engineering standards</h3>
                                </div>
                                <div className="description">
                                    <p>
                                    We focus on a number of technologies which helps us get strong performance. Delivering products for a wide range of end users, we look deeper into the processes, combining cutting-edge methods and simple solutions.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="description-content">
                                <div className="heading">
                                    <h3>Credible experience</h3>
                                </div>
                                <div className="description">
                                    <p>
                                    We focus on a number of technologies which helps us get strong performance. Delivering products for a wide range of end users, we look deeper into the processes, combining cutting-edge methods and simple solutions.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="description-content">
                                <div className="heading">
                                    <h3>Results driven development</h3>
                                </div>
                                <div className="description">
                                    <p>
                                    Customers’ needs come first. Launching a project, we specify practices to achieve it. In the development process, we focus on market demands and rely on users feedback to deliver the product which covers your scopes.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="description-content">
                                <div className="heading">
                                    <h3>Transparency and ease of work</h3>
                                </div>
                                <div className="description">
                                    <p>
                                    We encourage all our clients to take part in each step of the development process. So we keep the process clear to check results at any milestone. Both sides gain mutual benefits from cooperation.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    )
}

export default WhyChooseUs;