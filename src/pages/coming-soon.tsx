import React from 'react'
import Layout from '../components/Layout'
import Button from '../components/Button'

export default class Wip extends React.Component{
    render(){
        return(
            <Layout Title="Coming Soon!🛠">
                <div className="homeButton">
                    <Button href="/">Home</Button>
                </div>
                <h1>🛠Coming soon!🛠</h1>
                <img id="coffee" src="/dev.png"/>
                <h3 className="errormessage">welp coffee time I guess</h3>
                <p className="errormessage">This page will be functional shortly, in the meantime feel free to poke around!</p>
                <br className="spacer"/>
            </Layout>
        )
    }
}