// In App.js in a new project

import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';
import Modal from "react-native-modal";



function HalamanAkun({navigation}) {

    const [modal,setModal] = useState(false)

  return (
    <View style={{ flex: 1, backgroundColor:colors.white, }}>

<Modal  isVisible={modal}    >
<View  style={{ backgroundColor:colors.white, paddingVertical:50, borderRadius:20,}}>
<TouchableOpacity  style={{ left:290, bottom:40}}   onPress={() => setModal(false)}   ><Image   style={{width:15, height:15,}} source={require('../../assets/img/x.png')} /></TouchableOpacity>
    <Image   style={{width:128, height:128, left:100}}  source={require('../../assets/img/ceklis.png')} />
    <Text style={{color:colors.secondary, fontFamily:'Alata-Regular', fontSize:20, left:80, top:20,}} >Berhasil Disimpan</Text>
</View>
</Modal>
    


<View  style={{backgroundColor:colors.secondary, padding:10,borderBottomLeftRadius:20, borderBottomRightRadius:20, bottom:30 }}>
<View   style={{flexDirection:'row', padding:10, top:25  }} >
    <TouchableOpacity   onPress={()=>navigation.navigate('HalamanHome')}>
        <Image   style={{width:24, height:24}}  source={require('../../assets/img/back.png')} />
    </TouchableOpacity>
</View>

  <View style={{padding:10, bottom:10}}>
  <Text style={{ fontSize:25, fontFamily:'Alata-Regular', color:colors.white, textAlign:'center'}} >Account</Text>
  </View>
</View>
<ScrollView>
 

<View  style={{padding:10, alignItems:'center', justifyContent:'center'}} >
<TouchableOpacity   style={{}}  >
    <Image    style={{width:153, height:152,}}  source={require('../../assets/img/profileakun.png')}  />
   </TouchableOpacity>
</View>

<View  style={{padding:10,}}>
<Text style={{color:colors.secondary, fontFamily:'Alata-Regular', fontSize:15}}>Nama</Text>
</View>
<TextInput  style={{margin:10, backgroundColor:colors.white, borderWidth:1, borderColor:colors.secondary, borderRadius:10, color:colors.black, fontFamily:'Alata-Regular', paddingLeft:10, }}  placeholder='Zakiyatun' placeholderTextColor='gray' /> 


<View  style={{padding:10,}}>
<Text style={{color:colors.secondary, fontFamily:'Alata-Regular', fontSize:15}}>Username</Text>
</View>
<TextInput  style={{margin:10, backgroundColor:colors.white, borderWidth:1, borderColor:colors.secondary, borderRadius:10, color:colors.black, fontFamily:'Alata-Regular', paddingLeft:10, }}  placeholder='Zakiyatun123' placeholderTextColor='gray' /> 



<View  style={{padding:10,}}>
<Text style={{color:colors.secondary, fontFamily:'Alata-Regular', fontSize:15}}>E-mail</Text>
</View>
<TextInput  style={{margin:10, backgroundColor:colors.white, borderWidth:1, borderColor:colors.secondary, borderRadius:10, color:colors.black, fontFamily:'Alata-Regular', paddingLeft:10, }}  placeholder='zakiyatun123@gmail.com' placeholderTextColor='gray' /> 


<View  style={{padding:10,}}>
<Text style={{color:colors.secondary, fontFamily:'Alata-Regular', fontSize:15}}>Phone Number</Text>
</View>
<TextInput  style={{margin:10, backgroundColor:colors.white, borderWidth:1, borderColor:colors.secondary, borderRadius:10, color:colors.black, fontFamily:'Alata-Regular', paddingLeft:10, }}  placeholder='0812xxxxxxxxxxx' placeholderTextColor='gray' /> 


<View  style={{padding:10,}}>
<Text style={{color:colors.secondary, fontFamily:'Alata-Regular', fontSize:15}}>Class</Text>
</View>
<TextInput  style={{margin:10, backgroundColor:colors.white, borderWidth:1, borderColor:colors.secondary, borderRadius:10, color:colors.black, fontFamily:'Alata-Regular', paddingLeft:10, }}  placeholder='VII - A' placeholderTextColor='gray'  /> 


<View  style={{padding:10,}}>
<Text style={{color:colors.secondary, fontFamily:'Alata-Regular', fontSize:15}}>Adress</Text>
</View>
<TextInput  style={{margin:10, backgroundColor:colors.white, borderWidth:1, borderColor:colors.secondary, borderRadius:10, color:colors.black, fontFamily:'Alata-Regular', paddingLeft:10, }}  placeholder='Jl. DI Panjaitan No.128, Puwokerto' placeholderTextColor='gray'/> 



<View  style={{padding:10,}}>
<Text style={{color:colors.secondary, fontFamily:'Alata-Regular', fontSize:15}}>Password</Text>
</View>
<TextInput  style={{margin:10, backgroundColor:colors.white, borderWidth:1, borderColor:colors.secondary, borderRadius:10, color:colors.black, fontFamily:'Alata-Regular', paddingLeft:10, }}  placeholder='****' placeholderTextColor='gray'  secureTextEntry={true}/> 




<View style={{padding:10,top:5, margin:20}} >
    <TouchableOpacity  onPress={() => setModal(true)}   style={{padding:10, backgroundColor:colors.primary, borderRadius:10,}} >
        <Text style={{color:colors.white, fontFamily:'Alata-Regular', fontSize:15, textAlign:'center'}}>Simpan</Text>
    </TouchableOpacity>
</View>




</ScrollView>


<View style={{padding:1, backgroundColor:colors.secondary,}}></View>
<View style={{flexDirection:'row', padding:10, justifyContent:'space-around'}}>
    <TouchableOpacity   onPress={()=>navigation.navigate('HalamanHome')}  style={{}}  >
        <Image   style={{width:38, height:33,}} source={require('../../assets/img/home.png')} />
    </TouchableOpacity>

    <TouchableOpacity  onPress={()=>navigation.navigate('HalamanHistory')}  style={{}}  >
        <Image   style={{width:28, height:33,}} source={require('../../assets/img/history.png')} />
    </TouchableOpacity>

    <TouchableOpacity  onPress={()=>navigation.navigate('HalamanAkun')}    style={{}}  >
        <Image   style={{width:33, height:33,}} source={require('../../assets/img/profle.png')} />
    </TouchableOpacity>
</View>



    </View>
  );
}


export default HalamanAkun;