import {View, Text, Image, TouchableOpacity} from 'react-native';
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
}) => {
  console.log('todos :', todosUpNext);
  if (todosUpNext.length == 0) {
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
          return (
            <SwapableItem
              checkId={checkItemId}
              key={todo.id}
              title={todo.title}
              subtitle={todo.subtitle}
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
          );
        })}
      </View>
    );
  }
};

export default UpNext;
