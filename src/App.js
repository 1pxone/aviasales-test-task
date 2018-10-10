import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTicketsData } from './_actions/tickets';
import { fetchCurrencyRates } from './_actions/currency';
import Filters from './components/Filters';
import TicketsContainer from './containers/TicketsContainer';

class App extends Component {
    componentDidMount(){
        this.props.fetchTicketsData()
        this.props.fetchCurrencyRates()
    }

    render() {
        if(this.props.ticketsIsLoading || this.props.currencyIsLoading){
            return(
                <div className="container">
                    loading...
                </div>
            )
        } else if(this.props.ticketsHasErrored || this.props.currencyHasErrored){
            return(
                <div className="container">
                    error!
                </div>
            )
        }
            return (
                <div className="container">
                    <div className="logo__wrapper">
                        <img src="https://hlebbobulka.github.io/aviasales-test-task/img/logo.png" alt="logo"/>
                    </div>
                    <div className="content__wrapper">
                        <Filters currency={this.props.currency}/>
                        <TicketsContainer />
                    </div>
                </div>
            );

    }
}

const mapStateToProps = (state) => {
    return {
        ticketsIsLoading: state.tickets.isLoading,
        tickets: state.tickets.tickets,
        ticketsErrors: state.tickets.ticketsErrors,
        ticketsHasErrored: state.tickets.hasErrored,
        currencyData: state.currency.currencyData,
        currencyIsLoading: state.currency.isLoading,
        currency: state.currency.currency,
        currencyErrors: state.currency.currencyErrors,
        currencyHasErrored: state.currency.hasErrored,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTicketsData: () => dispatch(fetchTicketsData()),
        fetchCurrencyRates: () => dispatch(fetchCurrencyRates()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
