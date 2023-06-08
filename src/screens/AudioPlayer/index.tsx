import React, {useEffect, useMemo, useRef, useState} from 'react';
import {View, Text, TouchableOpacity, Dimensions, Alert} from 'react-native';
import TrackPlayer, {State, useProgress} from 'react-native-track-player';
import * as Progress from 'react-native-progress';
import styles from './style';

const track1 = {
  // url: require('./../../assets/audios/bong.mp3'), // Load media from the app bundle
  // url: "file:///Users/lornsovannra/Library/Developer/CoreSimulator/Devices/E0EE36A4-CC91-48C7-8FEA-3F9E816DEFF3/data/Containers/Data/Application/AF5F3855-998E-431E-B13B-E9D4AB7789FA/Documents/myapp/myFile.mp3", // Load media from the app bundle
  url: "file:///data/user/0/com.reactnativets/files/myapp/myFile.mp3", // Load media from the app bundle
  title: 'បង - Bong',
  artist: 'Vannda',
  //   artwork: require('./cover.jpg'), // Load artwork from the app bundle
  //   duration: 166,
};

export default function index() {
  const progress = useProgress();
  const [title, setTitle] = useState<string>();
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  // GET RANDOM COLOR CODE
  function RandomColor() {
    var color = 'rgb(' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ')';

      return color
  }

  useMemo(() => {
    if (progress.position === 10) {
      TrackPlayer.pause();
      Alert.alert(
        'WARNING',
        'Please subscribe to our plan to unlock Chapter 2',
      );
    }
  }, [progress]);

  // INITIALIZE AUDIO
  useEffect(() => {
    async function initializeAudio() {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.reset();
      await TrackPlayer.add([track1]);

      const tracks = await TrackPlayer.getQueue();

      // SET CURRENT AUDIO TITLE
      setTitle(tracks[0].title);
    }

    initializeAudio();
  }, []);

  async function handlePlayAudio() {
    await TrackPlayer.play();

    const state = await TrackPlayer.getState();

    if (state === State.Playing) {
      __DEV__ && console.log('The player is playing');
    } else if (state === State.Connecting) {
      __DEV__ && console.log('IS STATE IS CONNECTIING:', true);
    }
  }

  async function handleStopAudio() {
    await TrackPlayer.pause();

    const state = await TrackPlayer.getState();

    if (state === State.Paused) {
      __DEV__ && console.log('The player is paused');
    }
  }

  async function handleReplay() {
    await TrackPlayer.reset();
    await TrackPlayer.add([track1]);
    await TrackPlayer.play();
  }

  async function handleSeekToPosition(position: number) {
    if (isSubscribed) {
      await TrackPlayer.seekTo(position);
    }

    if (!isSubscribed && position > 20) {
      Alert.alert('WARNING', 'Please subscribe to our plan');
    }
  }

  async function handleNext() {
    await TrackPlayer.skipToNext();
  }

  async function handlePrevious() {
    await TrackPlayer.skipToPrevious();
  }

  //   useEffect(() => {
  //     const handleAlert = () => {
  //         if(progress.position > 10){
  //             Alert.alert("WARNING", "Please subscribe to our plan")

  //             TrackPlayer.pause()
  //         }
  //     }

  //     handleAlert()
  //   }, [progress.position])

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={styles.audioInfoWrapper}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <Text>{title}</Text>
            <Text>
              {parseFloat(progress.position).toFixed()} /{' '}
              {parseFloat(progress.duration).toFixed()}s
            </Text>
          </View>
          <Progress.Bar
            color="black"
            borderRadius={0}
            borderWidth={1}
            borderColor="gray"
            progress={
              progress.position !== 0 && progress.duration !== 0
                ? progress.position / progress.duration
                : 0
            }
            width={Dimensions.get('window').width - 100}
            style={{marginBottom: 20, backgroundColor: 'whitesmoke'}}
          />
        </View>
        <Text>Chapter: {title}</Text>
        <Text>Titlte: {title}</Text>
        <Text>Buffer: {progress.buffered}</Text>
        <Text>Position: {progress.position}</Text>
        <Text>Duration: {progress.duration}</Text>
      </View>
      <TouchableOpacity onPress={handlePlayAudio}>
        <View style={styles.btnWrapper}>
          <Text style={styles.txt}>Play Audio</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleStopAudio}>
        <View
          style={{...styles.btnWrapper, backgroundColor: 'red', marginTop: 20}}>
          <Text style={styles.txt}>Pause Audio</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleReplay}>
        <View
          style={{
            ...styles.btnWrapper,
            backgroundColor: 'green',
            marginTop: 20,
          }}>
          <Text style={styles.txt}>Replay Audio</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleSeekToPosition(20)}>
        <View
          style={{
            ...styles.btnWrapper,
            backgroundColor: RandomColor(),
            marginTop: 20,
          }}>
          <Text style={styles.txt}>Chapter 1 (20s)</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleSeekToPosition(40)}>
        <View
          style={{
            ...styles.btnWrapper,
            backgroundColor: RandomColor(),
            marginTop: 20,
          }}>
          <Text style={styles.txt}>Chapter 2 (40s)</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleSeekToPosition(60)}>
        <View
          style={{
            ...styles.btnWrapper,
            backgroundColor: RandomColor(),
            marginTop: 20,
          }}>
          <Text style={styles.txt}>Chapter 3 (60s)</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.nextPreviousWrapper}>
        <TouchableOpacity onPress={handlePrevious}>
          <View
            style={{
              ...styles.btnWrapper,
              backgroundColor: 'red',
              marginTop: 20,
            }}>
            <Text style={styles.txt}>Previous</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext}>
          <View
            style={{
              ...styles.btnWrapper,
              backgroundColor: 'blue',
              marginTop: 20,
              marginLeft: 20,
            }}>
            <Text style={styles.txt}>Next</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
