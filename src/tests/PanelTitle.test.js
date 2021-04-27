import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PanelTitle from '../components/PanelTitle';
import '../setupTests';
describe('Panel title tests', () => {
    it('should render without error', () =>{
        const props = {
            caption: 'some caption',
            title: 'some title'
        }
        const wrapper = shallow(<PanelTitle {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})
