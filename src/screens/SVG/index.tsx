import React from 'react'
import { View, Text } from 'react-native'
import styles from './style'
// import GiftSVG from './../../assets/icons/gift.svg'
import {LocalSvg} from 'react-native-svg'

export default function index() {
  return (
    <View style={styles.wrapper}>
        <LocalSvg width={200} height={200} asset={require("./../../assets/icons/gift.svg")} />
        {/* <LocalSvg width={200} height={200} asset={require("@app/assets/icons/gift.svg")} /> */}
    </View>
  )
}