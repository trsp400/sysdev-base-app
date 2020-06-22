import * as React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from './pages/SignIn';
import ResetPassword from './pages/ResetPassword';
import Dashboard from '~/pages/Dashboard';

export default ( isSigned = false ) =>  createAppContainer(
    createSwitchNavigator({
        Sign: createSwitchNavigator({
            SignIn,
            ResetPassword            
        }),
        App: createBottomTabNavigator({
            Dashboard
        }, {
            tabBarOptions: {
                style :{
                    backgroundColor: '#268030',
                    paddingBottom: 10,
                    
                }
            }
        }),
    }, {
        initialRouteName: isSigned == true ? 'App' : 'Sign'
    }),
);

