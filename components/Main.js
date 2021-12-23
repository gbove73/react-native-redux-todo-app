import React from 'react';
import {StyleSheet, View} from 'react-native';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import Toolbar from './Toolbar';
import { useKeepAwake } from 'expo-keep-awake';

function Main() {
    const containerRef = React.useRef();
  useKeepAwake();
  return (
    <View
        style={styles.container}>
        <Toolbar/>
        <TodoInput/>        
        <TodoList/>
    </View>    
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 50,
      backgroundColor: 'white',
      marginTop: 50,
      flexDirection: 'column',
    },
  });

export default Main;