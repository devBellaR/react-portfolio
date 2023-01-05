import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle `
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :root {
        --white: #f1f1f1;
        --grey: #222222;
        --light-grey: #333333;
        --blue: #185f83;
    }
    h2, h3, p {
        color: var(--light-grey);
    }
`;

export default GlobalStyles;