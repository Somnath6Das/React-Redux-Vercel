import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AuthScreen from './screens/AuthScreen';
import TodoScreen from './screens/TodoScreen';


export default function App() {
  return (
 <>
 {/* <AuthScreen /> */}
 <TodoScreen />
 </>
  );
}

