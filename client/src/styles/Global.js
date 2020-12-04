import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif;
    }

    html, body, main {
        font-size: 1rem;
        height: 100%; // put this here to stick footer to bottom
    }

    body {
        h1, h2, h3, h4, p {
            margin-block-start: 0;
            margin-block-end: 0;
        }

        h1 {
            font-size: 4rem;
        }   

        h2 {
            font-size: 2.8rem;
        }

        h3{
            font-size: 2.3rem;
        }

        h4 {
            font-size: 2rem;
        }

        p {
            font-size: 1.6rem;
        }
    }
    ${normalize}
`;

export { GlobalStyles };
