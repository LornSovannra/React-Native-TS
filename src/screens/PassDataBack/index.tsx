import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {SCREENS} from './../../constants';

export default function Index(props: any) {
  const navigation = useNavigation();
  const param = useRoute().params;

  console.log('PARAMS:', param);

  return (
    <View>
      <Text>HOME SCREEN</Text>
      {/* <Button title='Open Modal' onPress={() => navigation.navigate(SCREENS.MODAL)} /> */}
      <Button
        title="Open Modal"
        onPress={() =>
          props.navigation.navigate(SCREENS.MODAL, {name: "Hello"})
        }
      />
    </View>
  );
}
