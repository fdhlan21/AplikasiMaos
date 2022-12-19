// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';

function HalamanHome({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor:colors.white }}>

<ScrollView>
<View  style={{padding:10, backgroundColor:colors.primary, paddingVertical:30, borderBottomLeftRadius:30, borderBottomRightRadius:30, }} >

<View style={{flexDirection:'row', padding:10,   paddingLeft:310, bottom:30}}>
<TouchableOpacity   onPress={()=>navigation.navigate('HalamanLogin')}  >
    <Image  style={{width:24, height:24}}  source={require('../../assets/img/exit.png')} />
</TouchableOpacity>
</View>

<View style={{flexDirection:'row', padding:10, bottom:20, left:12 }}>
    <Text style={{color:colors.white, fontFamily:'Alata-Regular', fontSize:20,}}   >Welcome Zakiyatun,</Text>
</View>



<View style={{flexDirection:'row', padding:10, bottom:50, left:10,}}>
    <Text style={{color:colors.white, fontFamily:'Alata-Regular', fontSize:40, }}   >MAOS APPS</Text>
</View>
</View>
    
<View  style={{flexDirection:'row', padding:10, paddingLeft:23, bottom:90  }} >
    <Image style={{width:314, height:159}}   source={require('../../assets/img/potoheader.png')} />
</View>


<View  style={{flexDirection:'row', padding:10, bottom:95,    }} >
<TouchableOpacity onPress={()=>navigation.navigate('HalamanUnitSatu')}  style={{padding:10, backgroundColor:colors.secondary, paddingHorizontal:20, paddingVertical:10,borderRadius:10,}} >
<Image  style={{width:64, height:79, left:20}}  source={require('../../assets/img/unitsatu.png')} />
<Text style={{color:colors.white, fontFamily:'Alata-Regular'}}>The Best Wealth</Text>
<Text style={{color:colors.white, fontFamily:'Alata-Regular', left:20}}>is Health</Text>
</TouchableOpacity>



<TouchableOpacity   onPress={()=>navigation.navigate('HalamanUnitDua')} style={{padding:10, backgroundColor:colors.secondary, paddingHorizontal:8, paddingVertical:10,borderRadius:10, left:50}} >
<Image  style={{width:57, height:79, left:35}}  source={require('../../assets/img/Unitdua.png')} />
<Text style={{color:colors.white, fontFamily:'Alata-Regular', top:10}}>What is The Recipe?</Text>

</TouchableOpacity>
</View>

<View  style={{flexDirection:'row', padding:10,  bottom:95,}} >
    <Text style={{ fontSize:20, fontFamily:'Alata-Regular', color:colors.secondary, left:50,}}   >Unit 1</Text>
    <Text style={{ fontSize:20, fontFamily:'Alata-Regular', color:colors.secondary, left:190}}   >Unit 2</Text>
</View>





<View  style={{flexDirection:'row', padding:10, bottom:95,  }} >
<TouchableOpacity   onPress={()=>navigation.navigate('HalamanUnitTiga')}  style={{padding:10, backgroundColor:colors.secondary, paddingHorizontal:8, paddingVertical:30,borderRadius:10,}} >
<Image  style={{width:92, height:67, left:20, bottom:20}}  source={require('../../assets/img/Unittiga.png')} />
<Text style={{color:colors.white, fontFamily:'Alata-Regular', bottom:0}}>Let’s Read The Story!</Text>

</TouchableOpacity>



<TouchableOpacity  onPress={()=>navigation.navigate('HalamanUnitEmpat')}   style={{padding:10, backgroundColor:colors.secondary, paddingHorizontal:10, paddingVertical:10,borderRadius:10, left:45}} >
<Image  style={{width:69, height:67, left:35}}  source={require('../../assets/img/Unitempat.png')} />
<Text style={{color:colors.white, fontFamily:'Alata-Regular'}}>The More You Read,</Text>
<Text style={{color:colors.white, fontFamily:'Alata-Regular'}}>the More You Know</Text>
</TouchableOpacity>
</View>

<View  style={{flexDirection:'row', padding:10,  bottom:95,}} >
    <Text style={{ fontSize:20, fontFamily:'Alata-Regular', color:colors.secondary, left:50,}}   >Unit 3</Text>
    <Text style={{ fontSize:20, fontFamily:'Alata-Regular', color:colors.secondary, left:190}}   >Unit 4</Text>
</View>






<View  style={{flexDirection:'row', padding:10, bottom:95,   }} >
<TouchableOpacity  onPress={()=>navigation.navigate('HalamanUnitLima')}  style={{padding:10, backgroundColor:colors.secondary, paddingHorizontal:24, paddingVertical:30,borderRadius:10,}} >
<Image  style={{width:67, height:67, left:20}}  source={require('../../assets/img/Unitlima.png')} />
<Text style={{color:colors.white, fontFamily:'Alata-Regular'}}>Buy 1, Get 1 Free</Text>
</TouchableOpacity>



<TouchableOpacity   onPress={()=>navigation.navigate('HalamanStudent')}   style={{padding:10, backgroundColor:colors.secondary, paddingHorizontal:43, paddingVertical:30,borderRadius:10, left:45}} >
<Image  style={{width:59, height:66, left:0}}  source={require('../../assets/img/studentguidens.png')} />


</TouchableOpacity>
</View>

<View  style={{flexDirection:'row', padding:10, bottom:95,}} >
    <Text style={{ fontSize:20, fontFamily:'Alata-Regular', color:colors.secondary, left:50,}}   >Unit 5</Text>

</View>




<View  style={{flexDirection:'row', padding:10, bottom:95,  }} >
<TouchableOpacity    onPress={()=>navigation.navigate('HalamanTeacher')}  style={{padding:10, backgroundColor:colors.secondary, paddingHorizontal:34, paddingVertical:38,borderRadius:10, left:0}} >
<Image  style={{width:78, height:66, left:0}}  source={require('../../assets/img/teacherguidens.png')} />


</TouchableOpacity>
</View>






</ScrollView>

<View style={{padding:1, backgroundColor:colors.secondary,}}></View>
<View style={{flexDirection:'row', padding:10,}}>
    <TouchableOpacity   onPress={()=>navigation.navigate('HalamanHome')}  style={{ paddingLeft:65}}  >
        <Image   style={{width:38, height:33,}} source={require('../../assets/img/home.png')} />
    </TouchableOpacity>

    <TouchableOpacity  onPress={()=>navigation.navigate('HalamanHistory')}  style={{ paddingLeft:55}}  >
        <Image   style={{width:28, height:33,}} source={require('../../assets/img/history.png')} />
    </TouchableOpacity>

    <TouchableOpacity  onPress={()=>navigation.navigate('HalamanAkun')}  style={{ paddingLeft:55}}  >
        <Image   style={{width:33, height:33,}} source={require('../../assets/img/profle.png')} />
    </TouchableOpacity>
</View>

    </View>

  );
}


export default HalamanHome;