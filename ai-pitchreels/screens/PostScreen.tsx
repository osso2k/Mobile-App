import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PostScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Create Pitch</Text>
      </View>

      <View style={styles.uploadSection}>
        <TouchableOpacity style={styles.uploadButton}>
          <Ionicons name="cloud-upload" size={40} color="#5EFC8D" />
          <Text style={styles.uploadText}>Upload Video</Text>
          <Text style={styles.uploadSubtext}>MP4, 15-60 seconds</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.guidelines}>
        <Text style={styles.guidelinesTitle}>Pitch Guidelines</Text>
        <View style={styles.guidelineItem}>
          <Ionicons name="checkmark-circle" size={24} color="#5EFC8D" />
          <Text style={styles.guidelineText}>Clear value proposition</Text>
        </View>
        <View style={styles.guidelineItem}>
          <Ionicons name="checkmark-circle" size={24} color="#5EFC8D" />
          <Text style={styles.guidelineText}>Include key metrics</Text>
        </View>
        <View style={styles.guidelineItem}>
          <Ionicons name="checkmark-circle" size={24} color="#5EFC8D" />
          <Text style={styles.guidelineText}>Professional presentation</Text>
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
    marginTop: 50,
    marginBottom: 30,
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  uploadSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadButton: {
    width: '100%',
    height: 200,
    backgroundColor: '#111',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#333',
    borderStyle: 'dashed',
  },
  uploadText: {
    color: '#5EFC8D',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
  },
  uploadSubtext: {
    color: '#666',
    marginTop: 5,
  },
  guidelines: {
    marginTop: 40,
    padding: 20,
    backgroundColor: '#111',
    borderRadius: 15,
  },
  guidelinesTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  guidelineItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  guidelineText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 16,
  },
});
