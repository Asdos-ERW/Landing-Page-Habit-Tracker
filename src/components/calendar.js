import {StyleSheet, Text, View} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import React from 'react';

const CalendarComponent = () => {
  return (
    <View style={{alignItems: 'center', marginBottom: 20}}>
      <View
        style={{
          width: 300,
          height: 290,
          // borderWidth: 2,
          alignItems: 'center',
          borderRadius: 10,
          overflow: 'hidden',
          elevation: 3,
        }}>
        <View
          style={{
            width: 300,
            height: 290,
          }}>
          <CalendarList
            horizontal={true}
            pagingEnabled={true}
            calendarWidth={300}
            calendarHeight={290}
            onDayPress={day => {
              console.log(day);
            }}
            theme={{
              'stylesheet.day.basic': {
                base: {
                  width: 20,
                  height: 20,
                },
              },
              textDayFontSize: 12,
              textMonthFontSize: 12,
              textDayHeaderFontSize: 12,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default CalendarComponent;
