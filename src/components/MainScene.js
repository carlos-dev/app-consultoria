import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableHighlight } from 'react-native';

import NavigationBar from './NavigationBar';

const logo = require('../img/logo.png');
const menu_cliente = require('../img/menu_cliente.png');
const menu_empresa = require('../img/menu_empresa.png');
const menu_contato = require('../img/menu_contato.png');
const menu_servico = require('../img/menu_servico.png');

export default class NaigationBar extends Component {
    render() {
        return (
            <View>
                <StatusBar 
                    hidden={true}
                />

                <NavigationBar />

                <View style={styles.logo}>
                    <Image source={logo} />
                </View>
                
                <View style={styles.menu}>

                    <View style={styles.menuGroup}>
                        <TouchableHighlight 
                            underlayColor={'#b9c941'}
                            activeOpacity={0.3}
                            onPress={() => {
                                this.props.navigator.push({id: 'cliente'})
                            }}
                        >
                            <Image source={menu_cliente} style={styles.imgMenu} />
                        </TouchableHighlight>

                        <TouchableHighlight 
                            underlayColor={'#61db8c'}
                            activeOpacity={0.3}
                            onPress={() => {
                                this.props.navigator.push({id: 'contato'})
                            }}
                        >
                            <Image source={menu_contato} style={styles.imgMenu} />

                        </TouchableHighlight>
                    </View>

                    <View style={styles.menuGroup}>
                        <TouchableHighlight 
                            underlayColor={'#ec7148'}
                            activeOpacity={0.3}
                            onPress={() => {
                                this.props.navigator.push({id: 'empresa'})
                            }}
                        >
                            <Image source={menu_empresa} style={styles.imgMenu} />
                        </TouchableHighlight>
                        
                        <TouchableHighlight 
                            underlayColor={'#19d1c8'}
                            activeOpacity={0.3}
                            onPress={() => {
                                this.props.navigator.push({id: 'servicos'})
                            }}
                        >
                            <Image source={menu_servico} style={styles.imgMenu}  />
                        </TouchableHighlight>
                    </View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        marginTop: 30,
        alignItems: 'center'
    },
    menu: {
        alignItems: 'center'
    },
    menuGroup: {
        flexDirection: 'row'
    },
    imgMenu: {
        margin: 15
    }
})