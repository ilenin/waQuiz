import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Home from '../../pages/Home';
import Quiz from '../../pages/Quiz';
import Result from '../../pages/Result';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = createNativeStackNavigator();

const HomeRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    {/* Comentário */}
    <App.Screen name="Home" component={Home} />
    <App.Screen name="Quiz" component={Quiz} />
  </App.Navigator>
);

export default HomeRoutes;
