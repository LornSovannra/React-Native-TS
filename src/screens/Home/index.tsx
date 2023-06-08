import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet
} from 'react-native';

export default function index() {
  const [name, setName] = useState<string>();

  const handleNameChanges = (name: string) => setName(name);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.greetingText}>Hello, {name ? name : 'Guest'}!</Text>
      <TouchableNativeFeedback
        onPress={() => handleNameChanges('Lorn Sovannra')}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => handleNameChanges('')}>
        <View style={{...styles.button, backgroundColor: 'red'}}>
          <Text style={styles.buttonText}>Log Out</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greetingText: {
    fontSize: 50,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 4,
  },
  buttonText: {
    color: 'white',
  },
});
