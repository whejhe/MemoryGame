import React from 'react';
import { View, Button, StyleSheet, Pressable, Text } from 'react-native';

const Menu = ({ onRestart }) => {
    return (
        <View style={styles.menu}>
            <Pressable style={styles.button} onPress={onRestart}>
                <Text style={styles.textButton}>REINICIAR</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => alert('Instrucciones del juego')}>
                <Text style={styles.textButton}>INSTRUCCIONES</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%',
        marginVertical: 20,
    },
    button: {
        backgroundColor: '#E37719',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    textButton:{
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold',
    }
});

export default Menu;
