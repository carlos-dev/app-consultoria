import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';

import NavigationBar from './NavigationBar';

const detalhesClientes = require('../img/detalhe_cliente.png');
const cliente1 = require('../img/cliente1.png');
const cliente2 = require('../img/cliente2.png');

export default class SceneClients extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}} >
                <StatusBar 
                    backgroundColor='#b9c961'
                />
                <NavigationBar voltar  navigator={this.props.navigator} colorTheme='#b9c961' />
                
                <View style={styles.clientsHeader}>
                    <Image source={detalhesClientes} />
                    <Text style={styles.title}>Nossos clientes</Text>
                </View>


                <View style={styles.mainContent}>
                    <Image source={cliente1} />
                    <Text>lorem ipsum</Text>
                </View>
                
                <View style={styles.mainContent}>
                    <Image source={cliente2} />
                    <Text>lorem ipsum</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    clientsHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    title: {
        fontSize: 29,
        color: '#b9c941'
    },
    mainContent: {
        marginTop: 45,
        marginLeft: 30
    }
})