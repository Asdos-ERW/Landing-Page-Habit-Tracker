import {StyleSheet, Text, View} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import React, {useEffect, useState} from 'react';

const CalendarComponent = () => {
  const [datesMarked, setDatesMarked] = useState({});
  const [datesColor, setDatesColor] = useState('#FFBE5C');
  const [dateSelected, setDateSelected] = useState('');
  const selecionarData = day => {
    console.log('Date selected 1 :', dateSelected);
    setDateSelected(dateSelected);
    const obj = {};
    console.log('Date selected 2 :', dateSelected);

    obj[day.dateString] = {selected: true, selectedColor: datesColor};
    setDatesMarked(obj);
  };
  return (
    <View style={{alignItems: 'center', marginBottom: 20}}>
      <View
        style={{
          width: 310,
          height: 320,
          // borderWidth: 2,
          alignItems: 'center',
          borderRadius: 10,
          overflow: 'hidden',
          elevation: 3,
        }}>
        <View
        // style={{
        //   width: 300,
        //   height: 290,
        // }}
        >
          <CalendarList
            // markedDates={datesMarked}
            markedDates={datesMarked}
            horizontal={true}
            pagingEnabled={true}
            calendarWidth={310}
            calendarHeight={320}
            onDayPress={day => {
              selecionarData(day);
            }}
            theme={{
              // 'stylesheet.day.basic': {
              //   base: {
              //     width: 20,
              //     height: 20,
              //   },
              // },
              todayTextColor: '#FFBE5C',
              textDayFontSize: 14,
              textMonthFontSize: 14,
              textDayHeaderFontSize: 14,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default CalendarComponent;
