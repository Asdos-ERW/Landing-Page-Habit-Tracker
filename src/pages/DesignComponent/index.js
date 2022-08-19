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
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const getData = () => {
    axios.get('http://192.168.1.11:3000/todos').then(res => {
      setTodos(res.data);
    });
  };

  const getComData = () => {
    axios.get('http://192.168.1.11:3000/completedTodos').then(res => {
      console.log(res.data);
      setCompletedTodos(res.data);
    });
  };

  useEffect(() => {
    getData();
    getComData();
  }, []);

  const [id, setId] = useState(0);

  const handleClick = num => {
    setId(num);
    console.log(id);
  };

  const [buttonHabit, setButtonHabit] = useState('BUAT HABIT');

  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

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
          showModal={() => {
            toggleModal();
          }}
          checkItemId={handleClick}
          putDataUpNext={() => {
            putData();
          }}
          buttonHabitUpNext={() => {
            setButtonHabit('UPDATE');
          }}
          updateComTodos={() => {
            getComData();
          }}
        />
        <Completed
          comTodos={completedTodos}
          updateData={() => {
            getComData();
          }}
        />
      </ScrollView>

      <BottomNavigation
        updateData={() => {
          getData();
        }}
        showModal={() => {
          toggleModal();
        }}
        visible={isModalVisible}
        bottomNavId={id}
        buttonHabitBotNav={buttonHabit}
        changeButtonHabitBotNav={() => {
          setButtonHabit('BUAT HABIT');
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
