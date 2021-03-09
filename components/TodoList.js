import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {delTodo, sortTodo, toggleTodo} from '../state/actions';
import Todo from './Todo';
import DraggableFlatList, {
  RenderItemParams,
} from 'react-native-draggable-flatlist';

function TodoList() {
    const todoList = useSelector(state => state.todoList);
    const dispatch = useDispatch();

    const renderItem = useCallback(
    ({ item, index, drag, isActive }: RenderItemParams<Item>) => {
        return (
        <Todo item={item} drag={drag} 
          toggleHandler={() => dispatch(toggleTodo(item.id))} 
          deleteHandler={() => dispatch(delTodo(item.id))} 
          isActive={isActive} />
        );
    },
    []
    );
    return (
      <View style={styles.todoList}>
        <DraggableFlatList 
            style={styles.todoList}
            keyExtractor={item => ('draggable-' + item.id)} 
            data={todoList} 
            renderItem={renderItem} 
            onDragEnd={(data) => dispatch(sortTodo(data))}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    todoList: {
      color: "black",
      flex: 12,
    }
  });

export default TodoList;