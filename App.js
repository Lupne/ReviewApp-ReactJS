import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/home'
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Drawer from './routes/drawer'

const getFonts = () => {
  return Font.loadAsync({
    'Monsterrat-Black': require('./assets/fonts/Montserrat-Black.ttf'),
    'Monsterrat-ExtraBold': require('./assets/fonts/Montserrat-ExtraBold.ttf'),
  })
}

export default function App() {
  const [fontsLoaded,setfontsLoaded] = useState(false);
  
  if(fontsLoaded)
  {
  return (
      <Drawer/>
  );
  }
  else{
    return(
    <AppLoading startAsync={getFonts}
    onFinish={()=>setfontsLoaded(true)}/>
    );
  }
}

