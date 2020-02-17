import React from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'

export default class Contact extends React.Component{
    render(){
        return(
            <Layout Title="Contact">
                <h1 id="title">Let's Talk!</h1>
                <Card>
                    <h2>Schedule a meeting</h2>
                    <p></p>
                </Card>

            </Layout>
        )
    }
}
