import React from 'react'

interface Props{
    href: string
}

export default class Button extends React.Component<Props>{
    render(){
        return(
            <a className="button" href={this.props.href}>{this.props.children}</a>
        )
    }
}