import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Signin } from '../containers/Signin';
import{ users, question,questions } from '../utils/_DATA';
import ShowQuestion from '../containers/ShowQuestion';
import '../setupTests';
import  ResultPage  from '../containers/ResultPage';
import  LeaderBoard  from '../containers/LeaderBoard';
import NewQuestion from '../containers/NewQuestion';
import AnswerQuestion from '../containers/AnswerQuestion';
import {BrowserRouter as Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import HomePage from '../containers/HomePage';

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
        MyComponent =(Container) =>{
            renderer.create(
                <Provider store={store}>
                    <Router>
                            {Container}
                    </Router>
                </Provider>
            );
         } 
    });
    it('should render leaderboard without error', () => {       
       ComponentTest(MyComponent(<LeaderBoard/>))
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
        const props = {question:{id:'xj352vofupe1dqz9emx13r'}}
         ComponentTest(MyComponent(<ResultPage {...props}/>))
    })
    it('should render new question form form withour error', () =>{
        ComponentTest(MyComponent(<NewQuestion />))
    })
    it('should render homepage', () =>{        
        ComponentTest(MyComponent(<HomePage/>))
    })
    it('should render Signin with ', () =>{        
        ComponentTest(MyComponent(<Signin />))
    })
    it('Should render Answer question', () =>{  
        const props = {question: questions['8xf0y6ziyjabvozdd253nd'],user:'tylermcginnis' };
        ComponentTest(MyComponent(<AnswerQuestion {...props}/>))

    })
    
})