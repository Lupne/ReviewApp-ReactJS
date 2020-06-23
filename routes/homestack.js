import {  createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../pages/home';
import Detail from '../pages/details';
import Header from '../shared/header';
import React from 'react';

const screens = {
    Home:{
        screen: Home,
        navigationOptions:({navigation})=>{
            return{
                headerTitle:()=><Header navigation={navigation} title='GameZone'/>
            }
        }
    },
    Review:{
        screen:Detail,
        navigationOptions:{
            title:'Review Details',
        },
    },
}

const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerStyle: {
        height:90,
}, 
    }
});

export default HomeStack