import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {delDisabledTodo} from '../state/actions';
import { Icon } from 'react-native-elements';

function Toolbar() {
    const todoList = useSelector(state => state.todoList);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
              <Icon name='check' type='font-awesome' color="green" onPress={() => dispatch(delDisabledTodo())}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: "flex-end",
    }
  });

export default Toolbar;