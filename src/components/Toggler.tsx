import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'
import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    -moz-user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    background-color: ${({theme}) => theme.secondary};
    z-index: -2;
    font-size: 2.2vw;
    padding: .3vw;
    height: 3vh;
    width: 5vw;
    border: 8px solid;
    box-shadow: 5px 10px ${({theme}) => theme.shadow};
    transition-duration: 0.4s;
    position: absolute;
    margin-top: 20vh;
    margin-left: 5vw;

    &:active{
        box-shadow: 1px 1px ${({theme}) => theme.hover};
        transform: translateY(4px) translateX(4px);
    }

    &hover{
        background: ${({theme}) => theme.secondary};
        color: ${({theme}) => theme.tertiary};
    }
`

const Toggle = ({theme,  toggleTheme, text }) => {
    return (
        <Button onClick={toggleTheme} >
          {text}
        </Button>
    )
}

export default Toggle
