import styled from 'styled-components';

const Wrapper = styled.div`
    font-size: 25px;
    background-color: #d6d6d6;
    margin-left: 5%;
    margin-right: 5%;
    opacity: 0.5;
    padding-bottom: 2.5%;
    border: 3px dotted;
    box-shadow: 10px 15px ${({theme}) => theme.shadow};
    transition: all 0.5s ease-in-out;
    @media (max-width: 1000px){
        display: none;
    }
    &:hover{
        box-shadow: 10px 15px ${({theme}) => theme.hover};
    }

`

export default function ClearCard(props){
    return(
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}