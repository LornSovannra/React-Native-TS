import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import styles from './style';
import {useFetch} from './../../hooks';
import Loading from './../../shared/Loading';
import io from 'socket.io-client';

export default function index() {
  // const {data, error, isFetching} = useFetch('http://127.0.0.1:8000/api/chats');

  // console.log('DATA:', data);
  // console.log('ERROR:', error);
  // console.log('IS_FETCHING:', isFetching);

  const socket = io('http://127.0.0.1:8000');

  socket.on('new-order', data => {
    console.log('DATA SOCKET:', data);
  });

  // if (isFetching) {
  //   return <Loading />;
  // }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.headerTitle}>Welcome to the Chat's Room</Text>
      {/* <View>
        {data.map((item, index) => {
          return (
            // <Text key={index}>{index + 1}. {item[0]?.name}</Text>
            <Text key={index}>{index + 1}</Text>
          );
        })}
      </View> */}
    </View>
  );
}
