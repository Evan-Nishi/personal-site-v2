import React from 'react'
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
export default class Footer extends React.Component{
    render(){
        return(
            <div id="Footer">
                <a href="https://github.com/Evan-Nishi"><FaGithub size="4em" className="icon"/></a>
                <a href="mailto:evan@evannishi.me"><FaEnvelope size="4em" className="icon"/></a>
                <a href="https://www.linkedin.com/in/evan-nishi-804a85183/"><FaLinkedin size="4em" className="icon"/></a>
            </div>
        )
    }
}