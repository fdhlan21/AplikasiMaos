// In App.js in a new project

import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';

function HalamanSplash({navigation}) {
  
   
  setTimeout(()=>{
    navigation.navigate('HalamanLogin');
  },1500)

  return (
    <View style={{ flex: 1, backgroundColor:colors.primary }}>

<View  style={{padding:10,alignItems:'center', top:150}} >
  <Image    style={{width:234, height:431, }} source={require('../../assets/img/logomaos.png')} />
</View>
 
    </View>
  );
}


export default HalamanSplash;