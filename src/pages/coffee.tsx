import React from 'react'
import Layout from '../components/Layout'
import { Home } from '../components/Button'
import Card from '../components/Card'

export default class Coffee extends React.Component{
    render(){
        return(
            <Layout Title="coffee">
                <Home/>
                <h1 id="title">Coffee Gallery</h1>
                <Card>
                    <h3>With Computer</h3>
                    <img id="gallery" src="/dev.png"/>
                </Card>
                <br/>
                <br/>
                <Card>
                    <h3>Original</h3>
                    <img id="gallery" src="/normal coffee.png"/>
                </Card>
                <br/>
                <br/>
                <Card>
                    <h3>Halloween 2020</h3>
                    <img id="gallery" src="/spoopy coffee.png"/>
                </Card>
                <br/>
                <br/>
                <Card>
                    <h3>Thanksgiving 2020</h3>
                    <img id="gallery" src="/thanksgiving coffee.png"/>
                </Card>
                <br/>
                <br/>
                <Card>
                    <h3>Christmas 2020</h3>
                    <img id="gallery" src="/christmas coffee.png"/>
                </Card>
            </Layout>
        )
    }
}