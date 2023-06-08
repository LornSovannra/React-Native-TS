import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './style';
import RNFetchBlob from 'rn-fetch-blob';

export default function index() {
  const {dirs} = RNFetchBlob.fs;
  const fileDir = `${dirs.DocumentDir}/myapp`;
  const fileName = 'myFile.mp3'; // Use a file extension that is not recognized by the device
  const fileUrl = 'https://assets.mixkit.co/active_storage/sfx/667/667-preview.mp3';

  // Download the file
  async function DownloadFile() {
    const response = await RNFetchBlob.config({
      fileCache: true,
      appendExt: 'mp3',
      path: `${fileDir}/${fileName}`,
    }).fetch('GET', fileUrl);

    console.log("RESPONSE:", response.path())
  }

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={DownloadFile}>
        <Text>Download</Text>
      </TouchableOpacity>
    </View>
  );
}
