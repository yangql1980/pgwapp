/**
 * Created by ljunb on 16/5/26.
 */
import * as types from '../actions/actionTypes';

const initialState = {
    categoryList: [],
    isLoading: true,
}

let foodsReducer = (state = initialState, action)=>{
    
    switch (action.type) {
        case types.FETCH_CATEGORY_LIST:
            return Object.assign({}, state, {
                ...state,
            })
        case types.RECEIVE_CATEGORY_LIST:
            return Object.assign({}, state, {
                categoryList: action.categoryList,
                isLoading: false,
            })
        default:
            return state
    }
}

export default foodsReducer;