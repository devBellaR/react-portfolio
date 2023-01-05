import styled from 'styled-components';
import { Device } from '../Responsive/responsive';

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    min-height: 10vh;
    padding: 2.5rem 5rem;
    @media ${Device.tablet} {
        padding: 1.5rem 3rem;
    }
`;

export const Logo = styled.h2`
    z-index: 2;
    color: var(--white);
    letter-spacing: 0.5rem;
    font-size: clamp(1.2rem, 4vw, 1.5rem);
`;

export const NavLinksContainer = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
`;

export const NavLinks = styled.li`
    display: inline-block;
    list-style: none; 
    letter-spacing: .1rem;
    color: var(--white);
    cursor: pointer;
    transition: .3s ease-in-out;
    &:hover {
        transition: .3s ease-in-out;
        scale: 1.1;
    }
`;