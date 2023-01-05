import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Device } from '../Responsive/responsive';

export const ContactContainer = styled(motion.div)`
    padding: 10%;
    padding-left: 20%;
    padding-right: 20%;
    background-color: #ececec;
    gap: 0rem;
    @media ${Device.tablet} {
        padding: 13%;
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

export const ContactWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media ${Device.mobileL} {
        flex-direction: column;
    }
`;

export const Form = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    gap: 2rem;
    flex-direction: column;
    padding-top: 10%;
    textarea, input {
        border: none;
        border-bottom: 0.1rem solid var(--grey);
        width: 80%;
        padding: 0.7rem;
        @media ${Device.tablet} {
            width: 100%;
    }
    }
    textarea {
        padding-bottom: 3rem;
    }
    button {
        margin: 1rem;
        padding: .75rem 2rem;
        font-size: clamp(1rem, 2vw, 1rem);
        letter-spacing: .1rem;
        border: none;
        border-radius: 0.5rem;
        background-color: var(--blue);
        color: var(--white);
        transition: all .3s ease-in-out;
        @media ${Device.mobileL} {
            padding: .75rem 1.5rem;
        }
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    flex: 1;
    font-size: 20px;
    div {
        display: flex;
        flex-direction: row;
        padding: 1rem;
        p {
            padding-left: 1rem;
        }
    }
`;