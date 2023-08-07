import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'PyeongChangPeace-Light';
        src: url('../assets/font/PyeongChangPeace-Light.otf');
    }
    @font-face {
        font-family: 'PyeongChangPeace-Bold';
        src: url('../assets/font/PyeongChangPeace-Bold.otf');
    }
    @font-face {
        font-family: 'GwangyangSunshine-Light';
        src: url('../assets/font/GwangyangSunshine-Regular.otf');
    }
    @font-face {
        font-family: 'GwangyangSunshine-Bold';
        src: url('../assets/font/GwangyangSunshine-Bold.otf');
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
        font-family: 'PyeongChangPeace-Regular', 'PyeongChangPeace-Light';

        @media screen and (max-width:820px) {
            font-size: 50%;
        }
    }

    ul, li {
        list-style: none;
    }

    h1 {
        font-size:${({ theme }) => theme.FONT_SIZE.huge};
    }

    h2 {
        font-size:${({ theme }) => theme.FONT_SIZE.big};
        font-weight: bold;
    }

    h2 {
        font-size:${({ theme }) => theme.FONT_SIZE.large};
        font-weight: bold;
    }

    h3 {
        font-size:${({ theme }) => theme.FONT_SIZE.medium};
        font-weight: bold;
    }

    h4 {
        font-size:${({ theme }) => theme.FONT_SIZE.small};
        font-weight: bold;
    }

    button {
        border: none;
        font-family: 'GwangyangSunshine-Light'
    }

    input {
        outline: none;
        font-family: 'GwangyangSunshine-Light'
    }

    textarea {
        font-size:${({ theme }) => theme.FONT_SIZE.small};
        font-family: 'GwangyangSunshine-Light'
    }

    p, div, span {
        font-size:${({ theme }) => theme.FONT_SIZE.small};
    }
`

export default GlobalStyles
