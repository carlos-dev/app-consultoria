import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';

import NavigationBar from './NavigationBar';

const detalhesEmpresa = require('../img/detalhe_empresa.png');

export default class SceneAbout extends Component {
    render() {
        return (
            <View>
                <StatusBar 
                    hidden={true}
                />
                <NavigationBar voltar  navigator={this.props.navigator} />
                
                <View style={styles.clientsHeader}>
                    <Image source={detalhesEmpresa} />
                    <Text style={styles.title}>A Empresa</Text>
                </View>
                
                <View style={styles.mainContent}>
                    <Text style={styles.txtAbout}>Sit duis duis duis sit aute cillum qui consectetur.</Text>
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
        color: '#ec7148'
    },
    mainContent: {
        marginTop: 20,
        padding: 20
    },
    txtAbout: {
        fontSize: 18
    }
})