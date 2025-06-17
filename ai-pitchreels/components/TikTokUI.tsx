import React, { useRef, useState } from 'react';
import { StyleSheet, View, Dimensions, FlatList, Text, TouchableOpacity } from 'react-native';
import { ResizeMode, Video } from 'expo-av';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, { useSharedValue } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { height } = Dimensions.get('window');

interface PitchVideo {
  id: string;
  uri: string;
  username: string;
  description: string;
  metrics: {
    mrr: string;
    growth: string;
  };
}

const TikTokUI = () => {
  const [videos] = useState<PitchVideo[]>([
    { 
      id: '1', 
      uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
      username: '@businesspitch',
      description: 'Revolutionizing the boat rental industry! $20K MRR 🚤',
      metrics: {
        mrr: '$20K',
        growth: '45%'
      }
    },
  ]);

  const videoRef = useRef(null);
  const currentIndex = useRef(0);
  const isPlaying = useSharedValue(true);

  const doubleTapHandler = () => {
    isPlaying.value = !isPlaying.value;
  };

  const handleConnect = () => {
    console.log('Connect pressed');
  };

  const renderItem = ({ item, index }: { item: PitchVideo; index: number }) => (
    <View style={styles.videoContainer}>
      <Video
        ref={index === currentIndex.current ? videoRef : null}
        source={{ uri: item.uri }}
        style={styles.video}
        resizeMode={ResizeMode.COVER}
        shouldPlay={isPlaying.value}
        isLooping
        useNativeControls={false}
      />
      
      <LinearGradient
        colors={['rgba(0,0,0,0.5)', 'transparent', 'rgba(0,0,0,0.5)']}
        style={styles.gradient}
      />
      
      <View style={styles.uiContainer}>
        {/* Left side - Business info */}
        <View style={styles.leftColumn}>
          <Text style={styles.username}>{item.username}</Text>
          <Text style={styles.description}>{item.description}</Text>
          
          {/* Business Metrics */}
          <View style={styles.metricsRow}>
            <View style={styles.metricBadge}>
              <Text style={styles.metricValue}>{item.metrics.mrr}</Text>
              <Text style={styles.metricLabel}>MRR</Text>
            </View>
            <View style={styles.metricBadge}>
              <Text style={styles.metricValue}>{item.metrics.growth}</Text>
              <Text style={styles.metricLabel}>MoM Growth</Text>
            </View>
          </View>
        </View>
        
        {/* Right side - Action buttons */}
        <View style={styles.rightColumn}>
          <View style={styles.actionButton}>
            <Ionicons name="heart" size={32} color="white" />
            <Text style={styles.actionText}>24K</Text>
          </View>
          <View style={styles.actionButton}>
            <Ionicons name="chatbubble-ellipses" size={28} color="white" />
            <Text style={styles.actionText}>312</Text>
          </View>
          <View style={styles.actionButton}>
            <Ionicons name="bookmark" size={28} color="white" />
            <Text style={styles.actionText}>Save</Text>
          </View>
          <View style={styles.actionButton}>
            <Ionicons name="share-social" size={28} color="white" />
            <Text style={styles.actionText}>Share</Text>
          </View>
          <TouchableOpacity style={styles.actionButton} onPress={handleConnect}>
            <Ionicons name="link" size={28} color="#5EFC8D" />
            <Text style={[styles.actionText, {color: '#5EFC8D'}]}>Connect</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(doubleTapHandler);

  return (
    <View style={styles.container}>
      <GestureDetector gesture={doubleTap}>
        <Animated.View style={styles.container}>
          <FlatList
            data={videos}
            renderItem={renderItem}
            pagingEnabled
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            onScroll={e => {
              const index = Math.round(e.nativeEvent.contentOffset.y / height);
              if (index !== currentIndex.current) {
                isPlaying.value = true;
                currentIndex.current = index;
              }
            }}
            maxToRenderPerBatch={1}
            windowSize={3}
            initialNumToRender={1}
          />
        </Animated.View>
      </GestureDetector>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  videoContainer: {
    height: height,
    position: 'relative',
  },
  video: {
    flex: 1,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  uiContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    padding: 16,
    paddingBottom: 48,
  },
  leftColumn: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  rightColumn: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 10,
  },
  username: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  description: {
    color: 'white',
    fontSize: 14,
    marginBottom: 8,
  },
  actionButton: {
    marginBottom: 20,
    alignItems: 'center',
  },
  actionText: {
    color: 'white',
    fontSize: 12,
    marginTop: 4,
  },
  metricsRow: {
    flexDirection: 'row',
    marginTop: 10,
  },
  metricBadge: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 8,
    padding: 6,
    marginRight: 8,
  },
  metricValue: {
    color: '#5EFC8D',
    fontWeight: 'bold',
    fontSize: 14,
  },
  metricLabel: {
    color: 'white',
    fontSize: 10,
  },
});

export default TikTokUI;
