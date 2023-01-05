import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { 
    ContactContainer,
    Title,
    SubTitle,
    ContactWrapper,
    Form,
    Info
} from './ContactStyles';

// Animations
import { scrollReveal } from '../../Animations';
import { useScroll } from "../../UseScroll";

const Contact = () => {

    const [element, controls] = useScroll();

    return (
    <ContactContainer
        id="Contact"
        variants={scrollReveal}
        animate={controls}
        initial="hidden"
        ref={element}>
    
        <ContactWrapper>
            <Info>
                <SubTitle>Contact Us</SubTitle>
                <Title>Get in touch</Title>
                <div><FontAwesomeIcon icon={faLocationDot} fontSize="30px"/><p>Address 1, Country</p></div>
                <div><FontAwesomeIcon icon={faPhone} fontSize="30px"/><p>012 3456 7890</p></div>
                <div><FontAwesomeIcon icon={faEnvelope} fontSize="30px"/><p>support@email.com</p></div>
            </Info>
            <Form>
                <input type="text" placeholder="NAME"/>
                <input type="tel" placeholder="PHONE"/>
                {/* <input type="tel" placeholder="EMAIL"/> */}
                <textarea placeholder="MESSAGE"></textarea>
                <button>Send Message</button>
            </Form>
        </ContactWrapper>
    </ContactContainer>
)};

export default Contact;
