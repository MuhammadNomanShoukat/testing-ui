import React from "react";
import "./choose-us-card-view.style.scss";
import {Row, Col, Container} from "react-bootstrap";

const ChooseUsCardView = ({card_data}) => {
   
    console.log(card_data)
    return(
        <Container fluid className="main-container">
            <Container className="inner-container">
                <Col lg={6}>
                    <div className="card-content">
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
            </Container>
        </Container>
    )
}

export default ChooseUsCardView;