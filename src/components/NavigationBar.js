import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

const btnVoltar = require('../img/btn_voltar.png');

export default class NaigationBar extends Component {
    render() {
        if(this.props.voltar) {
            return ( 
                <View style={styles.titleBar}>
                    <TouchableHighlight
                        onPress={() => {
                            this.props.navigator.pop();
                        }}
                    >
                        <Image source={btnVoltar} />
                    </TouchableHighlight>

                    <Text style={styles.title}>ATM consultoria</Text>
                </View>
            );
        }
        return (
            <View style={styles.titleBar}>
                <Text style={styles.title}>ATM consultoria</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  titleBar: {
      backgroundColor: '#ccc',
      padding: 10,
      height: 60,
      flexDirection: 'row'
  },
  title: {
      flex: 1,
      fontSize: 18,
      textAlign: 'center',
      color: '#fff'
  }
});
