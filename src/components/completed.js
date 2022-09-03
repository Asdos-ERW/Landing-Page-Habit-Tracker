import {View, Text} from 'react-native';
import React from 'react';
import CompletedSwipable from './completedSwipable';

const Completed = ({comTodos, updateData}) => {
  if (comTodos.length == 0) {
    return (
      <View style={{paddingBottom: 20, marginTop: 20}}>
        <Text style={{fontSize: 14, color: '#666666', paddingHorizontal: 20}}>
          Completed
        </Text>
        <Text
          style={{
            marginTop: 10,
            fontSize: 12,
            color: 'rgba(0,0,0,0.4)',
            paddingHorizontal: 20,
          }}>
          Nothing here~
        </Text>
      </View>
    );
  } else {
    return (
      <View style={{paddingBottom: 20, marginTop: 20}}>
        <Text style={{fontSize: 14, color: '#666666', paddingHorizontal: 20}}>
          Completed
        </Text>
        {comTodos.map(comTodo => {
          return comTodo.status == true ? (
            <CompletedSwipable
              key={comTodo.id}
              titleCom={comTodo.name}
              subtitleCom={comTodo.description}
              iconCom={comTodo.icon}
              idCom={comTodo}
              updateData={updateData}
              todos={comTodos}
            />
          ) : null;
        })}
      </View>
    );
  }
};

export default Completed;
