import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

    //Scenario 1: An event element is collapsed by default
    test('An event element is collapsed by default', ({ given, when, then }) => {
        
        let AppWrapper;
        AppWrapper = mount(<App />);

        given('a user was on the main page', () => {
        });

        when('nothing is clicked/selected', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
        });
    
        then('the event details will be collapsed by default', () => {
            expect(AppWrapper.find(".event .event-details")).toHaveLength(0);
        });
    });
    
      

    //Scenario 2: User can expand an event to see its details
    test('User can expand an event to see its details', ({ given, when, then }) => {
        
        let AppWrapper;
        AppWrapper = mount(<App />);

        given('a user was on the events page and wanted to see its details', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
        });

        when('the expand option is selected', () => {
            AppWrapper.find('.event .details-btn').at(0).simulate('click');
        });
    
        then('the user will see the details of the event', () => {
            expect(AppWrapper.find('.event .event-details')).toHaveLength(1);
        });
    });
    

    //Scenario 3: User can collapse an event to hide its details
    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        
        let AppWrapper;
        AppWrapper = mount (<App />);
        
        given('a user was viewing the events details', () => {
            AppWrapper.update();
            AppWrapper.find(".event .details-btn").at(0).simulate('click');
            expect(AppWrapper.find(".event .event-details")).toHaveLength(1);
        });

        when('the user clicks on button the close the expanded event', () => {
            let Event = AppWrapper.find('.event');
            Event.find('.details-btn').at(0).simulate('click');
            
        });
    
        then('the event will collapse to hide its details', () => {
            const EventDetails = AppWrapper.find('.event');
            expect(EventDetails.find('.event .event-details')).toHaveLength(0);
        });
    });

});