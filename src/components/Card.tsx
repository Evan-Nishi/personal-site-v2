import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: ${({theme}) =>  theme.secondary};
    margin-left: 15%;
    margin-right: 15%;
    width: 70%;
    height: 100%;
    border: 1px solid;
    padding: 15px;
    box-shadow: 10px 15px ${({theme}) => theme.shadow};
    transition: all 0.5s ease-in-out;

    &:hover{
        box-shadow: 15px 20px ${({theme}) => theme.hover}
    }
`
export default function Card(props){
    return(
        <Wrapper>
            {props.children}
            <br/>
        </Wrapper>
    )
}