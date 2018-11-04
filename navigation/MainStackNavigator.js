import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SongIDScreen from '../screens/SongIDScreen';
import HistoryScreen from '../screens/HistoryScreen';
import SocialScreen from '../screens/SocialScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  
};


export default createStackNavigator({
  Home: {screen: HomeScreen},
  SongID: {screen: SongIDScreen},
  History: {screen: HistoryScreen},
  Social: {screen: SocialScreen},
});