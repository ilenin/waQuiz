/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import { View } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 
 import FlashMessage from 'react-native-flash-message';

 import AppProvider from './hooks';
 import Routes from './routes';
 import StatusBar from './components/StatusBar';

 const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar />
    <AppProvider>
      <View style={{ flex: 1, backgroundColor: '#E9EBEF' }}>
      <FlashMessage position="bottom" />
      <Routes />
      </View>
    </AppProvider>
  </NavigationContainer>
);

export default App;