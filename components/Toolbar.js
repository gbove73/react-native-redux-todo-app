import React from 'react';
import {StyleSheet, View, Linking} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {delDisabledTodo, toggleLock, sortActiveFirst} from '../state/actions';
import { Icon } from 'react-native-elements';

function Toolbar() {
    const global = useSelector(state => state.global);
    const dispatch = useDispatch();
    const todoList = useSelector(state => state.todoList);
    const share = (todoList) => {
        let url =
            'whatsapp://send?text=Cose da comprare: ' + todoList.filter((t) => !t.disabled).map((t) => t.text.trim()).join(", ");
        Linking.openURL(url)
            .then((data) => {
                console.log('WhatsApp Opened');
            })
            .catch(() => {
                alert('Make sure Whatsapp installed on your device');
            });
    }

    return (
        <View style={styles.container}>
            <Icon style={{paddingRight: 50}} name={'share'} type='font-awesome' color={"blue"}
                  onPress={() => share(todoList)}/>
            <Icon style={{paddingRight: 50}} name={'sort'} type='font-awesome' color={"green"}
                  onPress={() => dispatch(sortActiveFirst())}/>
            <Icon style={{paddingRight: 50}} name={global.locked ? 'toggle-on' : 'toggle-off'} type='font-awesome' color={global.locked ? "red" : "gray"}
              onPress={() => dispatch(toggleLock())}/>
            <Icon style={{display: global.locked ? 'none' : ''}} name='check' type='font-awesome' color="green" onPress={() => dispatch(delDisabledTodo())}/>


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