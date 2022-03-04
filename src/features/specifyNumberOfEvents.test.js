import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';


const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

    //Scenario 1: When user hasn’t specified a number, 32 is the default number
    test('When user has not specified a number, 32 is the default number', ({ given, when, then }) => {
        
        let AppWrapper;

        given('the user has not decided how many events to see', () => {
        });

        when('the user opens the main page', () => {
            AppWrapper = mount(<App />);
        });
    
        then('by default the user will see 32 events', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event').length).toBeLessThanOrEqual(32);
        });
    });
    
      

    //Scenario 2: User can change the number of events they want to see
    test('User can change the number of events they want to see', ({ given, when, then }) => {
        
        let AppWrapper;

        given('the user wanted to see a specific number of events', () => {
            AppWrapper = mount(<App />);
        });

        when('the user chooses the number of events to be shown', () => {
            AppWrapper.update();
            AppWrapper.find('.numberOfEvents').simulate('change', { target: { value: '2' } });
        });
    
        then('the user can change the number of events they want to see', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event')).toHaveLength(2);
        });
    });
    

});