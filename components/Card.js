import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

const Card = ({ color, isFlipped, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.card}>
            <View style={[styles.innerCard, isFlipped ? { backgroundColor: color } : { backgroundColor: 'gray' }]} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 80,
        height: 80,
        margin: 5,
    },
    innerCard: {
        flex: 1,
        borderRadius: 10,
    },
});

export default Card;
