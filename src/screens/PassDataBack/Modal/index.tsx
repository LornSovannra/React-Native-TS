import {View, Text, Button} from 'react-native';
import React from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

export default function Index(props: any) {
  const navigation = useNavigation<any>();
  const param = useRoute().params;

  function handleGoBack() {
    // props.navigation.state?.params?.updateParent('some data to send back');
    navigation.setParams({
      name: 'Hello World',
    });
    navigation.goBack();
  }

  return (
    <View>
      <Text>Index</Text>
      <Button title="Go Back" onPress={handleGoBack} />
    </View>
  );
}
