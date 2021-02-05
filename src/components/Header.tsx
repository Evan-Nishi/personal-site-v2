import styled from 'styled-components'

const Wrapper = styled.div`
    height: 10%;
    flex-direction: row;
    position: absolute;
    margin-top: 13.5vh;
    margin-left: 13.2vw;
`

export default function Header(props){
    return(
        <Wrapper className="animated fadeIn delay-2s">
            {props.children}
        </Wrapper>
    )
}