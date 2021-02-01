import React from 'react';
import Button from './Button';

export default class Spinner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <fieldset>
        <label>{this.props.label}</label>
        <div className="spinner">
          <Button increment={false} id={this.props.id} onClick={this.props.onClick} />
          <span className="spinner-value" id={this.props.id} >{this.props.value}</span>
          <Button increment={true} id={this.props.id} onClick={this.props.onClick} />
        </div>
      </fieldset>
    )
  }
}