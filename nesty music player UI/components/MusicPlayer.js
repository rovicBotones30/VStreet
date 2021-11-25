import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet, Text, View, SafeAreaView, Dimensions,
  TouchableOpacity, Image, FlatList, Animated,
} from 'react-native';

// import TrackPlayer, {
//       Capability,
//       Event,
//       RepeatMode,
//       State,
//       usePlaybackState,
//       useProgress,
//       useTrackPlayerEvents
// } from 'react-native-track-player';
import Slider from '@react-native-community/slider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import songs from '../model/music'

const { width, height } = Dimensions.get('window');

// const setupPlayer = async () => {
//   await TrackPlayer.setupPlayer();
//   await TrackPlayer.add(songs);
// }

// const togglePlayback = async (playbackState) => {
//   const currentTrack = await TrackPlayer.getCurrentTrack();
//   if (currentTrack !== null) {
//     if (playbackState == State.Paused) {
//       await TrackPlayer.play();
//     } else {
//       await TrackPlayer.pause();
//     }
//   }
// }

const MusicPlayer = () => {
  // const playbackState = usePlaybackState();
  const scrollContent = useRef(new Animated.Value(0)).current;
  const [songIndex, setSongIndex] = useState(0);

  const musicSlider = useRef(null);
  useEffect(() => {

    scrollContent.addListener(({ value }) => {
      // console.log('Scroll Content', scrollContent);
      // console.log('Device Width', width);

      const index = Math.round(value / width);
      setSongIndex(index);
      // console.log('Index:', index);

      return () => {
        scrollContent.removeAllListeners();
      }
    });
  }, []);

  const forward = () => {
    musicSlider.current.scrollToOffset({
      offset: (songIndex + 1) * width,
    });
  }
  const backward = () => {
    musicSlider.current.scrollToOffset({
      offset: (songIndex - 1) * width,
    });
  }
  const renderMusic = ({ index, item }) => {

    return (
      <Animated.View style={styles.slideMusic}>
        <View style={styles.albumContainer}>
          <Image
            source={item.image}
            style={styles.albumCover}
          />
        </View>
      </Animated.View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}>
        <View style={{ width: width }}>
          <Animated.FlatList
            ref={musicSlider}
            data={songs}
            renderItem={renderMusic}
            keyExtractor={(item) => item.id}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{
                nativeEvent: {
                  contentOffset: { x: scrollContent }
                }
              }],
              { useNativeDriver: true }
            )}
          />
        </View>

        <View>
          <Text style={styles.title}>{songs[songIndex].title}</Text>
          <Text style={styles.artist}>{songs[songIndex].artist}</Text>
        </View>

        <View>
          <Slider
            style={styles.progress}
            value={10}
            minimumValue={0}
            maximumValue={100}
            thumbTintColor="#FFF"
            minimumTrackTintColor="#FFF"
            maximumTrackTintColor="gray"
            onSlidingComplete={() => { }}
          />
          <View style={styles.progressLabel}>
            <Text style={styles.labelText}>0:00</Text>
            <Text style={styles.labelText}>3:58</Text>
          </View>
        </View>
        <View style={styles.controls}>
          <TouchableOpacity onPress={backward}>
            <Ionicons name="play-skip-back" size={35} color='#fff' style={{ marginTop: 18 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <Ionicons name="ios-pause-circle" size={70} color='#fff' />
          </TouchableOpacity>
          <TouchableOpacity onPress={forward}>
            <Ionicons name="play-skip-forward" size={35} color='#fff' style={{ marginTop: 18 }} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.underline}>
        <View style={styles.botIcon}>
          <TouchableOpacity onPress={() => { }}>
            <Ionicons name="heart-outline" size={25} color='#777777' />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <Ionicons name="ios-share-social-outline" size={25} color='#777777' />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <Ionicons name="ios-repeat-sharp" size={25} color='#777777' />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <Ionicons name="list-outline" size={25} color='#777777' />
          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  );
};

export default MusicPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  albumContainer: {
    width: 350,
    height: 360,
    marginTop: 70,
  },
  albumCover: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#EEEEEE',
    textAlign: 'left',
    top: 45,
  },
  artist: {
    fontSize: 16.5,
    fontWeight: '200',
    color: '#EEEEEE',
    textAlign: 'left',
    top: 45,
  },
  progress: {
    width: 410,
    height: 40,
    marginTop: 65,
    flexDirection: 'row'
  },
  progressLabel: {
    width: 380,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
  },
  labelText: {
    color: "#fff",
  },
  controls: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-between',
    marginTop: 15,
    marginLeft: 1,
  },
  underline: {
    borderTopColor: '#353935',
    borderTopWidth: 1,
    width: width,
    alignItems: 'center',
    paddingVertical: 15,
  },
  botIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slideMusic: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center'
  },
});