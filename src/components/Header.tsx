import React from 'react'
import styles from '../style/Header.module.css'
import Link from 'next/link'
export default class Header extends React.Component{
    render(){
        return(
            <div id="header" className="animated fadeIn delay-2s">
                <div className="navcont">
                    <a href="/Resume.png">Resume</a>
                </div>
            </div>
        )
    }
}