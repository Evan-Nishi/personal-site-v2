import React from 'react'

interface Props{
    color:string
}

export default class Tag extends React.Component<Props>{
    render(){
        return(
            <span style={{background: this.props.color}}>
                {this.props.children}
            </span>
        )
    }
}