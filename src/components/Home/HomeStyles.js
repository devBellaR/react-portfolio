import styled from 'styled-components';
import { Device } from '../Responsive/responsive';
import Image from '../../assets/About_Image.jpg';

export const HomePageContainer = styled.div`
    background-image: url(${Image});
    /* background-color: #222222; */
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

export const TitleContainer = styled.div`
    text-align: center;
    text-shadow: 0px 4px 12px rgba(0, 0, 0, 0.49);
    h1 {
        font-size: clamp(2rem, 5vw, 3rem);
        text-transform: uppercase;
        padding: 1rem 0rem;
        color: var(--white);
    }
    h3 {
        font-size: clamp(1rem, 5vw, 1.5rem);
        color: var(--white);
    }
`;

export const Button = styled.button`
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
`;