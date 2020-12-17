import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity  } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
export default function ToDoItem({item, pressHandler}){

    return (
        <TouchableOpacity onPress={()=> pressHandler(item.key)}>
            <View style={styles.item}>
            <MaterialIcons name='delete'size={18} color={'#333'}/>
            <Text style={styles.text}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    item:{
        flexDirection:'row',
        padding:16,
        marginTop:16,
        borderWidth:1,
        borderColor:'#bbb',
        borderStyle:'dashed',
        borderRadius:10,

    },
    text:{
        marginLeft:10,
    }
})