import React from 'react'
import Layout from '../components/Layout'

interface State{
    firstName: string,
    lastName: string,
    email: string,
    method: "zoom" | "google meet" | "phone" | "discord" | "slack" | "other",
    //date: Date,
    step: number
}

export default class Meeting extends React.Component<State>{
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            method: "",
            //date: ""
            step: 1
        }
    }
    render(){
        return(
            <Layout Title="Schedule a meeting!">
            </Layout>
        )
    }
}