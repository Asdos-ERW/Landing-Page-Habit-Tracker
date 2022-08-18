import {View, Text} from 'react-native';
import React from 'react';
import CompletedSwipable from './completedSwipable';

const Completed = () => {
  return (
    <View style={{paddingBottom: 20, marginTop: 20}}>
      <Text style={{fontSize: 14, color: '#666666', paddingHorizontal: 20}}>
        Completed
      </Text>
      <CompletedSwipable />
      <CompletedSwipable />
      <CompletedSwipable />
    </View>
  );
};

export default Completed;
