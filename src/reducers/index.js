import { combineReducers } from 'redux';
import PriceReducer from './reducer_price';

const rootReducer = combineReducers({
    price: PriceReducer

});

export default rootReducer;
