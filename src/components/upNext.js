import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import SwapableItem from './swipeAble';
import axios from 'axios';
import {ListItem} from '@rneui/themed';
import {Dimensions} from 'react-native';

const UpNext = () => {
  const getData = () => {
    axios.get('http://192.168.1.11:3000/todos').then(res => {
      console.log(res);
      setTodos(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const [todos, setTodos] = useState([]);

  return (
    <View style={{paddingBottom: 20, marginTop: 20, borderWidth: 2}}>
      <Text style={{fontSize: 14, color: '#666666', paddingHorizontal: 20}}>
        Up Next
      </Text>
      {todos.map(todo => {
        return (
          <SwapableItem
            key={todo.id}
            title={todo.title}
            subtitle={todo.subtitle}
            todoID={todo}
            updateData={() => {
              getData();
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
