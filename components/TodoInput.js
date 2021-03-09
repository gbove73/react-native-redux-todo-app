import React from 'react';
import { StyleSheet, View, TextInput, Button, Keyboard, Alert } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {changeTodoInput, addTodo} from '../state/actions';

function TodoInput() {
  const todoText = useSelector(state => state.todoText);
  const dispatch = useDispatch();
  const onChangeTextHandler = (text) => {
    dispatch(changeTodoInput(text));
  }
  const onAddTodoHandler = () => {
    if (todoText.trim() === "") {
      return;
    }
    dispatch(addTodo(todoText));
    // scompare la tastiera e svuota il campo
    Keyboard.dismiss();
    dispatch(changeTodoInput(""));
  }
  return (
    <View style={styles.inputContainer}>
      {/*Input */ }
      <TextInput   
        returnKeyType='done'
        autoFocus={true}
        value={todoText}
        onChangeText={onChangeTextHandler} 
        placeholder="Es. Pane, Latte, etc." 
        onSubmitEditing={onAddTodoHandler}
        style={styles.input}/>
      <Button title="Aggiungi" onPress={onAddTodoHandler}/>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
      width: "80%",
      borderWidth: 1,
      borderRadius: 5,
      paddingVertical: 5,
      paddingLeft: 3,
      borderColor: "lightblue"
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row', 
    alignItems: 'center'
  },
});

export default TodoInput;