import React from 'react'

export default class TimelineBlock extends React.Component{
    render(){
        return(
            <div className="timeCard">
                {this.props.children}
            </div>
        )
    }
}