import React from 'react'
import Layout from '../components/Layout'
import Button from '../components/Button'

export default class Error extends React.Component{
    render(){
        return(
            <Layout Title="page not found">
                <div className="homeButton">
                    <Button href="/">Home</Button>
                </div>
                <h1>404</h1>
                <h2 className="errormessage">Page not found</h2>
                <img id="coffee" src="/dev.png"/>
                <h3 className="errormessage">welp coffee time I guess</h3>
                <p className="errormessage">
                    Hi sorry for the inconvenience, you either entered in a wrong link
                    or something is wrong on my end.  If you think this is a problem with
                    my site, feel free to send me a message. 
                </p>
                

                <br className="spacer"/>
            </Layout>
        )
    }
}