import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components'
import NaigationBar from './src/components/NavigationBar';

import MainScene from './src/components/MainScene';
import SceneClients from './src/components/SceneClients';

export default function App() {
  return (
    <Navigator 
      initialRoute={{id: 'a'}}
      renderScene={(route, navigator) => {
        if(route.id === 'a') {
          return(
            <MainScene navigator={navigator} />
          );
        } 

        if(route.id === 'b') {
          return(
            <SceneClients />
          );
        } 
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
