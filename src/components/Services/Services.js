import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faVideo, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';

import {
    ServicesContainer,
    SubTitle,
    Title, 
    ServiceWrapper,
    Service
} from './ServicesStyles';

// Animations
import { scrollReveal } from '../../Animations';
import { useScroll } from "../../UseScroll";

const Services = () => {

    const [element, controls] = useScroll();

    return (
        <ServicesContainer
            id="Services"
            variants={scrollReveal}
            animate={controls}
            initial="hidden"
            ref={element}
        >
            <SubTitle>OUR SERVICES</SubTitle>
            <Title>What we offer</Title>
                <ServiceWrapper>
                    <Service>
                        <FontAwesomeIcon icon={faCamera} fontSize="50px" color="var(--light-grey)"/>
                        <h2>Photography</h2>
                        <p>
                        Lorem ipsum dolor, sit amet consectetur 
                        adipisicing elit.
                        </p>
                    </Service>
                    <Service>
                        <FontAwesomeIcon icon={faVideo} fontSize="50px" color="var(--light-grey)"/>
                        <h2>Videography</h2>
                        <p>
                        Lorem ipsum dolor, sit amet consectetur 
                        adipisicing elit.
                        </p>
                    </Service>
                    <Service>
                        <FontAwesomeIcon icon={faWandMagicSparkles} fontSize="50px" color="var(--light-grey)"/>
                        <h2>Editing</h2>
                        <p>
                        Lorem ipsum dolor, sit amet consectetur 
                        adipisicing elit.
                        </p>
                    </Service>
                </ServiceWrapper>
         
        </ServicesContainer>
    );
}
 
export default Services;