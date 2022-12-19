// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';

function HalamanLogin({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor:colors.primary }}>

<View  style={{flexDirection:'row', padding:12, paddingLeft:90, marginTop:40,}} >
  <Image    style={{width:170, height:288, }} source={require('../../assets/img/logomaos.png')} />
</View>
 
 <TextInput  style={{margin:10, backgroundColor:colors.white, borderRadius:10, paddingLeft:10, borderWidth:1, borderColor:colors.secondary, fontFamily:'Alata-Regular', color:colors.black}} placeholder='Email' placeholderTextColor='gray'  />
 <TextInput  style={{margin:10, backgroundColor:colors.white, borderRadius:10, paddingLeft:10, borderWidth:1, borderColor:colors.secondary, fontFamily:'Alata-Regular' , color:colors.black}} placeholder='Password' placeholderTextColor='gray'  secureTextEntry={true} />
    
    <View  style={{flexDirection:'row', padding:10,  paddingLeft:31}} >
<TouchableOpacity    onPress={()=>navigation.navigate('HalamanHome')}   style={{padding:10, backgroundColor:colors.secondary, borderRadius:10, paddingHorizontal:130}} >
    <Text  style={{color:colors.white, fontFamily:'Alata-Regular', }}    >Login</Text>
</TouchableOpacity>

    </View>
    
    <View  style={{flexDirection:'row', padding:10, paddingLeft:23}} >
<TouchableOpacity    onPress={()=>navigation.navigate('HalamanRegister')}   style={{padding:10, borderRadius:10, paddingHorizontal:130}} >
    <Text  style={{color:colors.white, fontFamily:'Alata-Regular', }}    >Register</Text>
</TouchableOpacity>

    </View>
    
    
    </View>

  );
}


export default HalamanLogin;