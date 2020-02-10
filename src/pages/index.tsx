import Layout from '../components/Layout'
import React from 'react'
import Top from '../components/Top'

export default class Index extends React.Component {
    render(){
        return(
            <body>    
                <Layout>
                    <img src="/barseg1.png" id="TopBar" className="animated slideInRight"/> 
                    <img src="/barseg2.png" id="SmolBar" className="animated slideInRight delay-1s"/> 
                    <br className="spacer"/>
                    <img src="/pfp.jpg" id="pfp"/>
                </Layout>
            </body>

        )
    }
}
