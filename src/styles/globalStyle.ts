import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`

    html,
    body {
        background: ${props => props.theme.colors.background};
        color:${props => props.theme.colors.text};
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    code, pre {
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
        color: gray;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {

        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    .amparo { background-color: #E6A759 }
    .mavicard { background-color: #0B9B8C }
    .en { opacity: 1; }
    .se { opacity: 0.6; }
`;
