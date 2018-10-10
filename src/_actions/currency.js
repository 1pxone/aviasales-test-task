import axios from 'axios';
import * as endpoints from '../_constants/endpoints';
import * as action from '../_constants/actionTypes';

//CURRENCY ACTIONS
export function currencyIsLoading(bool) {
    return {
        type: action.CURRENCY_IS_LOADING,
        isLoading: bool
    }
}
export function currencyGetSuccess(currencyData) {
    return {
        type: action.CURRENCY_GET_SUCCESS,
        currencyData
    }
}
export function currencyHasErrored(bool) {
    return {
        type: action.CURRENCY_HAS_ERRORED,
        hasErrored: bool
    }
}
export function currencyErrors(errors) {
    return {
        type: action.CURRENCY_ERRORS,
        currencyErrors: errors
    }
}
export function changeCurrency(currency) {
    return {
        type: action.CURRENCY_CHANGE,
        currency
    }
}

//GET CURRENCY DATA
export function fetchCurrencyRates(){
    return (dispatch) => {
        dispatch(currencyHasErrored(false))
        dispatch(currencyErrors([]))
        dispatch(currencyIsLoading(true))
        axios.get(endpoints.currency)
        .then((response) => {
            dispatch(currencyGetSuccess(response.data))
            dispatch(currencyIsLoading(false))
        })
        .catch((err) => {
            console.log(err)
            dispatch(currencyIsLoading(false))
            dispatch(currencyHasErrored(true))
            dispatch(currencyErrors(err))
        });
    }
}
