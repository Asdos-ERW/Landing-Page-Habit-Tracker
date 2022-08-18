import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import SwapableItem from './swipeAble';
import axios from 'axios';

const UpNext = () => {
  const [todos, SetTodos] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.1.11:3000/todos').then(res => {
      // console.log(res);
      SetTodos(res.data);
    });
  });

  // const displayTodos = () => {
  //   todos.map(todo => {
  //     return (
  //       <SwapableItem
  //         key={todo.id}
  //         title={todo.title}
  //         subtitle={todo.subtitle}
  //         todoID={todo}
  //       />
  //     );
  //   });
  // };

  return (
    <View style={{paddingBottom: 20, marginTop: 20}}>
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
