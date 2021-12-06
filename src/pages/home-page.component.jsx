import React, { useState, useEffect } from "react";

import { services_list, our_strategies, code_level, work_history, clients_images, clients_desc, copyright } from "./home.data";

import Navigation from "../componenets/home/navigation.component";
import Banner from "../componenets/home/banner-component";
import Services from "../componenets/home/services.component";
import Innovate from "../componenets/home/innovate.component";
import GreatWork from "../componenets/home/great-work.component";
import WorkHistory from "../componenets/home/work-history.component";
import CodeLevel from "../componenets/home/code-level.component";
import OurStrategy from "../componenets/home/our-strategy/our-strategy.component";
import OurClients from "../componenets/home/our-clients/our-clients.component";
import Footer from "../componenets/home/footer/footer.component";
import CopyRight from "../componenets/home/copy-right.component.jsx/copy-right.component";


const Home = () => {
    // Using hooks
    const [services, setServices] = useState([]);
    
    useEffect(()=>{
        setServices(services_list);
    }, [])

    return(
        <div>
            <Navigation />
            <Banner />
            <Services all_services={services}/>
            <Innovate />
            <GreatWork />
            <WorkHistory work_history_obj={work_history}/>
            <CodeLevel code_level_obj={code_level}/>
            <OurStrategy all_strategies={our_strategies}/>
            <OurClients all_clients={clients_images} client_desc_obj={clients_desc}/>
            <Footer />
            <CopyRight copyright_obj={copyright}/>
        </div>
    )
}

export default Home;