import React, { useState, useEffect} from "react";
import { why_choose_us } from "./about-us-data";
import { Row, Col, Container } from "react-bootstrap";
import "./about.style.scss";

import About_Banner from "../../assets/images/about-banner.png";
import { copyright } from "./about-us-data";

import Navigation from "../../context/navigation/navigation.component";
import Heading from "../../context/heading.component";
import CustomButton from "../../context/custom-button.component";

import HowWeDo from "../../componenets/about/how-we-do.component";
import WhyChooseUs from "../../componenets/about/why-chose-us/why-choose-us.component";
import Footer from "../../componenets/home/footer/footer.component";
import CopyRight from "../../componenets/home/copy-right.component.jsx/copy-right.component";

const About = () => {
    const [whyChoseUs, setWhyChoseUs] = useState([]);

    useEffect(()=>{
        setWhyChoseUs(why_choose_us);
    }, [])

    console.log(whyChoseUs)
    return(
        <section id="about_us_section">
            <Container fluid className="main-container p-0">
                <div className="navigation-bar">
                    <Navigation />
                </div>
                <Container className="inner-container">
                    <div className="about-content-1">
                        <Row>
                            <Col lg={6}>
                                <div className="content_1">
                                    <Heading text1="WHO" text2="ARE WE" left-green="true"/>
                                    <div className="description">
                                        <h5 className="title">
                                            We are a passionate experienced team with big ambitions.
                                        </h5>
                                        
                                        <p className="desc">
                                        Microrage Solutions is a technology service and support company committed to delivering innovation. Microrage provides high quality IT solutions and hosting services with optimal skills and service level. With deep industry and business process expertise and proven track record Microrage can utilize the right skills and technologies to help clients achieve real business outcome.
                                        </p>
                                        <div className="btn-wrapper">
                                            <CustomButton title="Check our portfolio" href="" icon="" name="" />
                                            <CustomButton title="Get in touch" href="" icon="" name="" />
                                        </div>
                                        
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="content_1">
                                    <img src={About_Banner} alt="about banner"/>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="about-content-2">
                        <Row>
                            <Col lg={6}>
                                <div className="content_2">
                                    <Heading text1="ABOUT " text2="MICRORAGE SOLUTIONS"/>
                                    <div className="description">
                                        <p className="desc">
                                        At Microrage Solutions we design and develop digital products including mobile apps, websites and web applications. The two cornerstones upon which we build successful software are user-centered interaction design and scalable software architecture. We offer flexible solutions custom-designed to meet your specific requirement. Our skilled experts not only have the technical experience, but an understanding of the business and industry to help you make the most of your IT investment.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="content_2">
                                    <div className="about-card">
                                        <div className="heading">
                                            <h2>Vision</h2>
                                        </div>
                                        <div className="desc">
                                            <p>
                                                <q>To provide the best solutions and technology that enable businesses to excel</q>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6}>
                                <div className="content_2">
                                    <div className="about-card">
                                        <div className="heading">
                                            <h2>Mission</h2>
                                        </div>
                                        <div className="points">
                                            <p>
                                                Microrage Solutions is founded on five guiding principles:
                                            </p>
                                            <ul>
                                                <li>To consistently deliver superior quality service</li>
                                                <li>To proactively communicate with clients throughout the process</li>
                                                <li>To honor client commitments for every project</li>
                                                <li>To execute projects with complete work ethic and integrity</li>
                                                <li>To keep our client as our first priority always</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="content_2">
                                    <div className="description">
                                        <p>
                                        Established in 2012, Microrage Solutions is forward looking and as a policy explores new fronts to stay abreast of the competition. The activities in export sector are being expanded and today the company is one of the leading service providers in its area of work. Large-scale modernization of existing systems is part of the continuing efforts to remain at the cutting edge of the IT business. Company works with our valued customers from around the globe.
                                        </p>
                                        <p>
                                        At Microrage Solutions, with Technical proficiency and expertise, we cohesively integrate graphic design with web page layout, with interactive programming, with database driven content, to plan, build and deploy e- business and to emerge as one of the top IT service provider. The business philosophy of the company is to lay emphasis on Human Values and Personal Relations. At Microrage – Technology meets emotions and limits are higher than the sky.’ Great stress is laid on proper communication, transparency and human relations, which forms an integral part of the corporate culture.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container >
            </Container >
            <HowWeDo />
            <WhyChooseUs card_list={whyChoseUs}/>
            <Footer />
            <CopyRight copyright_obj={copyright}/>
            
        </section>
    )
}

export default About;