import React, { useState, useEffect} from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const Header = ({ attempts }) => {

    const opacity = useState(new Animated.Value(0))[0];
    const opacity2 = useState(new Animated.Value(0))[0];

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <View style={styles.header}>
            <Animated.Text style={[styles.title, { opacity }]}>Juego de Memoria</Animated.Text>
            <Text style={[styles.attempts, { opacity2 }]}>Intentos: {attempts}</Text>
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
        color: '#E37719',
    },
    attempts: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#E37719',
    },
});

export default Header;
