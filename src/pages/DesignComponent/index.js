import React, {useState, useEffect, Component} from 'react';

import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  Button,
} from 'react-native';
import Profile from '../../components/profile';
import UpNext from '../../components/upNext';
import Completed from '../../components/completed';
import AccordionView from '../../components/collapseCalendar';
import BottomNavigation from '../../components/bottomNavigation';
import axios from 'axios';

const index = () => {
  const getData = () => {
    axios.get('http://192.168.1.11:3000/todos').then(res => {
      setTodos(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const [todos, setTodos] = useState([]);
  return (
    <View style={{position: 'relative', flex: 1}}>
      <StatusBar backgroundColor={'#F9F9F9'} barStyle={'dark-content'} />
      <ScrollView style={styles.container}>
        <Profile />
        <AccordionView />
        <UpNext
          todosUpNext={todos}
          updateTodos={() => {
            getData();
          }}
        />
        <Completed />
      </ScrollView>

      <BottomNavigation
        updateData={() => {
          getData();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    // borderWidth: 1,
    position: 'relative',
  },
});

export default index;
