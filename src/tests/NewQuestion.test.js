import React from "react"
import { mount, shallow } from 'enzyme';
import {NewQuestion} from "../containers/NewQuestion";
import toJson from 'enzyme-to-json';
import '../setupTests';

const clickFn = jest.fn();
it('NewQuestion Component renders without crashing', ()=>{
    const signedUser = 'tylermcginnis';
    const wrapper = mount(<NewQuestion user={signedUser}/>).dive();
    const welcome =<label> Complete the question</label>;
    const title =  <h1>Would You Rather...</h1>;
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find('button').first().text()).toEqual('Submit');
    //expect(wrapper.state('signUser')).toEqual(null);
    //const windowTitle = wrapper.find("label").text();
    //expect(wrapper.contains(welcome)).toBe(true);
   // expect(windowTitle).toEqual("Complete the question");
    // expect(toJson(wrapper).contains(title)).toEqual(true);
    // expect(toJson(wrapper).props().signedUser).toEqual(signedUser)
});

describe('Expect save question button to have been called', ()=>{
    it('should click save question button',()=>{
        const props = {
            signedUser:'tylermcginnis'
        };
        const component = shallow(<NewQuestion onClick= {clickFn} {...props}/>).dive();
        component.find('button').simulate('click');
        expect(clickFn).toHaveBeenCalled();

    })
})