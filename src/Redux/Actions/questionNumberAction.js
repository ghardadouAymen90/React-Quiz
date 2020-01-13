
import { SET_NUMBER_OF_QUESTION } from "../types";


export const setNumberOfQuestion = (data) => dispatch => {
    dispatch({
        type: SET_NUMBER_OF_QUESTION,
        questionNumber: data
    })
}
