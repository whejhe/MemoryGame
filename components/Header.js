import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ attempts }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Juego de Memoria</Text>
            <Text style={styles.attempts}>Intentos: {attempts}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    attempts: {
        fontSize: 18,
    },
});

export default Header;
