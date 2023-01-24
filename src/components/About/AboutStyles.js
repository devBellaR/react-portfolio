import styled from 'styled-components';
import { Device } from '../Responsive/responsive';
import { motion } from 'framer-motion';

export const AboutContainer = styled(motion.div)`
    display: flex;
    background-color: var(--light-grey);
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-height: 60vh;
    padding: 10%;
    gap: 6rem;
    @media ${Device.tablet} {
        flex-direction: column; 
        gap: 3rem;
        padding: 16%;
    }
`;

export const ImageContainer = styled.div`
    flex: 1.5;
    img {
        width: 100%;
    }
`;

export const TextContainer = styled.div`
    flex: 1;
    h2 {
        color: var(--white);
        font-size: clamp(2.5rem, 4vw, 3rem);
    }
    h3 {
        color: var(--gold);
        font-size: clamp(.7rem, 4vw, 1.2rem);
        text-transform: uppercase;
    }
    p {
        color: var(--white);
        font-size: clamp(1rem, 1.5vw, 1.2rem);
        padding-top: 1.5rem;
    }
`;