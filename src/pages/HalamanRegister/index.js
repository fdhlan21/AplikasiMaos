
import React, { useState, Component,  } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';
import Modal from "react-native-modal";


function HalamanRegister({navigation}) {

const [modal,setModal] = useState(false)
const [email, password, name] = useState(false)


  return (
    <View style={{ flex: 1, backgroundColor:colors.primary }}>



<Modal style={{alignItems:'center'}}  isVisible={modal}    >
<View  style={{ backgroundColor:colors.white, borderRadius:20, padding:10, width:300, height:200}}>
<View style={{flexDirection:'row', justifyContent:'flex-end', padding:10}} >
<TouchableOpacity  style={{}}    onPress={()=>navigation.navigate('HalamanLogin')} ><Image   style={{width:15, height:15,}} source={require('../../assets/img/x.png')} /></TouchableOpacity>
</View>
<View style={{alignItems:'center', bottom:20}}>
    <Image   style={{width:128, height:128,}}  source={require('../../assets/img/ceklis.png')} />
    <Text style={{color:colors.secondary, fontFamily:'Alata-Regular', fontSize:20, textAlign:'center'}} >Register Successful!</Text>
    </View>
</View>
</Modal>



<ScrollView>

<View  style={{flexDirection:'row', padding:10, marginTop:110}} >

</View>

 
 <TextInput  style={{margin:10, backgroundColor:colors.white, borderRadius:10, paddingLeft:10, borderWidth:1, borderColor:colors.secondary, fontFamily:'Alata-Regular', color:colors.black}} placeholder='Name' placeholderTextColor='gray'   />
 <TextInput  style={{margin:10, backgroundColor:colors.white, borderRadius:10, paddingLeft:10, borderWidth:1, borderColor:colors.secondary, fontFamily:'Alata-Regular', color:colors.black}} placeholder='Email' placeholderTextColor='gray'  />
 <TextInput  style={{margin:10, backgroundColor:colors.white, borderRadius:10, paddingLeft:10, borderWidth:1, borderColor:colors.secondary, fontFamily:'Alata-Regular', color:colors.black}} placeholder='Password' placeholderTextColor='gray'  secureTextEntry={true} />
    


    <View  style={{padding:10, alignItems:'center'  }} >
<TouchableOpacity   onPress={() => setModal(true)}   style={{padding:10, backgroundColor:colors.secondary, borderRadius:10, paddingHorizontal:125, borderWidth:1, borderColor:colors.white}} >
    <Text  style={{color:colors.white, fontFamily:'Alata-Regular', textAlign:'center' }} >Register</Text>
</TouchableOpacity>
    </View>
    

    </ScrollView>
    
    </View>

  );
}


export default HalamanRegister;