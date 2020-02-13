import React from 'react'
import Layout from '../components/Layout'

interface State{
    firstName: string,
    lastName: string,
    email: string,
    method: "zoom"| "google meet" | "phone" | "discord" | "slack" | "other",
    date: Date,
    step: number
}

export default class Contact extends React.Component<State>{
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <Layout Title="Schedule a meeting!">
            </Layout>
        )
    }
}