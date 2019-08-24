import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';

import NavigationBar from './NavigationBar';

const detalhesContato = require('../img/detalhe_contato.png');

export default class SceneContact extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <StatusBar 
                    hidden={true}
                />
                <NavigationBar voltar  navigator={this.props.navigator}  colorTheme='#61bd8c' />
                
                <View style={styles.clientsHeader}>
                    <Image source={detalhesContato} />
                    <Text style={styles.title}>Contatos</Text>
                </View>
                
                <View style={styles.mainContent}>
                    <Text style={styles.txtContact}>Tel: (11) 3378-3289</Text>
                    <Text>Tel: (11) 93378-3289</Text>
                    <Text>Email: teste@email.com</Text>
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
        color: '#61bd8c'
    },
    mainContent: {
        marginTop: 20,
        padding: 20
    },
    txtContact: {
        fontSize: 18
    }
})