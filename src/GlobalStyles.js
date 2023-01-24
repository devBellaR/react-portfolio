import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle `
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
    }
    body {
        background-color: var(--white);
    }

    :root {
        --white: #f1f1f1;
        --grey: #222222;
        --light-grey: #333333;
        --gold: #d5ab68;
    }
    h1, h2 {
        letter-spacing: 0.1rem;
    }
    h2, h3, p {
        color: var(--light-grey);
        font-weight: thin;
    }
`;

export default GlobalStyles;