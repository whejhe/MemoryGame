import React, {useState, useEffect} from 'react';
import { Pressable, View, StyleSheet, Animated, Image } from 'react-native';

const Card = ({ color, isFlipped, onPress }) => {

    const opacity = useState(new Animated.Value(0))[0];

    return (
        <Pressable onPress={onPress} style={styles.card}>
            <View style={[styles.innerCard, isFlipped ? { backgroundColor: color } : { backgroundColor: 'gray' }]} />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 80,
        height: 80,
        margin: 5,
        borderRadius: 10,
        borderColor: '#E37719',
        borderWidth: 2,
    },
    innerCard: {
        flex: 1,
        borderRadius: 10,
    },
});

export default Card;
