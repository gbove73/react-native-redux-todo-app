import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import { Icon } from 'react-native-elements'

function Todo(props) {
    return (
      <TouchableOpacity onLongPress={props.drag}>
        <View style={props.isActive ? styles.selected : styles.output}>
          <View style={{flex: 5}}>    
            <Text style={styles.todo}>{props.item.text}</Text>
          </View>  
          <View style={{flex: 1}}>
              <Icon name='trash' type='font-awesome' color="red" onPress={props.deleteHandler.bind(this)}/>
          </View>
        </View>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    output: {
        flex: 1,
        padding: 10,
        marginVertical: 5,
        backgroundColor: "darkblue",
        flexDirection: 'row',
        alignContent: 'stretch',
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