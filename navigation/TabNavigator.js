import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feed from '../screens/Feed';
import CreateStory from '../screens/CreateStory';

const Tab=createBottomTabNavigator();

const BottomTabNavigator=()=> {
  return (

     <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor:'grey',
        headerShown:false
      }}
     
     >
       <Tab.Screen name="Feed" component={Feed} 
        options={{
  
          tabBarIcon: ({}) => (
            <Ionicons name="book-outline"></Ionicons>
         
          ),
        }}/>
       <Tab.Screen name="CreateStory" component={CreateStory}
        options={{
         
          tabBarIcon: ({}) => (
            <Ionicons name="clipboard-outline"></Ionicons>
          )
        }}
       />
     </Tab.Navigator>
  
  );
}
export default BottomTabNavigator;