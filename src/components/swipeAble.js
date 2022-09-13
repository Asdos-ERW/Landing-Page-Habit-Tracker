import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
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
  iconSwap,
  nameSwapable,
  descSwapable,
}) => {
  // iconSwap = 'green-icon.png';
  let iconPicked = `../images/${iconSwap}`;

  const deleteData = todoID => {
    axios
      .delete(
        `https://630dca01109c16b9abed4e02.mockapi.io/kegiatanList/${todoID.id}`,
      )
      .then(() => {
        updateData();
      });
  };

  const updateStatus = todoID => {
    axios
      .patch(
        `https://630dca01109c16b9abed4e02.mockapi.io/kegiatanList/${todoID.id}`,
        {status: true},
      )
      .then(res => {
        console.log('res updateStatus : ', res);
        updateData();
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

  const returnFunction = icon => {
    if (icon == '../images/yellow-icon.png') {
      // console.log('yes');
      return (
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
                  borderRadius: 12,
                  marginRight: 15,
                }}
                source={require('../images/yellow-icon.png')}
              />
              <View>
                <Text
                  style={{fontWeight: '600', color: '#0D0C0C', fontSize: 14}}>
                  {title}
                </Text>
                <Text style={{color: '#9F9F9F', fontSize: 11}}>{subtitle}</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                checkId(todoID.id);
                nameSwapable(todoID.name);
                descSwapable(todoID.description);
                // updateTask();
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
      );
    } else if (icon == '../images/green-icon.png') {
      return (
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
                  borderRadius: 12,
                  marginRight: 15,
                }}
                source={require('../images/green-icon.png')}
              />
              <View>
                <Text
                  style={{fontWeight: '600', color: '#0D0C0C', fontSize: 14}}>
                  {title}
                </Text>
                <Text style={{color: '#9F9F9F', fontSize: 11}}>{subtitle}</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                checkId(todoID.id);
                // updateTask();
                showModalSwipe();
                buttonHabitSwipe();
                nameSwapable(todoID.name);
                descSwapable(todoID.description);
              }}>
              <Image
                style={{width: 24, height: 24}}
                source={require('../images/icon-edit.png')}
              />
            </TouchableOpacity>
          </View>
        </ListItem.Content>
      );
    } else if (icon == '../images/purple-icon.png') {
      return (
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
                  borderRadius: 12,
                  marginRight: 15,
                }}
                // source={require(iconPickedFinal)}
                source={require('../images/purple-icon.png')}
                // source={require(`${props.url}`)}
              />
              <View>
                <Text
                  style={{fontWeight: '600', color: '#0D0C0C', fontSize: 14}}>
                  {title}
                </Text>
                <Text style={{color: '#9F9F9F', fontSize: 11}}>{subtitle}</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                checkId(todoID.id);
                // updateTask();
                showModalSwipe();
                buttonHabitSwipe();
                nameSwapable(todoID.name);
                descSwapable(todoID.description);
              }}>
              <Image
                style={{width: 24, height: 24}}
                source={require('../images/icon-edit.png')}
              />
            </TouchableOpacity>
          </View>
        </ListItem.Content>
      );
    } else if (icon == '../images/blue-icon.png') {
      return (
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
                  borderRadius: 12,
                  marginRight: 15,
                }}
                // source={require(iconPickedFinal)}
                source={require('../images/blue-icon.png')}
                // source={require(`${props.url}`)}
              />
              <View>
                <Text
                  style={{fontWeight: '600', color: '#0D0C0C', fontSize: 14}}>
                  {title}
                </Text>
                <Text style={{color: '#9F9F9F', fontSize: 11}}>{subtitle}</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                checkId(todoID.id);
                // updateTask();
                showModalSwipe();
                buttonHabitSwipe();
                nameSwapable(todoID.name);
                descSwapable(todoID.description);
              }}>
              <Image
                style={{width: 24, height: 24}}
                source={require('../images/icon-edit.png')}
              />
            </TouchableOpacity>
          </View>
        </ListItem.Content>
      );
    } else if (icon == '../images/orange-icon.png') {
      return (
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
                  borderRadius: 12,
                  marginRight: 15,
                }}
                // source={require(iconPickedFinal)}
                source={require('../images/orange-icon.png')}
                // source={require(`${props.url}`)}
              />
              <View>
                <Text
                  style={{fontWeight: '600', color: '#0D0C0C', fontSize: 14}}>
                  {title}
                </Text>
                <Text style={{color: '#9F9F9F', fontSize: 11}}>{subtitle}</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                checkId(todoID.id);
                // updateTask();
                showModalSwipe();
                buttonHabitSwipe();
                nameSwapable(todoID.name);
                descSwapable(todoID.description);
              }}>
              <Image
                style={{width: 24, height: 24}}
                source={require('../images/icon-edit.png')}
              />
            </TouchableOpacity>
          </View>
        </ListItem.Content>
      );
    }
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
            console.log(todoID.status);
            updateStatus(todoID);
            // completedData(todoID);
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
      )}
      rightContent={reset => (
        <TouchableOpacity
          onPress={() => {
            showAlertDelete();
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
      {returnFunction(iconPicked)}
      {/* <ListItem.Content
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
              // source={require(iconPickedFinal)}
              source={require('../images/purple-icon.png')}
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
            onPress={() => {
              checkId(todoID.id);
              // updateTask();
              showModalSwipe();
              buttonHabitSwipe();
            }}>
            <Image
              style={{width: 24, height: 24}}
              source={require('../images/icon-edit.png')}
            />
          </TouchableOpacity>
        </View>
      </ListItem.Content> */}
    </ListItem.Swipeable>
  );
};

export default SwapableItem;
