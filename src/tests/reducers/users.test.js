import * as types from '../../constants';
import {users} from '../../reducers/users';
import {users as userData} from '../../utils/_DATA';

const testData = {
    user: 'tylermcginnis',
    questionId:'xcdweqwerqwegadadf',
    answer:"optionOne" 
}
describe('Users test', () => {
    it(' Should Fetch all users', () => {
     const newState =  users(undefined, {type:types.FETCH_USERS,users: userData});
     
     expect(newState).toEqual(userData)
    });
    it('Should add new question on a user who saved it', ()=> {       
        const userWithQuestion = users(userData, { type:types.SAVE_QUESTION,
             id:testData.questionId, author:testData.user
            });        
        expect(userWithQuestion[testData.user].questions.some(q=> q ===testData.questionId)).toBeTruthy();
    });
    it('Should append new answer',()=>{
        const appendAnswer = users(userData, {type:types.SAVE_QUESTION_ANSWER, 
            authedUser:testData.user,qid:testData.questionId, answer:testData.answer});
            const {answers} = appendAnswer[testData.user];
            const newAnswer = Object.values(answers).some(answer=> answer === testData.answer);          
        expect(newAnswer).toBeTruthy();
    })
});