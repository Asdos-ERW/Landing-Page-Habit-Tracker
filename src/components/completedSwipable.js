import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import React, {useState} from 'react';
import {ListItem} from '@rneui/themed';
import {Dimensions} from 'react-native';
import axios from 'axios';

const CompletedSwipable = ({
  titleCom,
  subtitleCom,
  idCom,
  updateData,
  todos,
  iconCom,
}) => {
  const [completed, setCompleted] = useState([]);

  let iconPicked = `../images/${iconCom}`;
  // console.log(iconPicked);
  const deleteData = () => {
    // console.log(idCom);
    axios
      .delete(
        `https://630dca01109c16b9abed4e02.mockapi.io/kegiatanList/${idCom.id}`,
      )
      .then(() => {
        updateData();
      });
  };

  const undoData = () => {
    axios
      .patch(
        `https://630dca01109c16b9abed4e02.mockapi.io/kegiatanList/${idCom.id}`,
        {status: false},
      )
      .then(() => {
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
      {text: 'YA', onPress: () => deleteData()},
    ]);
  };

  const returnFunction = icon => {
    if (icon == '../images/yellow-icon.png') {
      return (
        <ListItem.Content>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              // borderWidth: 1,
              // flex: 1,
              width: '100%',
              justifyContent: 'space-between',
              // borderWidth: 1,
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
                // source={require(`${props.url}`)}
              />
              <View>
                <Text
                  style={{fontWeight: '600', color: '#0D0C0C', fontSize: 14}}>
                  {titleCom}
                </Text>
                <Text style={{color: '#9F9F9F', fontSize: 11}}>
                  {subtitleCom}
                </Text>
              </View>
            </View>
            {/* <Text style={{color: '#9F9F9F', fontSize: 11}}>11.00 AM</Text> */}
          </View>
        </ListItem.Content>
      );
    } else if (icon == '../images/green-icon.png') {
      return (
        <ListItem.Content>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              // borderWidth: 1,
              // flex: 1,
              width: '100%',
              justifyContent: 'space-between',
              // borderWidth: 1,
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
                // source={require(`${props.url}`)}
              />
              <View>
                <Text
                  style={{fontWeight: '600', color: '#0D0C0C', fontSize: 14}}>
                  {titleCom}
                </Text>
                <Text style={{color: '#9F9F9F', fontSize: 11}}>
                  {subtitleCom}
                </Text>
              </View>
            </View>
            {/* <Text style={{color: '#9F9F9F', fontSize: 11}}>11.00 AM</Text> */}
          </View>
        </ListItem.Content>
      );
    } else if (icon == '../images/purple-icon.png') {
      return (
        <ListItem.Content>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              // borderWidth: 1,
              // flex: 1,
              width: '100%',
              justifyContent: 'space-between',
              // borderWidth: 1,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{
                  width: 48,
                  height: 40,
                  borderRadius: 12,
                  marginRight: 15,
                }}
                source={require('../images/purple-icon.png')}
                // source={require(`${props.url}`)}
              />
              <View>
                <Text
                  style={{fontWeight: '600', color: '#0D0C0C', fontSize: 14}}>
                  {titleCom}
                </Text>
                <Text style={{color: '#9F9F9F', fontSize: 11}}>
                  {subtitleCom}
                </Text>
              </View>
            </View>
            {/* <Text style={{color: '#9F9F9F', fontSize: 11}}>11.00 AM</Text> */}
          </View>
        </ListItem.Content>
      );
    } else if (icon == '../images/blue-icon.png') {
      return (
        <ListItem.Content>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              // borderWidth: 1,
              // flex: 1,
              width: '100%',
              justifyContent: 'space-between',
              // borderWidth: 1,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{
                  width: 48,
                  height: 40,
                  borderRadius: 12,
                  marginRight: 15,
                }}
                source={require('../images/blue-icon.png')}
                // source={require(`${props.url}`)}
              />
              <View>
                <Text
                  style={{fontWeight: '600', color: '#0D0C0C', fontSize: 14}}>
                  {titleCom}
                </Text>
                <Text style={{color: '#9F9F9F', fontSize: 11}}>
                  {subtitleCom}
                </Text>
              </View>
            </View>
            {/* <Text style={{color: '#9F9F9F', fontSize: 11}}>11.00 AM</Text> */}
          </View>
        </ListItem.Content>
      );
    } else if (icon == '../images/orange-icon.png') {
      return (
        <ListItem.Content>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              // borderWidth: 1,
              // flex: 1,
              width: '100%',
              justifyContent: 'space-between',
              // borderWidth: 1,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{
                  width: 48,
                  height: 40,
                  borderRadius: 12,
                  marginRight: 15,
                }}
                source={require('../images/orange-icon.png')}
                // source={require(`${props.url}`)}
              />
              <View>
                <Text
                  style={{fontWeight: '600', color: '#0D0C0C', fontSize: 14}}>
                  {titleCom}
                </Text>
                <Text style={{color: '#9F9F9F', fontSize: 11}}>
                  {subtitleCom}
                </Text>
              </View>
            </View>
            {/* <Text style={{color: '#9F9F9F', fontSize: 11}}>11.00 AM</Text> */}
          </View>
        </ListItem.Content>
      );
    }
  };

  return (
    <View style={{opacity: 0.85}}>
      <ListItem.Swipeable
        style={{
          // borderWidth: 1,
          marginHorizontal: 20,
          // marginVertical: 20,
          marginTop: 16,
          borderRadius: 20,
          overflow: 'hidden',
          elevation: 8,
          // borderWidth: 1,

          backgroundColor: '#9F9F9F',
        }}
        leftContent={reset => (
          <TouchableOpacity
            onPress={() => {
              undoData();
              // alert('Undo Pressed');
              reset();
            }}
            style={{
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              // borderWidth: 2,
              backgroundColor: '#EBB5FF',
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
              source={require('../images/icon-undo.png')}
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
              marginTop: 20,
              marginLeft: -70,
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 18, height: 21, position: 'absolute', right: 50}}
              source={require('../images/icon-trash.png')}
            />
          </TouchableOpacity>
        )}>
        {returnFunction(iconPicked)}
      </ListItem.Swipeable>
    </View>
  );
};

export default CompletedSwipable;
