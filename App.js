import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components'
import NaigationBar from './src/components/NavigationBar';

import MainScene from './src/components/MainScene';
import SceneClients from './src/components/SceneClients';
import SceneContact from './src/components/SceneContact';

export default function App() {
  return (
    <Navigator 
      initialRoute={{id: 'principal'}}
      renderScene={(route, navigator) => {
        if(route.id === 'principal') {
          return(
            <MainScene navigator={navigator} />
          );
        } 

        if(route.id === 'cliente') {
          return(
            <SceneClients navigator={navigator} />
          );
        } 

        if(route.id === 'contato') {
          return(
            <SceneContact navigator={navigator} />
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
