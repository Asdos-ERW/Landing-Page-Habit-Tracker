import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import SwapableItem from './swipeAble';
import axios from 'axios';
import {ListItem} from '@rneui/themed';
import {Dimensions} from 'react-native';

const UpNext = ({
  todosUpNext,
  updateTodos,
  updateComTodos,
  showModal,
  checkItemId,
  buttonHabitUpNext,
  iconUpnext,
}) => {
  // const showAlert = () => {
  //   Alert.alert('nice');
  // };

  const checkEmpty = dataToCheck => {
    dataToCheck.forEach(data => {
      if (data.status == false) {
        return false;
      } else {
        return true;
      }
    });
  };

  if (checkEmpty(todosUpNext)) {
    return (
      <View style={{paddingBottom: 20, marginTop: 20}}>
        <Text style={{fontSize: 14, color: '#666666', paddingHorizontal: 20}}>
          Up Next
        </Text>
        <Text
          style={{
            marginTop: 10,
            fontSize: 12,
            color: 'rgba(0,0,0,0.4)',
            paddingHorizontal: 20,
          }}>
          All Done Chief!👍
        </Text>
      </View>
    );
  } else {
    return (
      <View style={{paddingBottom: 20, marginTop: 20}}>
        <Text style={{fontSize: 14, color: '#666666', paddingHorizontal: 20}}>
          Up Next
        </Text>
        {todosUpNext.map(todo => {
          return todo.status == false ? (
            <SwapableItem
              checkId={checkItemId}
              key={todo.id}
              title={todo.name}
              subtitle={todo.description}
              iconSwap={todo.icon}
              todoID={todo}
              updateData={() => {
                updateTodos();
              }}
              updateDataCom={() => {
                updateComTodos();
              }}
              showModalSwipe={() => {
                showModal();
              }}
              buttonHabitSwipe={() => {
                buttonHabitUpNext();
              }}
            />
          ) : null;
        })}
      </View>
    );
  }
};

export default UpNext;
