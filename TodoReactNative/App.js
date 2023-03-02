import { StatusBar } from 'expo-status-bar';
import React,{ useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthScreen from './screens/AuthScreen';
import TodoScreen from './screens/TodoScreen';
import { configureStore } from '@reduxjs/toolkit';
import authReducer,{ addToken } from './redux-state/authReducer';
import todoReducer from './redux-state/todoReducer';
import { Provider, useSelector, useDispatch} from 'react-redux';
import store from './redux-state/ReduxStore';


function App() {
  const token = useSelector(state => state.user.token);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(addToken())
  },[]);

  return (
    <>
      {token ? <TodoScreen /> : <AuthScreen />}
    </>
  );
}

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}