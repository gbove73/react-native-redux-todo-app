import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

function Todo(props) {
    return (
      <TouchableOpacity onLongPress={props.drag}>
        <View style={props.isActive ? styles.selected : styles.output}>
          <TouchableOpacity onPress={props.deleteHandler.bind(this)}>
            <Text style={styles.deleteButton}>X</Text>
          </TouchableOpacity>
          <Text style={styles.todo}>{props.item.text}</Text>
        </View>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    output: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: "darkblue",
        flexDirection: 'row',
      },
    selected: {
      backgroundColor: "lightblue",
      color: "blue",
      flexDirection: 'row',
      padding: 10,
      marginVertical: 5,
    },
    todo: {
      color: "white",
      marginLeft: 20,
      fontSize: 18,
    },
    deleteButton: {
      color: 'red',
      marginLeft: 10,
      fontSize: 20,
    }
});

export default Todo;