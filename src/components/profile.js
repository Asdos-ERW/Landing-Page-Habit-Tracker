import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.profileContent}>
        <View>
          <Text style={styles.profileTitle}>Hello Slebew!</Text>
          <Text style={styles.profileSubtitle}>Monday, 28 Jan</Text>
        </View>
        <Image
          style={styles.profileImage}
          source={{
            uri: 'https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2022/05/30/1296735921.jpg',
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    paddingHorizontal: 10,
    marginTop: 20,
  },
  profileContent: {
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  profileTitle: {
    fontWeight: 'bold',
    color: '#0D0C0C',
    fontSize: 16,
  },

  profileSubtitle: {
    color: '#9F9F9F',
    fontSize: 13,
  },

  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});

export default Profile;
