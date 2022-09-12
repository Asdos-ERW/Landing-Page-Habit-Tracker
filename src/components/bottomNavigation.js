import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import ModalComponent from './Modal';
import axios from 'axios';

const BottomNavigation = ({
  updateData,
  showModal,
  visible,
  bottomNavId,
  buttonHabitBotNav,
  changeButtonHabitBotNav,
  iconBottom,
  formNameBottomNav,
  formDescBottomNav,
  initialNameBottomNav,
  initialDescBottomNav,
}) => {
  const getData = () => {
    axios.get('http://192.168.1.4:3000/todos').then(res => {
      setTodos(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const [todos, setTodos] = useState([]);
  return (
    <View style={{backgroundColor: '#F9F9F9', position: 'relative'}}>
      <ModalComponent
        updateDataModal={() => {
          updateData();
        }}
        showModalComponent={() => {
          showModal();
        }}
        visibleModal={visible}
        putDataModal={() => {
          putDataBottomNav(data);
        }}
        modalID={bottomNavId}
        buttonHabitModal={buttonHabitBotNav}
        changeButtonHabitModal={() => {
          changeButtonHabitBotNav();
        }}
        iconModal={iconBottom}
        nameModal={formNameBottomNav}
        descModal={formDescBottomNav}
        initialNameModal={initialNameBottomNav}
        initialDescModal={initialDescBottomNav}
      />
      <View
        style={{
          height: 70,
          backgroundColor: 'white',
          elevation: 10,
          position: 'relative',
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          flexDirection: 'row',
          overflow: 'hidden',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{width: 28, height: 28}}
            source={require('../images/icon-home.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{width: 30, height: 30}}
            source={require('../images/icon-finance.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomNavigation;
