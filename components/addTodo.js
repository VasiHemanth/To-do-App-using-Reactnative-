import React, { useState} from 'react';
import {  
  Text, 
  TextInput, 
  Button,
  StyleSheet,
  View,     
  } from 'react-native';

export default function AddTodo({submitHandler}) {

  const [ text, setText ] = useState('');  
  const changeHandler = (val) => {
    setText(val);
  }
    return (
        <View>
        <TextInput
        style={styles.input}
        placeholder="Add Todo.."
        onChangeText={changeHandler} />
        <Button  title="Add Todo" onPress = {() => submitHandler(text)} color = '#6dd5ed' />
        </View>
    );
}

const styles = StyleSheet.create({
    input : {
      marginBottom:10,
      paddingHorizontal:8,
      paddingVertical:10,
      borderBottomWidth:1,
      borderBottomColor: '#ddd',
      fontSize:17,
    }
})
 