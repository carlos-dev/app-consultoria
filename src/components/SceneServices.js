import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';

import NavigationBar from './NavigationBar';

const detalhesServicos = require('../img/detalhe_servico.png');

export default class SceneAbout extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}} >
                <StatusBar 
                    hidden={true}
                />
                <NavigationBar voltar  navigator={this.props.navigator} colorTheme="#19d1c8" />
                
                <View style={styles.clientsHeader}>
                    <Image source={detalhesServicos} />
                    <Text style={styles.title}>Nossos serviços</Text>
                </View>
                
                <View style={styles.mainContent}>
                    <Text style={styles.txtServices}>- Consultoria</Text>
                    <Text style={styles.txtServices}>- Processos</Text>
                    <Text style={styles.txtServices}>- Acompanhamento de projetos</Text>
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
        color: '#19d1c8'
    },
    mainContent: {
        marginTop: 20,
        padding: 20
    },
    txtServices: {
        fontSize: 18
    }
})