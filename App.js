
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import * as Notification from "expo-notifications";
import moment from 'moment'

Notification.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: true,
      shouldShowAlert: true,
    };
  },
});

export default function App() {

  const [currentDate, setCurrentDate] = useState('');
  const [ceck, cecking] = useState(true);
  const [text, setText] = useState('');

  let testing = true

  useEffect(() => {

    const togle = setInterval(() => {
      var date = moment().utcOffset('+07:00').format(' hh:mm:ss a');
      setCurrentDate(date);
    }, 0)

    if (currentDate.toLocaleLowerCase() === ' 12:00:00 pm') {
      setText('Solat Zuhur Sekarang')
      console.log(currentDate)
      handleNotification();
    }
    if (currentDate.toLocaleLowerCase() === ' 03:18:00 pm') {
      setText('Solat Ashar Sekarang')
      console.log(currentDate)
      handleNotification();

    }
    if (currentDate.toLocaleLowerCase() === ' 06:00:00 pm') {
      setText('Solat Magrib Sekarang')
      console.log(currentDate)
      handleNotification();

    }
    if (currentDate.toLocaleLowerCase() === ' 07:08:00 pm') {
      setText('Solat Isha Sekarang')
      console.log(currentDate)
      handleNotification();

    }
    if (currentDate.toLocaleLowerCase() === ' 04:42:00 am') {
      setText('Solat Subuh Sekarang')
      console.log(currentDate)
      handleNotification();

    }

  })

  const handleNotification = () => {
    Notification.scheduleNotificationAsync({
      content: {
        title: "Sudah Waktunya solat",
        body: text,
      },
      trigger: {
        seconds: 10,
      },
    });
    cecking(true);
  };
  return (
    <View style={styles.contain}>

      <Text>{currentDate.toLocaleLowerCase()}</Text>
      <Image
        style={styles.stretch}
        source={require('../projek-uts/assets/masjid.png')}
      />
      <View style={styles.row}>
        <View>
          <Text>Subuh</Text>
          <Text>Zuhur</Text>
          <Text>Ashar</Text>
          <Text>Magrib</Text>
          <Text>isha</Text>
        </View>
        <View>
          <Text>04:42:00 am</Text>
          <Text>12:00:00 pm</Text>
          <Text>03:18:00 pm</Text>
          <Text>06:00:00 pm</Text>
          <Text>07:08:00 pm</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#749F82",
  },
  stretch: {
    width: 200,
    height: 200,
    resizeMode: 'stretch'
  },
  row: { flexDirection: 'row', justifyContent: 'space-between', width: '50%' },
});