import React, { Component } from 'react';
import '../css/Ticket.css';
import { connect } from 'react-redux';
import { dateFormat, priceFormat, stopsFormat } from '../utils';

class Ticket extends Component {

    currencyConverter = (price) => {
        var calculatedPrice,
            Valute = this.props.currencyData.Valute;
        switch (this.props.currency) {
            case "USD":
                calculatedPrice = parseInt(price / Valute.USD.Value)
                return priceFormat(calculatedPrice) + ' $'
            case "EUR":
                calculatedPrice = parseInt(price / Valute.EUR.Value)
                return priceFormat(calculatedPrice) + ' €'
            default:
                return priceFormat(price) + ' ₽'
        }
    }

    render() {
        const t = this.props.ticket;
        return (
            <div className="Ticket">
                <div className="Ticket__buyBlock">
                    <img src={`https://hlebbobulka.github.io/aviasales-test-task/img/carriers/${t.carrier}.png`} className="Ticket__carrier" alt={t.carrier}/>
                    <button type="button" className="Ticket__buyButton">Купить <br/> за {this.currencyConverter(t.price)}</button>
                </div>
                <div className="Ticket__infoBlock">
                    <div className="Ticket__times">
                        <div className="Ticket__origin">
                            <span className="Ticket__dt">{t.departure_time}</span>
                        </div>
                        <div className="Ticket__stops">
                            {stopsFormat(t.stops)}
                            <div className="Ticket__stopsWrap">
                                <div className="Ticket__stopsLine"></div>
                                <img src={`https://hlebbobulka.github.io/aviasales-test-task/img/plane.svg`}  alt={t.carrier}/>
                            </div>
                        </div>
                        <div className="Ticket__destination">
                            <span className="Ticket__at">{t.arrival_time}</span>
                        </div>
                    </div>
                    <div className="Ticket__meta">
                        <div className="Ticket__origin">
                            <span className="Ticket__o">{t.origin}, {t.origin_name}</span>
                            <span className="Ticket__dd">{dateFormat(t.departure_date)}</span>
                        </div>
                        <div className="Ticket__destination">
                            <span className="Ticket__d">{t.destination_name}, {t.destination}</span>
                            <span className="Ticket__ad">{dateFormat(t.arrival_date)}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currency: state.currency.currency,
        currencyData: state.currency.currencyData,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        // changeCurrency: (val) => dispatch(changeCurrency(val))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ticket);

// export default Ticket;
