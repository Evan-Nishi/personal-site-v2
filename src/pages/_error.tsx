import React from "react";
import Layout from '../components/Layout'

export default class Error extends React.Component{
    render(){
        return(
            <Layout>
                <h1>404</h1>
                <h2 className="errormessage">Page not found</h2>
                <img src="/dev.png"/>
                <h3 className="errormessage">welp coffee time I guess</h3>
                <br className="spacer"/>
            </Layout>
        )
    }
}