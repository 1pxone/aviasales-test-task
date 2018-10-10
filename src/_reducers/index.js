import { combineReducers } from 'redux';
import { tickets } from './tickets';
import { currency } from './currency';

export default combineReducers({
    tickets,
    currency
});
