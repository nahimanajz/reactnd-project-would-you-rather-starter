
import configureStore from 'redux-mock-store';
import shared from '../../actions/shared';
import * as types from '../../constants/index'
import {users, questions, question, userAnswer} from '../../utils/_DATA'

const mockStore = configureStore();
const store = mockStore();
describe('fetch initial state', () => {
    beforeEach(() =>{
        store.clearActions();
    })
    test('dispatch users',()=>{
        const actionExpected = {
                type: types.FETCH_USERS,
                users
        }
        
        store.dispatch(actionExpected);
        expect(store.getActions()[users]).toEqual(actionExpected[users]);
        expect(store.getActions()[0]).toEqual(actionExpected);
        expect(store.getActions()).toMatchSnapshot();
    })

    test('should fetch questions',()=>{
        const actionExpected = {
            type: types.FETCH_QUESTIONS,
            questions
    }

    store.dispatch(actionExpected)
    expect(store.getActions()).toMatchSnapshot();
    expect(store.getActions()[0]).toEqual(actionExpected)

    })
    test('should save new Question', ()=>{
        const saveQuestionAction = {
            type: types.SAVE_QUESTION,
            question 
        }
        store.dispatch(saveQuestionAction);
        expect(store.getActions()[0]).toEqual(saveQuestionAction)
        expect(store.getActions()).toMatchSnapshot()
    })
    test('should save new Question Answer', ()=>{
        const {authedUser, qid,answer } = userAnswer;
       
        const expectedAction = {
            type: types.SAVE_QUESTION_ANSWER,
            authedUser, 
            qid,
            answer
        }
        store.dispatch(expectedAction);
        expect(store.getActions()[0]).toEqual(expectedAction)
        expect(store.getActions()).toBeDefined()
    })
    test("authorize user", ()=>{
        const signInAction = {
            type: types.AUTHORIZE_USER,
            user: 'tylermcginnis',
        }
        store.dispatch(signInAction);
        expect(store.getActions()).toMatchSnapshot()
    })
    test("Logout  user", ()=>{
        const signOutAction = {
            type: types.LOGOUT_USER
        }
        store.dispatch(signOutAction);
        expect(store.getActions()).toBeNull()
    })
})