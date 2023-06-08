import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import styles from './style';

export default function index() {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator
        size={20}
        style={{transform: [{scaleX: 2}, {scaleY: 2}]}}
        color={'black'}
      />
      <Text style={styles.title}>Loading...</Text>
    </View>
  );
}
