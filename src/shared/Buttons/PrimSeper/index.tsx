import React from 'react';
import {View, Text, Dimensions} from 'react-native';

interface indexProps {
  margin: number[];
}

export default function index({margin}: indexProps) {
  return (
    <View
      style={{
        width: Dimensions.get('window').width,
        height: 200,
        backgroundColor: 'blue',
        marginTop: margin[0],
        marginRight: margin[1],
        marginBottom: margin[2],
        marginLeft: margin[3],
      }}
    />
  );
}
