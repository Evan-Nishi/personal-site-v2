import React from 'react'
import Layout from '../components/Layout'

export default class Wip extends React.Component{
    render(){
        return(
            <Layout Title="coming soon!🛠">
                <h1>🛠Coming soon!🛠</h1>
                <img id="coffee" src="/dev.png"/>
                <h3 className="errormessage">welp coffee time I guess</h3>
                <br className="spacer"/>
            </Layout>
        )
    }
}