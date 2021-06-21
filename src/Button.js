import React from 'react';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.increment === true) {
            return(
                <button 
                    name={"increment-" + this.props.id} 
                    onClick={this.props.onClick} 
                    className="btn-circle"
                >+</button>
            )
        } else {
            return(
                <button 
                    name={"decrement-" + this.props.id} 
                    onClick={this.props.onClick}  
                    className="btn-circle"
                >–</button>
            )
        }
    }
}