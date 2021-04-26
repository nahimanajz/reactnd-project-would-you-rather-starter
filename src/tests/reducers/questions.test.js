import * as types from '../../constants';
import {questions} from '../../reducers/questions';
import {questions as questionsData} from '../../utils/_DATA';

const testData = {
    user: 'tylermcginnis',
    questionId:'xcdweqwerqwegadadf',
    optionOne:"PLAY FOOTBALL" ,
    optionTwo:"Play Volleyball",
    answer: 'optionTwo'
}
describe('Users test', () => {
    it(' Should Fetch all users', () => {
     const newState =  questions(undefined, {type:types.FETCH_QUESTIONS,questions: questionsData});
     
     expect(newState).toEqual(questionsData)
    });
    it('Should add new question on a user who saved it', ()=> {       
        const newQuestions = questions(questions, 
            { type:types.SAVE_QUESTION,
                id: testData.questionId,
                author: testData.user,
                optionOne: testData.optionOne,
                optionTwo: testData.optionOne, 
                timestamp: 1468479767190
            });
       expect(newQuestions[testData.questionId].id).toEqual(testData.questionId);
    });
    it('Should append new Answer to the question', ()=> {      
        const qid =  'am8ehyc8byjqgar0jgpub9';
        const newState = questions(questionsData, 
            { type:types.SAVE_QUESTION_ANSWER,
                authedUser:testData.user, qid, answer:testData.answer
            });
        expect(newState[qid].id).toEqual(qid);
     
    });
})