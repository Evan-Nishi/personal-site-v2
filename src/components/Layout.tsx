import React from 'react'
import Head from 'next/head'
import Footer from './Footer'

export default function Layout(props){
    return(
        <div>
            <Head>
                <title>{props.Title}</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"/>
                <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
                <meta name="og:title" content="Evan Nishi"/>
                <meta name="og:description" content="Hi my name is Evan Nishi, a community leader, avid learner, and fanatic developer.  Feel free to poke around!"/>
            </Head>
            <div style={{position:"absolute",top:0,left:0,width:"100vw"}}>
                <br/>
                <div id='content'>
                    {props.children}
                </div>
                <Footer/>
            </div>
        </div>
    )
}
