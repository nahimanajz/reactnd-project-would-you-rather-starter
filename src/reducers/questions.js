import * as constant from '../constants';
export const questions =(state={}, action) =>{
    let { users } = action;
    switch(action.type){
        case constant.FETCH_QUESTIONS:
            return {...state, ...action.questions};
        case constant.SAVE_QUESTION:           
           const {author, question} = action;
         
        return  {
            ...users,
            [author]:{
                ...users[author],
                questions: users[author].questions.concat(question.id)
            }
        } 
       
        default:
            return state;
    }
}