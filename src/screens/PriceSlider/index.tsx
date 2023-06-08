import React, {useState} from 'react';
import Slider from '@react-native-community/slider';
import {Text, View} from 'react-native';
import styles from './style';
// import { DIMENTIONS } from '@app/constants';
import {DIMENTIONS} from './../../constants';
// import RangeSlider from '@jesster2k10/react-native-range-slider';

export default function index() {
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(10000);

  const onChange = (min: number, max: number) => {
    // console.log('min: ', min);
    setMinPrice(min)

    // console.log('max: ', max);
    setMaxPrice(max)
  };

  return (
    <View style={styles.wrapper}>
      <View>
        <Text>
          $ {minPrice} - $ {maxPrice}
        </Text>
      </View>
      {/* <RangeSlider
        type="range" // ios only
        min={0}
        max={1000}
        selectedMinimum={0.8} // ios only
        selectedMaximum={500} // ios only
        // tintColor="#ecf0f1"
        tintColor="#000"
        // handleColor="#f368e0"
        handleColor="#000"
        // handlePressedColor="#f368e0"
        handlePressedColor="#000"
        // tintColorBetweenHandles="#ff9ff3"
        tintColorBetweenHandles="#000"
        onChange={onChange}
      /> */}
    </View>
  );
}
