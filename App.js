import React from 'react';
import {createAppContainer , createSwitchNavigator ,} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs' ;
 import WelcomeScreen from './screens/WelcomeScreen';
 import {AppTabNAvigator} from './components/AppTabNavigator'

 export default function App () {
   return (
     <appContainer/>
   );
 }

 const switchNavigator = createSwitchNavigator({
   WelcomeScreen: {screen: WelcomeScreen},
   BottonTab:{screen:AppTabNAvigator}
 })

 const AppContainer = createAppContainer(switchNavigator);