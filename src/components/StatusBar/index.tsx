import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const styles = StyleSheet.create({
  statusBar: {
    height: getStatusBarHeight(true),
    backgroundColor: '#ff6969',
  },
});

const StatusBarComponent: React.FC = () => (
  <View style={[styles.statusBar]}>
    <StatusBar barStyle="light-content" backgroundColor="#ff6969" translucent />
  </View>
);

export default StatusBarComponent;
