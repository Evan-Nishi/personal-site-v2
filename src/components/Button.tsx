import React from 'react'

interface Props{
    href: string,
    target?: string,
    rel?: string
}

export default class Button extends React.Component<Props>{
    render(){
        return(
            <a className="button" href={this.props.href} target={this.props.target} rel={this.props.rel}>{this.props.children}</a>
        )
    }
}
//target="_blank" rel="noopener noreferrer