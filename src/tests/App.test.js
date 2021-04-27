import React from 'react';
import { shallow } from 'enzyme';

import configureStore from 'redux-mock-store'
import { MyApp } from '../App';
import '../setupTests';
import {users, questions} from '../utils/_DATA';
import {initialData as getInitialData} from '../utils/api';

describe('<App /> component', () => {
    const props ={
        users, signUser:'tylermcginnis', questions, getInitialData
    }
    const component = shallow(<MyApp {...props}/>).dive();
    it('should render the component', () => {
       
        expect(component.find('.item').length).toEqual(5)
        
    })
    it('should  have props', () => {
       
        expect(component.props().signUser).toBeFalsy()
     
    }) 
    it('should match snapshot', () => {
        expect(component.getActions()).toMatchSnapshot();
    })
    
})
