import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'
import { MyApp } from '../App';
import '../setupTests';
import {users, questions} from '../utils/_DATA';
import {initialData as getInitialData} from '../utils/api';
import { Provider } from 'react-redux';

const mockOnClick =jest.fn();
const mockStore = configureStore();
const initialState = {users, signUser:'tylermcginnis', questions};
const store = mockStore(initialState);

describe('<App /> component', () => {
    const props ={
        users, signUser:'tylermcginnis', questions, getInitialData
    }
    const component = shallow(<MyApp {...props}/>).dive();
    it('should render the component', () => {
       
        expect(component.find('.item').length).toEqual(5)
        //expect(toJson(component)).toMatchSnapshot()
    })
    it('should  have props', () => {
        //console.log(component.props().children[props])
        expect(component.props().signUser).toBeFalsy()
       /* expect(component.props().users).toBe(true)
        expect(component.props().questions).toEqual(true)
        */
    }) 
    it('should match snapshot', () => {
       // expect(component.getActions()).toMatchSnapshot();
    })
    // it('should click to logout', ()=> {
    //     try {
    //         const wrapper = mount(
    //             <Provider>
    //                  <MyApp onClick={mockOnClick} store={store}></MyApp>
    //             </Provider>
    //         ).dive()
    //         // wrapper.find(".item").at(4).simulate('click');
    //         // expect(mockOnClick).toHaveBeenCalled();
    //         // expect(mockOnClick.mock.calls.length).toEqual(1)
    //     } catch (error) {
    //         console.log(error.message);
    //     }
        
    // })
})
