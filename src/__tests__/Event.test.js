import React from 'react';
import { shallow } from 'enzyme';
import  Event  from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> Component', () => {
    let EventWrapper;

    beforeAll(() => {
        EventWrapper = shallow(<Event event={mockData[1]} />);
    }); 

    test('render event', () => {
        expect(EventWrapper.find('.event')).toHaveLength(1);
    });

    test('render event summary', () => {
        expect(EventWrapper.find('.summary')).toHaveLength(1);
    });

    test('render event location', () => {
        expect(EventWrapper.find('.location')).toHaveLength(1);
    });

    test('render event show details button', () => {
        expect(EventWrapper.find('.details-btn')).toHaveLength(1);
    });

    test('show details when button clicked', () => {
        EventWrapper.setState({
            collapsed:true
        });
        EventWrapper.find('.details-btn').simulate('click');
        expect(EventWrapper.state('collapsed')).toBe(false);
    });

    test('hide details when button clicked', () => {
        EventWrapper.setState({
            collapsed:false
        });
        EventWrapper.find('.details-btn').simulate('click');
        expect(EventWrapper.state('collapsed')).toBe(true);
    });

});
