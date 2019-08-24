import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components'
import NaigationBar from './src/components/NavigationBar';

import MainScene from './src/components/MainScene';
import SceneClients from './src/components/SceneClients';
import SceneContact from './src/components/SceneContact';
import SceneAbout from './src/components/SceneAbout';
import SceneServices from './src/components/SceneServices';

export default function App() {
  return (
    <Navigator 
      initialRoute={{id: 'principal'}}
      renderScene={(route, navigator) => {

        switch(route.id) {
          case 'principal': 
            return(<MainScene navigator={navigator} />);
            break;
          case 'cliente': 
            return(<SceneClients navigator={navigator} />);
            break;
          case 'contato': 
            return(<SceneContact navigator={navigator} />);
            break;
          case 'empresa': 
            return(<SceneAbout navigator={navigator} />);
            break;
          case 'servicos': 
            return(<SceneServices navigator={navigator} />);
            break;

          default:
            return false;
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
