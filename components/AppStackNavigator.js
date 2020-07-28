import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import BookDonateScreen from '../screens/BookDonateScreen'
import RecieverDetailScreen from '../screens/RecieverDetailScreen'
import { createDrawerNavigator } from 'react-navigation-drawer'
export const AppStackNavigator= createStackNavigator({
    BookDonateList:{
        screen:BookDonateScreen,
        navigationOptions:{
            headerShown:false
        }
    },
    RecieverDetails:{
        screen:RecieverDetailScreen,
        navigationOptions:{
            headerShown:false
        }
    }
},
{
    initialRouteName:'BookDonateList'
}
)