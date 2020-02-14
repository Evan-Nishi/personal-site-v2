import React from 'react'
import Head from 'next/head'
import Footer from './Footer'

interface Props{
    Title: string
}

export default class Layout extends React.Component<Props>{
    render(){
        return(
            <div /*className={darkMode ? "dark-mode" : "light-mode"}*/>
                <Head>
                    <title>{this.props.Title}</title>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <meta name="og:title" content="Evan Nishi"/>
                    <meta name="og:description" content="Evan Nishi"/>
                </Head>
                <div style={{position:"absolute",top:0,left:0,width:"100vw"}}>
                    <br/>
                    <div id='content'>
                        {this.props.children}
                    </div>
                    <Footer/>
                </div>
            </div>
        )
    }
}
