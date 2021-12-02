import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feed from '../screens/Feed';
import CreateStory from '../screens/CreateStory';
import { RFValue } from 'react-native-responsive-fontsize';

const Tab=createMaterialBottomTabNavigator();

const BottomTabNavigator=()=> {
  return (

     <Tab.Navigator
        
         labeled={false}
         activeColor='orange'
         barStyle={styles.bottomTabStyle}
     >
       <Tab.Screen name="Feed" component={Feed} 
        options={{
  
          tabBarIcon: ({color}) => (
          
            <Ionicons name="book-outline" color={color} size={30} style={styles.icons}></Ionicons>
            
          ),

        }}/>
       <Tab.Screen name="Create Story" component={CreateStory}
        options={{
         
          tabBarIcon: ({color}) => (
            <Ionicons name="clipboard-outline" color={color} size={30} style={styles.icons}></Ionicons>
          )
        }}
       />
     </Tab.Navigator>
  
  );
}

const styles=StyleSheet.create({
  bottomTabStyle:{
    backgroundColor:'#002147',
    height:'8%',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    position:'absolute',
    overflow:'hidden'
    
  },
  icons:{
    width:RFValue(30),
    height:RFValue(30)
  }
})
export default BottomTabNavigator;