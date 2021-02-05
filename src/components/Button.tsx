import React from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.a`
    -moz-user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    background-color: ${({theme}) => theme.secondary};
    z-index: -2;
    font-size: 2.2vw;
    padding: .3vw;
    height: 3vh;
    width: 5vw;
    border: 1px solid;
    box-shadow: 5px 10px ${({theme}) => theme.shadow};
    transition: all 0.5s ease-out;

    &:hover{
        transition: all 0.5s ease-in-out;
        box-shadow: 2.5px 5px ${({theme}) => theme.hover};
    }
`
const HomeWrapper = styled.div`
    margin-top: 5vh;
    margin-right: 80vw;
`
export function Home(){
    return(
        <HomeWrapper>
            <Button href="/">Home</Button>
        </HomeWrapper>
    )
}
/**<Button href="/">Home</Button> */
export default function Button(props){
    return(
        <ButtonWrapper href={props.href}>
            {props.children}
        </ButtonWrapper>
    )
}