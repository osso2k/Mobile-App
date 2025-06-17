import firebase from '@react-native-firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDp2FVysoR1kI7RxJtXaXoIipcfaAaHBAA",
  authDomain: "ai-pitchreels.firebaseapp.com",
  projectId: "ai-pitchreels",
  storageBucket: "ai-pitchreels.firebasestorage.app",
  messagingSenderId: "633402715080",
  appId: "1:633402715080:web:425f893694e7cf2c682efd",
  measurementId: "G-NXFHMD9Q9Z"
};

let app;
// Initialize Firebase if it hasn't been initialized yet
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

export default app;
