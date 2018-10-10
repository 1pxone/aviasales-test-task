import * as actionType from '../_constants/actionTypes';

var initialState = {
    isLoading: false,
    currency: "RUB",
    currencyData: null,
    currencyErrors: [],
    hasErrored: false,
}

export function currency(state = initialState, action){
    switch (action.type) {
        case actionType.CURRENCY_IS_LOADING:
            let isLoading = action.isLoading;
            return {
                ...state,
                isLoading
            }
        case actionType.CURRENCY_GET_SUCCESS:
            let currencyData = action.currencyData;
            return {
                ...state,
                currencyData
            }
        case actionType.CURRENCY_HAS_ERRORED:
            let hasErrored = action.hasErrored;
            return {
                ...state,
                hasErrored
            }
        case actionType.CURRENCY_ERRORS:
            let currencyErrors = action.currencyErrors;
            return {
                ...state,
                currencyErrors
            }
        case actionType.CURRENCY_CHANGE:
            let currency = action.currency;
            return {
                ...state,
                currency
            }
        default:
            return state
    }
}
