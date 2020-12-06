import React, { useState} from 'react';
import { StyleSheet, 
  View,
  StatusBar, 
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from './components/header';
import TodoItem from './components/todoitem';
import AddTodo  from './components/addTodo'

export default function App() {
  
  const [Todos, setTodos] = useState([
    {text: 'Build a Todo App', key : '1'},
    {text: 'Learn React', key : '2'},
    {text: 'Pratice JavaScript', key : '3'},
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key !=key);
    });
  }
  
  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          {text : text, key : Math.random().toString() },
          ...prevTodos
        ];
      })
    } else { 
      Alert.alert( 'OOPS', 'Todo must be over 3 chars' , [ 
        { text : 'Understood' }
      ]);

    }
  }

  return (
    
    <TouchableWithoutFeedback onPress = {() => {
      Keyboard.dismiss();
      console.log("Keyboard Dismissed");
    }}>
    <View style={styles.container} >
      <View>
      <Header />
      <View style= {styles.content}>
          <AddTodo submitHandler = {submitHandler} />
        <View style={ styles.list }>
          <FlatList 
            data={Todos}
            renderItem={ ({item} ) => (
              <TodoItem item = {item} pressHandler= { pressHandler} />
            )}
          />
        </View>
      </View> 
      </View>
      <StatusBar barStyle="light-content" />
    </View>
    </TouchableWithoutFeedback>
      
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
  },
  content : {
    padding: 40,
    
  },
  list : {
    margin: 20,
  },
});
