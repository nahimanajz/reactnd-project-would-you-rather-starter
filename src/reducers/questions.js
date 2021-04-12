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
        case constant.SAVE_QUESTION_ANSWER:
            let {authedUser, qid,  answer} = action;
          users= {
               ...users,
               [authedUser]:{
                   ...users[authedUser],
                   answers: {
                    ...users[authedUser].answers,
                    [qid]: answer
                   }
                }
            }
         
           console.log({...state, ...users});
          
           return  {...state, users};
         
            
        default:
            return state;
    }
}