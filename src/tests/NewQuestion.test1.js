import React from "react"
import { mount, shallow } from 'enzyme';
import {NewQuestion} from "../containers/NewQuestion";
import toJson from 'enzyme-to-json';
import '../setupTests';
const clickFn = jest.fn();
const signedUser = 'tylermcginnis';
it('NewQuestion Component renders without crashing', ()=>{
    
    const wrapper = mount(<NewQuestion signUser={signedUser}/>).dive();
    const welcome =<label> Complete the question</label>;
    const title =  <h1>Would You Rather...</h1>;
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find('button').first().text()).toEqual('Submit');
   
});

describe('Expect save question button to have been called', ()=>{
    it('should click save question button',()=>{
        const props = {
            signedUser:'tylermcginnis'
        };
        const component = shallow(<NewQuestion onClick= {clickFn} {...props}/>).dive();
        console.log(component.debug())
        component.find('button').simulate('click');
        component.instance().handleSubmit();
        component.instance().handleOptionOneChange();
        component.instance().handleOptionTwoChange();
        expect(clickFn).toHaveBeenCalled();
        

    })
})