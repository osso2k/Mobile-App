import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={styles.profileImage}
        />
        <Text style={styles.username}>@businesspitch</Text>
        <Text style={styles.bio}>Revolutionizing the startup pitch experience</Text>
      </View>

      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>128</Text>
          <Text style={styles.statLabel}>Pitches</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>10.5K</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>892</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>

      <View style={styles.metrics}>
        <View style={styles.metricCard}>
          <Ionicons name="trending-up" size={24} color="#5EFC8D" />
          <Text style={styles.metricLabel}>Total MRR</Text>
          <Text style={styles.metricValue}>$50K</Text>
        </View>
        <View style={styles.metricCard}>
          <Ionicons name="people" size={24} color="#5EFC8D" />
          <Text style={styles.metricLabel}>Investors</Text>
          <Text style={styles.metricValue}>25</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 50,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  username: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bio: {
    color: '#888',
    textAlign: 'center',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#888',
    fontSize: 14,
  },
  metrics: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  metricCard: {
    backgroundColor: '#111',
    padding: 20,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  metricLabel: {
    color: '#888',
    marginTop: 10,
  },
  metricValue: {
    color: '#5EFC8D',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
