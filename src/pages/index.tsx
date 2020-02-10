import Layout from '../components/Layout'
import Header from '../components/Header'
import React from 'react'

export default class Index extends React.Component {
    render(){
        return(
            <body>    
                <Layout>
                    <img src="/barseg1.png" id="TopBar" className="animated slideInRight"/> 
                    <img src="/barseg2.png" id="SmolBar" className="animated slideInRight"/> 
                    <Header/>
                    <h1 id="title">Evan Nishi</h1>
                    <br className="blank"/>
                    <img src="/pfp3.png" id="pfp" className="animated fadeInDown delay-1s"/>
                    <br className="spacer"/>
                    <div className="container">
                        <h3>About me:</h3>
                        <p>Hi, my name is Evan and I am a student at Las Lomas in Walnut Creek California and DVC
                             in Pleasant Hill. I started self teaching programming in early 2019, and was fascinated
                              with the idea of being able to create whatever I wanted, and learn how to do so
                              off of the internet. I started off with python, and basic web development, but
                               things really changed when I attended Hack Merced.  After I saw the amazing 
                               hacker community, I devoted more and more of my time to coding.  I am always curious,
                                constantly self improving, and am not
                               afraid to fail or ask for help sometimes.  I have a solid work ethic, and 
                               adapt to new environments and technologies quickly. </p>
                    </div>
                    <br className="spacer"/>
                    <div className="container">
                        <h3>Tools/Technologies:</h3>
                        <h2>Python</h2>
                        <div className="skillbar">
                            <div id="python"> </div>
                        </div>
                        
                    </div>
                    <br className="blank"/>
                </Layout>
            </body>

        )
    }
}
