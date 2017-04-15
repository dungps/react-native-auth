import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Header extends Component {
    render() {
        return (
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>{this.props.headerText}</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,

    },
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        borderBottomWidth: 1,
        elevation: 2,
        position: 'relative',
        marginBottom: 10
    }
});

export { Header };