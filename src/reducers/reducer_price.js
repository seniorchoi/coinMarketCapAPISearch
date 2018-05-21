import { FETCH_PRICE } from "../actions/index";

export default function (state = [], action) {
    switch(action.type){
        case FETCH_PRICE:
            return [action.payload.data, ...state];
    }


    return state;
}
