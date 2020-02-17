import React from 'react'
export default class Header extends React.Component{
    render(){
        return(
            <div id="header" className="animated fadeIn delay-2s">
                <a className="button" href="/Resume.png">Resume</a>
                <a className="button" href="/contact">Contact</a>
            </div>
        )
    }
}