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
  const [todos, setTodos] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const getData = () => {
    axios
      .get('https://630dca01109c16b9abed4e02.mockapi.io/kegiatanList/')
      .then(res => {
        setTodos(res.data);
        console.log('data berhasil di update');
        // console.log(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const [id, setId] = useState(0);

  const getPutId = num => {
    setId(num);
    console.log(id);
  };

  const [iconPicked, setIconPicked] = useState('green-icon.png');
  const [nameForUpdate, setNameForUpdate] = useState('');
  const [descForUpdate, setDescForUpdate] = useState('');
  const [formName, setFormName] = useState('');
  const [formDesc, setFormDesc] = useState('');

  const nameUpdateFunction = name => {
    setNameForUpdate(name);
    setFormName(name);
  };

  const descUpdateFunction = desc => {
    setDescForUpdate(desc);
    setFormDesc(desc);
  };

  const setNameFunction = initialName => {
    setFormName(initialName);
  };

  const setDescFunction = initialDesc => {
    setFormDesc(initialDesc);
  };

  const resetForm = () => {
    setFormName('');
    setFormDesc('');
  };

  console.log('name : ', nameForUpdate);
  console.log('desc : ', descForUpdate);

  const getIconPicked = icon => {
    setIconPicked(icon);
    // console.log(icon);
  };

  const [buttonHabit, setButtonHabit] = useState('CREATE HABIT');

  // const [completedTodos, setCompletedTodos] = useState([]);

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
          checkItemId={getPutId}
          putDataUpNext={() => {
            putData();
          }}
          buttonHabitUpNext={() => {
            setButtonHabit('UPDATE');
          }}
          updateComTodos={() => {
            getComData();
          }}
          iconUpnext={iconPicked}
          upNextName={nameUpdateFunction}
          upNextDesc={descUpdateFunction}
        />
        <Completed
          comTodos={todos}
          updateData={() => {
            getData();
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
          setButtonHabit('CREATE HABIT');
          resetForm();
        }}
        iconBottom={getIconPicked}
        formNameBottomNav={formName}
        formDescBottomNav={formDesc}
        initialNameBottomNav={setNameFunction}
        initialDescBottomNav={setDescFunction}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    position: 'relative',
  },
});

export default index;
