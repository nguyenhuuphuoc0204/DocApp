import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../Screen/Home/HomeScreen';
import AddNewTask from '../Screen/Tasks/AddNewTask';

const Router = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      {/* Fix the missing closing angle bracket here */}
      <Stack.Screen name='AppNewTask' component={AddNewTask} />
    </Stack.Navigator>
  );
};

export default Router;
