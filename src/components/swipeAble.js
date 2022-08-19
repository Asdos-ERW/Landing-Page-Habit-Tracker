import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import React, {useEffect} from 'react';
import {ListItem} from '@rneui/themed';
import {Dimensions} from 'react-native';
import axios from 'axios';

const SwapableItem = ({
  title,
  subtitle,
  todoID,
  updateData,
  showModalSwipe,
  checkId,
  buttonHabitSwipe,
  updateDataCom,
}) => {
  const deleteData = todoID => {
    axios.delete(`http://192.168.1.11:3000/todos/${todoID.id}`).then(() => {
      updateData();
    });
  };

  const completedData = () => {
    axios
      .post('http://192.168.1.11:3000/completedTodos', {
        title,
        subtitle,
      })
      .then(() => {
        axios.delete(`http://192.168.1.11:3000/todos/${todoID.id}`).then(() => {
          updateData();
          updateDataCom();
        });
      });
  };

  const showAlertDelete = () => {
    Alert.alert('PERINGATAN!', 'Apakah Anda yakin akan menghapus task ini?', [
      {
        text: 'TIDAK',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'YA', onPress: () => deleteData(todoID)},
    ]);
  };

  const showAlertCompleted = () => {
    Alert.alert('CONGRATULATIONS!', 'Good Job 👍', [
      {text: 'OK', onPress: () => console.log('completed pressed')},
    ]);
  };

  return (
    <ListItem.Swipeable
      style={{
        // borderWidth: 1,
        marginHorizontal: 20,
        // marginVertical: 20,
        marginTop: 16,
        borderRadius: 20,
        overflow: 'hidden',
        elevation: 8,
      }}
      leftContent={reset => (
        <TouchableOpacity
          onPress={() => {
            showAlertCompleted();
            completedData();
            reset();
          }}
          style={{
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            // borderWidth: 2,
            backgroundColor: '#CCFFD2',
            width: Dimensions.get('window').width / 2 - 20,
            // minHeight: '100%',
            height: '79%',
            marginVertical: 20,
            marginHorizontal: 20,
            paddingBottom: 20,
            justifyContent: 'center',
          }}>
          <Image
            style={{width: 20, height: 20, marginTop: 20, marginLeft: 40}}
            source={require('../images/icon-checked.png')}
          />
        </TouchableOpacity>
        // <Button
        //   title="Info"
        //   onPress={() => reset()}
        //   icon={{name: 'info', color: 'white'}}
        //   buttonStyle={{minHeight: '100%', marginVertical: 20}}
        // />
      )}
      rightContent={reset => (
        <TouchableOpacity
          onPress={() => {
            // console.log(update);
            // update();
            showAlertDelete();
            // deleteData(todoID);

            reset();
          }}
          style={{
            position: 'relative',
            borderTopRightRadius: 22,
            borderBottomRightRadius: 22,
            backgroundColor: '#FFA0A0',
            width: Dimensions.get('window').width / 2 - 20,
            height: '79%',
            // height: '60%',
            // marginVertical: 20,
            marginTop: 20,
            marginLeft: -70,
            justifyContent: 'center',
            // marginBottom: -20,
            // marginHorizontal: 20,
            // paddingBottom: 20,
          }}>
          <Image
            style={{width: 18, height: 21, position: 'absolute', right: 50}}
            source={require('../images/icon-trash.png')}
          />
        </TouchableOpacity>
      )}>
      {/* <Button title="My Icon" /> */}
      <ListItem.Content
      // style={{borderWidth: 1}}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // borderWidth: 1,
            // flex: 1,
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{
                width: 48,
                height: 40,
                borderRadius: 50,
                marginRight: 20,
              }}
              source={require('../images/green-icon.png')}
              // source={require(`${props.url}`)}
            />
            <View>
              <Text style={{fontWeight: '600', color: '#0D0C0C', fontSize: 14}}>
                {title}
              </Text>
              <Text style={{color: '#9F9F9F', fontSize: 11}}>{subtitle}</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={event => {
              checkId(todoID.id);
              showModalSwipe();
              buttonHabitSwipe();
            }}>
            <Image
              style={{width: 24, height: 24}}
              source={require('../images/icon-edit.png')}
            />
          </TouchableOpacity>
        </View>
      </ListItem.Content>
    </ListItem.Swipeable>
  );
};

export default SwapableItem;
