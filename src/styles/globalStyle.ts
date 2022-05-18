import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`

    html,
    body {
        background: ${props => props.theme.colors.primary};
        color:${props => props.theme.colors.secondary};
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
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

    .main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .footer a {
        display: flex;
        justify-content: center;
        align-items: center;
    }




`;
