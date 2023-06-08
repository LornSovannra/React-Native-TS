/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * DEVELOP BY MR. SOVANNRA LORN
 */

import React, {Fragment} from 'react';
import {View, Text} from 'react-native';
import Home from './src/screens/Home';
import PrimSeper from './src/shared/Buttons/PrimSeper';
import AudioPlayer from './src/screens/AudioPlayer';
import SVG from './src/screens/SVG';
// import SVG from '@app/screens/SVG'
import PriceSlider from './src/screens/PriceSlider';
// import PriceSlider from '@app/screens/PriceSlider'
import InfiniteScroll from './src/screens/InfiniteScroll';
import Download from './src/screens/Download';
import Chat from './src/screens/Chat';
import PassDataBack from './src/screens/PassDataBack'
import Modal from './src/screens/PassDataBack/Modal'

import axios from 'axios';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { SCREENS } from './src/constants';

// export default function App() {
//   return (
//     <Fragment>
//       {/* <Home /> */}
//       {/* <PrimSeper margin={[0, 0, 0, 0]} /> */}
//       {/* <SVG /> */}
//       {/* <PriceSlider /> */}
//       {/* <InfiniteScroll /> */}
//       {/* <AudioPlayer /> */}
//       {/* <Download /> */}
//       <Chat />
//     </Fragment>
//   );
// }

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREENS.PASS_DATA_BACK}
        screenOptions={{
          headerMode: 'screen',
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'tomato'},
        }}>
        <Stack.Screen
          name={SCREENS.PASS_DATA_BACK}
          component={PassDataBack}
        />
        <Stack.Screen
          name={SCREENS.MODAL}
          component={Modal}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
