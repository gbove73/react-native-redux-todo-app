import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {delDisabledTodo, toggleLock, sortActiveFirst} from '../state/actions';
import { Icon } from 'react-native-elements';

function Toolbar() {
    const global = useSelector(state => state.global);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
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