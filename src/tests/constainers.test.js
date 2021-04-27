import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Signin } from '../containers/Signin';
import{ users, question,questions } from '../utils/_DATA';
import {ShowQuestion} from '../containers/ShowQuestion';
import '../setupTests';
import { ResultPage } from '../containers/ResultPage';
import { LeaderBoard } from '../containers/LeaderBoard';

import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

const mockStore = configureStore([]);


const ComponentTest =(component) =>  expect(toJson(component)).toMatchSnapshot();
describe('Containers tests', () => {
    let store;
    let MyComponent;
    beforeEach(() =>{
        store = mockStore({
            users, 
            signUser:'tylermcginnis',
            questions
        });
        store.dispatch = jest.fn();
        MyComponent = mount(
            <Provider store={store}>
                <LeaderBoard />
            </Provider>
        );
    });
    it('should render leaderboard without error', () => {
        expect(MyComponent.toJson()).toMatchSnapshot();
    })
    
    it('should render without Error', () =>{
        const props = { users:Object.values(users) }
         ComponentTest(shallow(<Signin {...props}/>))
    })
    it('should  Show answered question', () =>{
        const props = {question, user:'tylermcginnis', isAnswered:true, signUser:'tylermcginnis'}
         ComponentTest(shallow(<ShowQuestion {...props}/>));
    })
    it('should  Show unanswered question', () =>{
        const props = {question, user:'tylermcginnis', isAnswered:false, signUser:'tylermcginnis'}
        ComponentTest(shallow(<ShowQuestion {...props}/>));
    })
    it('should  render result page', () =>{
        const signUser = 'tylermcginnis';
        const fetchedQuestion  = questions['xj352vofupe1dqz9emx13r'];
        
        const props = {
            question:fetchedQuestion, 
            user:users['tylermcginnis'], 
            signUser, 
            votedOne: fetchedQuestion.optionOne.votes.some((vote)=>vote === signUser),
            votedTwo: fetchedQuestion.optionTwo.votes.some((vote)=>vote === signUser)
        }
         const component = shallow(<ResultPage {...props}/>);
         expect(toJson(component.props().question)).toBeUndefined();
         expect(toJson(component.props().signUser)).toBeUndefined();
         expect(toJson(component.props().user)).toBeUndefined();
    })
    
})