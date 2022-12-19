// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';

function HalamanHistory({navigation}) {


  return (
    <View style={{ flex: 1, backgroundColor:colors.white, }}>

<View  style={{flexDirection:'row', backgroundColor:colors.secondary, padding:10,paddingVertical:10, borderBottomLeftRadius:20, borderBottomRightRadius:20, }}>
<View   style={{flexDirection:'row', padding:10,  }} >
    <TouchableOpacity    onPress={()=>navigation.navigate('HalamanHome')}>
        <Image   style={{width:24, height:24}}  source={require('../../assets/img/back.png')} />
    </TouchableOpacity>
</View>

  <View style={{flexDirection:'row', padding:10,  paddingLeft:80,}}>
  <Text style={{ fontSize:25, fontFamily:'Alata-Regular', color:colors.white}} >History</Text>
  </View>




</View>
<ScrollView>

<View style={{flexDirection:'row', padding:10, paddingLeft:30}} >
<TouchableOpacity style={{padding:10, backgroundColor:'#F5F5F5', paddingHorizontal:48, borderRadius:10, borderWidth:1, borderColor:colors.secondary,}} >
<Text style={{color:'#B0B0B0', marginLeft:0, fontFamily:'Alata-Regular', fontSize:15, right:40}} >Monday, 21st November 2022</Text>
<Text style={{marginLeft:0, fontFamily:'Alata-Regular', fontSize:15, right:40}} >Unit 1</Text>
</TouchableOpacity>
</View>


<View style={{flexDirection:'row', padding:10, paddingLeft:30}} >
<TouchableOpacity style={{padding:10, backgroundColor:'#F5F5F5', paddingHorizontal:48, borderRadius:10,  borderWidth:1, borderColor:colors.secondary, }} >
<Text style={{color:'#B0B0B0', marginLeft:0, fontFamily:'Alata-Regular', fontSize:15, right:40}} >Monday, 21st November 2022</Text>
<Text style={{marginLeft:0, fontFamily:'Alata-Regular', fontSize:15, right:40}} >Unit 1</Text>
</TouchableOpacity>
</View>

<View style={{flexDirection:'row', padding:10,  paddingLeft:30}} >
<TouchableOpacity style={{padding:10, backgroundColor:'#F5F5F5', paddingHorizontal:48, borderRadius:10,   borderWidth:1, borderColor:colors.secondary,}} >
<Text style={{color:'#B0B0B0', marginLeft:0, fontFamily:'Alata-Regular', fontSize:15, right:40}} >Monday, 21st November 2022</Text>
<Text style={{marginLeft:0, fontFamily:'Alata-Regular', fontSize:15, right:40}} >Unit 1</Text>
</TouchableOpacity>
</View>

<View style={{flexDirection:'row', padding:10, paddingLeft:30}} >
<TouchableOpacity style={{padding:10, backgroundColor:'#F5F5F5', paddingHorizontal:48, borderRadius:10,  borderWidth:1, borderColor:colors.secondary,}} >
<Text style={{color:'#B0B0B0', marginLeft:0, fontFamily:'Alata-Regular', fontSize:15, right:40}} >Monday, 21st November 2022</Text>
<Text style={{marginLeft:0, fontFamily:'Alata-Regular', fontSize:15, right:40}} >Unit 1</Text>
</TouchableOpacity>
</View>

<View style={{flexDirection:'row', padding:10, paddingLeft:30}} >
<TouchableOpacity style={{padding:10, backgroundColor:'#F5F5F5', paddingHorizontal:48, borderRadius:10, borderWidth:1, borderColor:colors.secondary, }} >
<Text style={{color:'#B0B0B0', marginLeft:0, fontFamily:'Alata-Regular', fontSize:15, right:40}} >Monday, 21st November 2022</Text>
<Text style={{marginLeft:0, fontFamily:'Alata-Regular', fontSize:15, right:40}} >Unit 1</Text>
</TouchableOpacity>
</View>

<View style={{flexDirection:'row', padding:10,paddingLeft:30}} >
<TouchableOpacity style={{padding:10, backgroundColor:'#F5F5F5', paddingHorizontal:48, borderRadius:10,  borderWidth:1, borderColor:colors.secondary,}} >
<Text style={{color:'#B0B0B0', marginLeft:0, fontFamily:'Alata-Regular', fontSize:15, right:40}} >Monday, 21st November 2022</Text>
<Text style={{marginLeft:0, fontFamily:'Alata-Regular', fontSize:15, right:40}} >Unit 1</Text>
</TouchableOpacity>
</View>

<View style={{flexDirection:'row', padding:10,  paddingLeft:30}} >
<TouchableOpacity style={{padding:10, backgroundColor:'#F5F5F5', paddingHorizontal:48, borderRadius:10,  borderWidth:1, borderColor:colors.secondary,}} >
<Text style={{color:'#B0B0B0', marginLeft:0, fontFamily:'Alata-Regular', fontSize:15, right:40}} >Monday, 21st November 2022</Text>
<Text style={{marginLeft:0, fontFamily:'Alata-Regular', fontSize:15, right:40}} >Unit 1</Text>
</TouchableOpacity>
</View>

</ScrollView>


<View style={{padding:1, backgroundColor:colors.secondary,}}></View>
<View style={{flexDirection:'row', padding:10,}}>
    <TouchableOpacity  onPress={()=>navigation.navigate('HalamanHome')}  style={{ paddingLeft:65}}  >
        <Image   style={{width:38, height:33,}} source={require('../../assets/img/home.png')} />
    </TouchableOpacity>

    <TouchableOpacity  onPress={()=>navigation.navigate('HalamanHistory')}  style={{ paddingLeft:55}}  >
        <Image   style={{width:28, height:33,}} source={require('../../assets/img/history.png')} />
    </TouchableOpacity>

    <TouchableOpacity  onPress={()=>navigation.navigate('HalamanAkun')}   style={{ paddingLeft:55}}  >
        <Image   style={{width:33, height:33,}} source={require('../../assets/img/profle.png')} />
    </TouchableOpacity>
</View>



    </View>
  );
}


export default HalamanHistory;