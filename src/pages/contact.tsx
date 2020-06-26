import React from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'
import Button from '../components/Button'
import { FaSlack, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'

export default class Contact extends React.Component{
    render(){
        return(
            <Layout Title="Contact">
                <div className="homeButton">
                    <Button href="/">Home</Button>
                </div>
                <h1 id="title">Let's Talk!</h1>
                <br/>
                <br/>
                <br/>
                <Card>
                    <h2>Meeting</h2>
                    <p>Want to schedule an in person or online meeting? Feel free to schedule a 
                        meeting here!
                    </p>
                    <div className="contactButton">
                        <Button href="/coming-soon">Schedule</Button>
                    </div>
                </Card>
                <br/>
                <br/>
                <br/>
                <Card>
                    <h2>Collaborate</h2>
                    <p>
                        I love collaboration on projects large and small, technical or not.
                          If you have an idea or project you'd like to collaborate on
                           feel free to fill out the form below.
                    </p>
                    <div className="contactButton">
                        <Button href="/coming-soon">Collaborate</Button>
                    </div>
                </Card>
                <br/>
                <br/>
                <br/>
                <Card>
                    <h2>Other places</h2>
                    <p>Here are some other places I lurk.  Feel free to contact me through these means.</p>
                    <div className="indented">
                        <ul>
                            <li className="social"><FaTwitter/><a className="inlinelink" href="https://twitter.com/NishiEvan">Twitter</a></li>
                            <li className="social"><FaSlack/><a className="inlinelink" href="https://hackclub.com/community/">Hack Club slack</a></li>
                            <li className="social"><FaInstagram/><a className="inlinelink" href="https://www.instagram.com/evan_nishi/">Instagram</a></li>
                            <li className="social"><FaFacebook/><a className="inlinelink" href="https://www.facebook.com/evan.nishi.14">Facebook</a></li>
                        </ul>
                    </div>
                </Card>

            </Layout>
        )
    }
}
