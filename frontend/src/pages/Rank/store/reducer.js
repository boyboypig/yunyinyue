import * as actionTypes from './constants'
 
const defaultState = {
    rankList:[],
    enterLoading: true
}
const reducer = (state=defaultState, action) => {
    // state ηΆζεζ°
    switch(action.type) {
        case actionTypes.CHANGE_LOADING:
            return {
                ...state,
                enterLoading: action.data
            }
        case actionTypes.CHANGE_RANK_LIST:
            return {
                ...state,
                rankList: action.data
            }
        default:
            return state;
    }
}

export default reducer