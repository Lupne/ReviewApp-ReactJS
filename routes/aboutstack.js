import {  createStackNavigator } from 'react-navigation-stack';
import About from '../pages/about'
import Header from '../shared/header';
import React from 'react';

const screens = {
    About:{
        screen:About,
        navigationOptions:({navigation})=>{
            return{
                headerTitle:()=> <Header navigation={navigation} title='AboutGameZone' />
            }
        }
    },
}

const AboutStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerStyle: {
        height:90,
}, 
    }
});

export default AboutStack;