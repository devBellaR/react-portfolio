import styled from 'styled-components';
import { Device } from '../Responsive/responsive';
import { motion } from 'framer-motion';

export const PortfolioContainer = styled(motion.div)`
    margin: 4%;
    padding: 4%;
    min-height: 100vh;
    text-align: center;
    @media ${Device.tablet} {
        margin: 8%;
        padding: 8%;
    }
`;

export const Title = styled.h2` 
    padding-bottom: 5%;
    font-size: clamp(2.5rem, 4vw, 3rem);
    @media ${Device.tablet} {
        padding-bottom: 15%;
    }
`;

export const SubTitle = styled.h3`
    font-size: clamp(.7rem, 4vw, 1.2rem);
    text-transform: uppercase;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
      img {
        position: absolute;
        width: 60%;
    }
`;
