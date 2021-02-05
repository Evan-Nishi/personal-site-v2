import React from 'react'
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa'
import styled from 'styled-components'

const FooterStyle = styled.div`
    text-align: center;
    height: 5%;
    width: 100vw;
    justify-content: center;
`
export default function Footer(){
    <FooterStyle>
        <br/>
            <br/>
            <br/>
            <h4>Made with ♥ and 🍵 by Evan Nishi.</h4>
            <h4>©{new Date().getFullYear()} Evan Nishi <a style={{textAlign: 'center', fontSize: '70%'}} href="https://github.com/Evan-Nishi/personal-site-v2" className="inlinelink">Source Code</a></h4>

            <div style={{paddingRight: '3vw'}}>
                <a href="mailto:evan@evannishi.me"><FaEnvelope size="4em" className="icon"/></a>
                <a href="https://github.com/Evan-Nishi"><FaGithub size="4em" className="icon"/></a>
                <a href="https://www.linkedin.com/in/evan-nishi/"><FaLinkedin size="4em" className="icon"/></a>
            </div>
    </FooterStyle>
}