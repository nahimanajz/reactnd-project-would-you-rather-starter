import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {QuestionComponent} from '../components/Question';
import{ questions, users, type} from '../utils/_DATA';
import '../setupTests';
describe('Question component tests', () => {
    it('should render without Error', () =>{
        
        const props = { questions:Object.values(questions), users:Object.values(users),type    }
        const wrapper = shallow(<QuestionComponent {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})
