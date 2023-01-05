import React from 'react';
import {
    AboutContainer,
    ImageContainer,
    TextContainer,
} from './AboutStyles';

import AboutImage from '../../assets/About_Image.jpg';

// Animations
import { scrollReveal } from "../../Animations";
import { useScroll } from "../../UseScroll";

const About = () => {

    const [element, controls] = useScroll();

    return (
        <AboutContainer
            variants={scrollReveal}
            animate={controls}
            initial="hidden"
            ref={element}
            id="About"
        >
                <ImageContainer>
                    <img src={AboutImage} alt="About" />
                </ImageContainer>
                <TextContainer>
                    <h3>About Us</h3>
                    <h2>Lorem ipsum</h2>
                    <p> 
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Aspernatur exercitationem corporis necessitatibus soluta eum 
                    alias nostrum quasi. Voluptatum possimus similique eius 
                    beatae officiis, enim dolorem, commodi iure, labore 
                    voluptatem amet?
                    </p>
                </TextContainer>
        </AboutContainer>
    );
}
 
export default About;