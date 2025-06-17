import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import TikTokUI from './components/TikTokUI';
import ProfileScreen from './screens/ProfileScreen';
import PostScreen from './screens/PostScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              backgroundColor: '#000',
              borderTopColor: '#333',
            },
            tabBarActiveTintColor: '#5EFC8D',
            tabBarInactiveTintColor: '#666',
            headerShown: false,
          }}
        >
          <Tab.Screen 
            name="Explore" 
            component={TikTokUI}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="compass" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen 
            name="Post" 
            component={PostScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="add-circle" size={32} color="#5EFC8D" />
              ),
            }}
          />
          <Tab.Screen 
            name="Profile" 
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
        <StatusBar style="light" />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
