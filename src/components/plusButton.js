import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const PlusButton = ({onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 55,
        height: 55,
        backgroundColor: '#FFBE5C',
        borderRadius: 50,
        position: 'absolute',
        right: 20,
        bottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        style={{width: 25, height: 25}}
        source={require('../images/icon-plus.png')}
      />
    </TouchableOpacity>
  );
};

export default PlusButton;
