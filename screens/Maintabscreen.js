import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {EvilIcons, MaterialCommunityIcons} from '@expo/vector-icons';
import Home from './Home';
import Search from './Search';
import Library from './Library';
import Album from './album';


const Tab = createBottomTabNavigator();
export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="TabOneNav"
      activeColor="white"
      barStyle={{ backgroundColor: 'black' }}
      tabBarOptions={{headerShown: false,
        activeTintColor: 'orange',}}
    >
      <Tab.Screen
        name="Home"
        component={TabOne}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Searchs"
        component={Search}
        options={{
          headerShown: false,
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <EvilIcons name="search" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={Library}
        options={{
          headerShown: false,
          tabBarLabel: 'Library',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="library" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const TabOneStack = createNativeStackNavigator();
function TabOne() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneNav"
        component={Home}
        options={{headerShown: false}}
      />
      <TabOneStack.Screen
        name="AlbumScreen"
        component={Album}
        options={{ headerTitle: 'Album' }}
      />
    </TabOneStack.Navigator>
  );
}
