import { FETCH_QUESTIONS, SAVE_QUESTION } from "../constants/index";
import * as api from "../utils/api";

export const fetchQuestions= (questions) => (dispatch) =>{
  dispatch({ type:FETCH_QUESTIONS, questions });
}
export const saveQuestion= (question) => (dispatch, getState) =>{
  const { signUser:author, users, questions } = getState();
  const {optionOneText, optionTwoText} = question; 
  
  api.saveQuestion({optionOneText, optionTwoText,author}).then((question)=>{   
    
   const {id, optionOne, optionTwo, timestamp } = question;
    dispatch({ type:SAVE_QUESTION, question, author,users, id, optionOne, optionTwo, timestamp, questions });
    dispatch({ type:FETCH_QUESTIONS, question})
  });
}
