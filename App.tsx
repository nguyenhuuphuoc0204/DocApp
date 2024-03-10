// File: App.tsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Router from './routers/Router';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Router} />
        {/* Thêm màn hình khác nếu cần */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
