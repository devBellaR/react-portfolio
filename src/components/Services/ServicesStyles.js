import styled from 'styled-components';
import { Device } from '../Responsive/responsive';
import { motion } from 'framer-motion';

export const ServicesContainer = styled(motion.div)`
    margin: 6%;
    padding: 4%;
    margin-right: 15%;
    margin-left: 15%;
    text-align: center;
    @media ${Device.laptop} {
        margin-left: 10%;
        margin-right: 10%;
    }
    @media ${Device.tablet} {
        margin: 8%;
        padding: 8%;
        margin-left: 8%;
        margin-right: 8%;
    }
`;

export const SubTitle = styled.h3`
    font-size: clamp(.7rem, 4vw, 1.2rem);
`;

export const Title = styled.h2`
    padding-bottom: 5%;
    font-size: clamp(2.5rem, 4vw, 3rem);
    @media ${Device.tablet} {
        padding-bottom: 15%;
    }
`;

export const ServiceWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4%;
    @media ${Device.tablet} {
        flex-direction: column;
        gap: 2rem;
    }
`;

export const Service = styled.div`
    padding: 3rem;
    border-radius: 1rem;
    box-shadow: .2rem .2rem .5rem #999999;
    transition: transform .3s ease-in-out;
    transform: translateY(0);
    h2 {
        font-size: clamp(1.4rem, 2vw, 1.7rem);
        padding-top: 2rem;
    }
    p {
        font-size: clamp(1rem, 1.5vw, 1.2rem);
        padding-top: 1rem;
    }
    :hover {
        transition: transform .3s ease-in-out;
        transform: translateY(-2%);
        scale: 1.04;
    }
`;



