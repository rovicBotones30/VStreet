import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import login from './screens/login';
import signup from './screens/signup';
import Tab from './screens/Maintabscreen';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={login} options={{headerShown: false}}/>
         <Stack.Screen name="signup" component={signup}  options={{headerShown: false}} />
         <Stack.Screen name="Tab" component={Tab} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;