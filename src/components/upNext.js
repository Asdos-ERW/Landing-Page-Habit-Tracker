import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import SwapableItem from './swipeAble';
import axios from 'axios';
import {ListItem} from '@rneui/themed';
import {Dimensions} from 'react-native';

const UpNext = ({todosUpNext, updateTodos, showModal, checkItemId}) => {
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
            showModalSwipe={() => {
              showModal();
            }}
          />
        );
      })}
      {/* <SwapableItem title="Tes" subtitle="subtitle" />
      <SwapableItem title="Tes" subtitle="subtitle" />
      <SwapableItem title="Tes" subtitle="subtitle" /> */}
    </View>
  );
};

export default UpNext;
