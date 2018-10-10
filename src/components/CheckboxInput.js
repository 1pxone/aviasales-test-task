import React, { Component } from 'react';

class CheckboxInput extends Component {
    render() {
        return (
            <div className="as-input__wrapper as-input__label as-input__label--checkbox noselect" onClick={(e)=>this.props.onChange(e,this.props.value)}>
                <input className="as-input as-input--checkbox" type="checkbox" onChange={this.props.onChange} name={this.props.name} value={this.props.value} checked={this.props.defaultChecked}/>
                <span className="as-input__checkmark"></span>
                <span className="as-input__checkboxLabel">
                    {this.props.label}
                    {this.props.onlyThis ?  <span className="as-input__onlyThis" onClick={(e)=>this.props.onlyThis(e,this.props.value)}>ТОЛЬКО</span> : null}
                </span>
            </div>
        );
    }
}

export default CheckboxInput;
