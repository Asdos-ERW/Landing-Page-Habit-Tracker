import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import DesignComponent from './src/pages/DesignComponent';

const App = () => {
  return <DesignComponent />;
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
    flexDirection: 'row',
  },
});

export default App;
