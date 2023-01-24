import styled from 'styled-components';

export const MobileContainer = styled.div`
    display: flex;
`;

export const MobileLinksContainer = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    background-color: var(--grey);
    padding: 10rem 10rem;
    gap: 4rem;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
`;

export const MobileLinks = styled.li`
    display: inline-block;
    list-style: none; 
    letter-spacing: .1rem;
    font-size: 22px;
    color: var(--white);
    cursor: pointer;
    &:hover {
        color: var(--gold);
    }
`;
