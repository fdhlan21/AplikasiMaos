// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';

function HalamanRegister({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor:colors.primary }}>

<ScrollView>

<View  style={{flexDirection:'row', padding:10, marginTop:110}} >

</View>

 
 <TextInput  style={{margin:10, backgroundColor:colors.white, borderRadius:10, paddingLeft:10, borderWidth:1, borderColor:colors.secondary, fontFamily:'Alata-Regular', color:colors.black}} placeholder='Name' placeholderTextColor='gray'  />
 <TextInput  style={{margin:10, backgroundColor:colors.white, borderRadius:10, paddingLeft:10, borderWidth:1, borderColor:colors.secondary, fontFamily:'Alata-Regular', color:colors.black}} placeholder='Email' placeholderTextColor='gray'  />
 <TextInput  style={{margin:10, backgroundColor:colors.white, borderRadius:10, paddingLeft:10, borderWidth:1, borderColor:colors.secondary, fontFamily:'Alata-Regular', color:colors.black}} placeholder='Password' placeholderTextColor='gray'  secureTextEntry={true} />
    


    <View  style={{padding:10, alignItems:'center'  }} >
<TouchableOpacity onPress={()=>navigation.navigate('HalamanLogin')}     style={{padding:10, backgroundColor:colors.secondary, borderRadius:10, paddingHorizontal:125}} >
    <Text  style={{color:colors.white, fontFamily:'Alata-Regular', textAlign:'center' }} >Register</Text>
</TouchableOpacity>
    </View>
    

    </ScrollView>
    
    </View>

  );
}


export default HalamanRegister;