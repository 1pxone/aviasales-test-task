import React, { Component } from 'react';

class RadioButton extends Component {
    render() {
        return (
            <label className={"as-input__wrapper as-input__label as-input__label--radio noselect" + (this.props.defaultChecked ? " as-input__label--checked" : " as-input__label--unchecked")}>
                <input className="as-input as-input--radio" type="radio" onChange={this.props.onChange} name={this.props.name} value={this.props.value} checked={this.props.defaultChecked}/>
                <span className="as-input__radioLabel">{this.props.label}</span>
            </label>
        );
    }
}

export default RadioButton;
