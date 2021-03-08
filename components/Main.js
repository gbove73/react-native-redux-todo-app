import React from 'react';
import {StyleSheet, View} from 'react-native';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function Main() {
  return (
    <View style={styles.container}>
        <TodoInput />        
        <TodoList />
    </View>    
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 50,
      backgroundColor: 'white',
      marginTop: 50,
    },
  });

export default Main;