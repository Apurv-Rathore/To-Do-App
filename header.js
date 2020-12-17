import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(){
    return (
        <View style={styles.header}>
            <Text style={styles.title}>
                My Todos
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        paddingTop:38,
        height:40,
        backgroundColor:'coral',
    },

})