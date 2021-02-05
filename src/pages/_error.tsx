import React from 'react'
import Layout from '../components/Layout'
import Button,{Home} from '../components/Button'



export default function Error(){
    return(
        <Layout Title="page not found">
            <Home/>
            <h1>404</h1>
            <h2>Page not found</h2>
            <img id="coffee" src="/dev.png"/>
            <h3>welp coffee time I guess</h3>
            <p>
                Hi sorry for the inconvenience, you either entered in a wrong link
                or something is wrong on my end.  If you think this is a problem with
                my site, feel free to send me a message. 
            </p>
                
        </Layout>
    )
}