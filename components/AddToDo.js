import React,{ useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View  } from 'react-native';

export default function AddToDo({submitHandler}){
    const[text,setText]=useState('')
    changeHandler = (newtext) =>{
        setText(newtext);
    }

    return (
        <View>
            <TextInput
            styles={styles.input}
            placeholder='New To Do...'
            onChangeText={changeHandler}/>
        
        <Button onPress={() => submitHandler(text)} title={'Add'} color='coral'/>
        </View>
    )

}

const styles = StyleSheet.create({
    input:{
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:"#ddd",
    }
})