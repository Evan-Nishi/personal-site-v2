import React from 'react'

export default class ClearCard extends React.Component{
    render(){
        return(
            <div className="clearcard">
                {this.props.children}
                <br/>
            </div>
        )
    }
}