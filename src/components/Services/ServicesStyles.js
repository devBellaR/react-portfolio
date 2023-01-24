import styled from 'styled-components';
import { Device } from '../Responsive/responsive';
import { motion } from 'framer-motion';

export const ServicesContainer = styled(motion.div)`
    margin: 6%;
    padding: 4%;
    margin-right: 10%;
    margin-left: 10%;
    text-align: center;
    @media ${Device.laptop} {
        margin-left: 4%;
        margin-right: 4%;
    }
    @media ${Device.tablet} {
        margin: 8%;
        padding: 8%;
        margin-left: 8%;
        margin-right: 8%;
    }
`;

export const SubTitle = styled.h3`
    color: var(--gold);
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
    padding: 5rem 3rem;
    h2 {
        font-size: clamp(1.2rem, 2vw, 1.4rem);
        padding-top: 2rem;
        text-transform: uppercase;
    }
    p {
        font-size: clamp(1rem, 1.5vw, 1.2rem);
        padding-top: 1rem;
    }
    @media ${Device.tablet} {
        padding: 2rem 2rem;
    }
`;



