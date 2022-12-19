// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';

function HalamanStudent({navigation}) {


  return (
    <View style={{ flex: 1, backgroundColor:colors.white, }}>

<View  style={{flexDirection:'row', backgroundColor:colors.secondary, padding:10,paddingVertical:10, borderBottomLeftRadius:20, borderBottomRightRadius:20, }}>
<View   style={{flexDirection:'row', padding:10,  }} >
    <TouchableOpacity>
        <Image   style={{width:24, height:24}}  source={require('../../assets/img/back.png')} />
    </TouchableOpacity>
</View>

  <View style={{flexDirection:'row', padding:10,  paddingLeft:20}}>
  <Text style={{ fontSize:25, fontFamily:'Alata-Regular', color:colors.white}} >Student’s Guidance</Text>
  </View>
</View>
<ScrollView>
 
<View   style={{ flexDirection:'row', padding:10,  paddingLeft:40, bottom:5}}>
    <Image style={{width:278, height:305}}     source={require('../../assets/img/potostudent.png')} />
</View>





<View style={{flexDirection:'row', padding:10, paddingLeft:80, top:205, paddingBottom:250}} >
    <TouchableOpacity    onPress={()=>navigation.navigate('HalamanReception')}   style={{padding:10, backgroundColor:colors.primary, paddingHorizontal:80, borderRadius:10,}} >
        <Text style={{color:colors.white, fontFamily:'Alata-Regular', fontSize:15}}>Start</Text>
    </TouchableOpacity>
</View>

</ScrollView>


<View style={{padding:1, backgroundColor:colors.secondary,}}></View>
<View style={{flexDirection:'row', padding:10,}}>
    <TouchableOpacity   onPress={()=>navigation.navigate('HalamanHome')}  style={{ paddingLeft:65}}  >
        <Image   style={{width:38, height:33,}} source={require('../../assets/img/home.png')} />
    </TouchableOpacity>

    <TouchableOpacity   onPress={()=>navigation.navigate('HalamanHistory')}  style={{ paddingLeft:55}}  >
        <Image   style={{width:28, height:33,}} source={require('../../assets/img/history.png')} />
    </TouchableOpacity>

    <TouchableOpacity  onPress={()=>navigation.navigate('HalamanAkun')}  style={{ paddingLeft:55}}  >
        <Image   style={{width:33, height:33,}} source={require('../../assets/img/profle.png')} />
    </TouchableOpacity>
</View>



    </View>
  );
}


export default HalamanStudent;