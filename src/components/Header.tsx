import React from 'react'
import styles from '../style/Header.module.css'
import Link from 'next/link'
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