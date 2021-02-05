import { createGlobalStyle, ThemeConsumer } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html{
        cursor: url("/public/cursor.png"), auto;
        scroll-behavior: smooth;
        width: 100vw;
        height: 100vw;
        overflow-x: hidden;
        font-family: 'Ubuntu Mono', monospace;
        color: ${({theme}) => theme.text};
        text-align: center;
        background-color: ${({theme}) => theme.body};
    }
    .indented{
        padding-left: 40px;
    }
    ::selection {
        background:#CBEBB3;
    }

    ::-moz-selection {
        background: #CBEBB3; /* Gecko Browsers */
    }
    br{
    line-height: 2.5vw;
    }
    .inlinelink{
        background-color: transparent;
        margin-left: .5vw;
        color: #A1EC66;
    }

    .inlinelink:hover{
        transition: all 0.8s ease-in-out;
        color: #888888;
    }

    h2{
        padding-left: 0;
        text-align: left;
        color: ${({theme}) => theme.tertiary};
        font-size: 25px;
    }

    h3{
        text-decoration: underline 5px;
        padding-left: 0;
        color: ${({theme}) => theme.link};
        font-size: 35px;
        text-align: left;
    }

    h4{
        text-align: center;
    }

    li{
        list-style-type:square;
        padding: 0px;
        margin: 0px;
        text-align: left;
        font-size: 30px;
        color: #888888;
    }

    h5{
        color: ${({theme}) => theme.ptext};
        font-size: 25px;
        text-align: left;
        padding-bottom: 8px;
        margin: 0;
    }

    p{
        padding-top: 0;
        padding-left: 70px;
        padding-right: 70px;
        text-align: left;
        font-size: 30px;
        color: ${({theme}) => theme.ptext};
    }

    body{
        margin: 0;
    }

    img{
        -moz-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        margin: auto;
        display: block;
    }
    .icon{
        background-color: ${({theme}) => theme.body};
        padding: 0;
        margin: 0;
        width: 3.5%;
        transition: all 0.5s ease-in-out;
        display: inline-block;
    }

    .icon:hover{
        color: #A8D386;
    }
    a{
        margin-left: 5%;
        color: #4D4D4D;
        flex-direction: row;
    }
`

export default GlobalStyle