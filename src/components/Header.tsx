import React from 'react'

export default class Header extends React.Component{
    render(){
        return(
            <div id="header" className="animated fadeIn delay-2s">
                {this.props.children}
            </div>
        )
    }
}