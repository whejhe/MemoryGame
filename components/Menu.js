import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const Menu = ({ onRestart }) => {
    return (
        <View style={styles.menu}>
            <Button title="Reiniciar" onPress={onRestart} />
            <Button title="Ayuda" onPress={() => alert('Instrucciones del juego')} />
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
});

export default Menu;
