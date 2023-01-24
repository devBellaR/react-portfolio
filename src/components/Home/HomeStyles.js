import styled from 'styled-components';
import { Device } from '../Responsive/responsive';
import Image from '../../assets/Frontpage_background.jpg';

import { motion } from 'framer-motion';

export const HomePageContainer = styled(motion.div)`
    background-image: url(${Image});
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    position: relative;
`;

export const HomePage = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`;

export const TitleContainer = styled(motion.div)`
    text-align: center;
    h1 {
        font-size: clamp(2rem, 5vw, 3rem);
        text-transform: uppercase;
        padding: 1rem 0rem;
        color: var(--white);
    }
    h3 {
        font-size: clamp(1rem, 5vw, 1.5rem);
        color: var(--white);
        padding-bottom: .5rem;
    }
`;

export const InfoButton = styled(motion.button)`
    margin: .5rem;
    padding: .75rem 2rem;
    font-size: clamp(1rem, 2vw, 1rem);
    letter-spacing: .1rem;
    border: 2px solid var(--gold);
    border-radius: 2rem;
    background-color: transparent;
    color: var(--black);
    transition: all .3s ease-in-out;
    @media ${Device.mobileL} {
        margin: .5rem;
        padding: .75rem 1.5rem;
    }
    :hover {
        border: 2px solid var(--white);
        background-color: var(--white);
        cursor: pointer;
    }
`;


export const ContactButton = styled(motion.button)`
    margin: .5rem;
    padding: .75rem 2rem;
    font-size: clamp(1rem, 2vw, 1rem);
    letter-spacing: .1rem;
    border: none;
    border-radius: 2rem;
    background-color: var(--gold);
    color: var(--black);
    transition: all .3s ease-in-out;
    @media ${Device.mobileL} {
        margin: .5rem;
        padding: .75rem 1.5rem;
    }
    :hover {
        background-color: var(--white);
        cursor: pointer;
    }
`;