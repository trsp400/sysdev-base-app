import * as React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from './pages/SignIn';
import ResetPassword from './pages/ResetPassword';
import DashboardAdmin from '~/pages/DashboardAdmin';
import DashboardUser from '~/pages/DashboardUser';
import Profile from '~/pages/Profile';

export default ( isSigned = false, admin ) =>  createAppContainer(
    createSwitchNavigator({
        Sign: createSwitchNavigator({
            SignIn,
            ResetPassword            
        }),
        App: admin == true ? createBottomTabNavigator({
            DashboardAdmin,
            Profile
        }, {
            tabBarOptions: {
                style :{
                    backgroundColor: '#50a45a',
                    paddingBottom: 10,
                }
            }
        }) : 
        createBottomTabNavigator({
            DashboardUser,
            Profile
        }, {
            tabBarOptions: {
                keyboardHidesTabBar: true,
                activeTintColor: '#FFF',
                inactiveTintColor: 'rgba(255,255,255, 0.5)',
                style :{
                    backgroundColor: '#268030',
                    paddingBottom: 10,
                    height: 65
                },
                
            }
        }),
    }, {
        initialRouteName: isSigned == true ? 'App' : 'Sign'        
    }),
);

