import { SET_NUMBER_OF_QUESTION } from '../types';

const DEFAULT_STATE = {
    questionNumber: 0
}


export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case SET_NUMBER_OF_QUESTION:
            return {
                questionNumber: action.questionNumber
            }
        default:
            return state
    }
}