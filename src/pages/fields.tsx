import React from 'react'

interface Props{
    step: number
}

export default class Fields extends React.Component<Props>{
    static getInitialProps(){
        const step = 1
        return { step }
    }

    render(){
        const { step } = this.props
        switch(step){
            case 1:
                return(<Info/>)
            case 2:
                return(<Calendar/>)
            case 3:
                return(<Method/>)
            case 4:
                return(<Confirmation/>)
        }
    }
}

export class Info extends React.Component{
    render(){
        return(
            <h1>Not done yet</h1>
            //TODO add info forms
        )
    }
}

export class Calendar extends React.Component{
    render(){
        return(
            <h1>Not done yet</h1>
            //TODO add calendar
        )
    }
}

export class Method extends React.Component{
    render(){
        return(
            <h1>Not done yet</h1>
            //TODO add contact method dropdown
        )
    }
}

export class Confirmation extends React.Component{
    render(){
        return(
            <h1>Not done yet</h1>
            //TODO add confirm
        )
    }
}