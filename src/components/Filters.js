import React, { Component } from 'react';
import '../css/Filters.css';
import { connect } from 'react-redux';
import CheckboxInput from './CheckboxInput';
import RadioButtonInput from './RadioButtonInput';
import { changeCurrency } from '../_actions/currency';
import { ticketsFilters } from '../_actions/tickets';

class Filters extends Component {
    onChangeChekboxes = (e,val) => {
        var filtered = [...this.props.filters]
        if(filtered.find(v => v === val)){
            var index = filtered.findIndex(v => v === val)
            filtered.splice(index, 1)
            var isNotAll = !filtered.find(v => v === "0") || !filtered.find(v => v === "1") || !filtered.find(v => v === "2") || !filtered.find(v => v === "3")
            if(isNotAll){
                var allIndex = filtered.findIndex(v => v === "all");
                if(allIndex >= 0){
                    filtered.splice(allIndex, 1)
                }
            }
            if(!filtered.length){
                filtered = ["all","0","1","2","3"];
            }
        } else {
            filtered.push(val);
            var isAll = filtered.find(v => v === "0") && filtered.find(v => v === "1") && filtered.find(v => v === "2") && filtered.find(v => v === "3")
            if(isAll){
                 filtered = ["all","0","1","2","3"];
            }
        }
        this.props.ticketsFilters(filtered);
    }

    onChangeAll = () => {
        var filtered = [...this.props.filters];
        var allExists = filtered.findIndex(v => v === "all") >= 0;
        if(!allExists){
            this.props.ticketsFilters(["all","0","1","2","3"]);
        }
    }

    onlyThis = (e,val) => {
        e.stopPropagation();
        this.props.ticketsFilters([val])
    }

    onCurrencyChange = (e) => {
        this.props.changeCurrency(e.target.value)
    }

    render() {
        return (
            <div className="Filters__wrapper">
                <div className="CurrencyToggle__wrapper">
                    <span className="Filters__subtitle">ВАЛЮТА</span>
                    <div className="CurrencyToggle__buttons">
                        <RadioButtonInput onChange={this.onCurrencyChange} name="currency" value="RUB" label="RUB" defaultChecked={this.props.currency === "RUB"}/>
                        <RadioButtonInput onChange={this.onCurrencyChange} name="currency" value="USD" label="USD" defaultChecked={this.props.currency === "USD"}/>
                        <RadioButtonInput onChange={this.onCurrencyChange} name="currency" value="EUR" label="EUR" defaultChecked={this.props.currency === "EUR"}/>
                    </div>
                </div>
                <div className="StopsFilter__wrapper">
                    <span className="Filters__subtitle">КОЛИЕСТВО ПЕРЕСАДОК</span>
                    <CheckboxInput onChange={this.onChangeAll} label="Все" name={""} value={"all"} defaultChecked={this.props.filters.findIndex(v => v === "all") >= 0} />
                    <CheckboxInput onChange={this.onChangeChekboxes} label="Без пересадок" name={""} value={"0"} defaultChecked={this.props.filters.findIndex(v => v === "0") >= 0} onlyThis={this.onlyThis}/>
                    <CheckboxInput onChange={this.onChangeChekboxes} label="1 Пересадка" name={""} value={"1"} defaultChecked={this.props.filters.findIndex(v => v === "1") >= 0} onlyThis={this.onlyThis}/>
                    <CheckboxInput onChange={this.onChangeChekboxes} label="2 Пересадки" name={""} value={"2"} defaultChecked={this.props.filters.findIndex(v => v === "2") >= 0} onlyThis={this.onlyThis}/>
                    <CheckboxInput onChange={this.onChangeChekboxes} label="3 Пересадки" name={""} value={"3"} defaultChecked={this.props.filters.findIndex(v => v === "3") >= 0} onlyThis={this.onlyThis}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.tickets.filters,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrency: (val) => dispatch(changeCurrency(val)),
        ticketsFilters: (arr) => dispatch(ticketsFilters(arr))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
