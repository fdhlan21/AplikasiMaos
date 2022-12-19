// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';

function HalamanStrategy({navigation}) {


  return (
    <View style={{ flex: 1, backgroundColor:colors.white, }}>

<View  style={{flexDirection:'row', backgroundColor:colors.secondary, padding:10,paddingVertical:10, borderBottomLeftRadius:20, borderBottomRightRadius:20, }}>
<View   style={{flexDirection:'row', padding:10, top:5 }} >
    <TouchableOpacity   onPress={()=>navigation.navigate('HalamanContent')} >
        <Image   style={{width:24, height:24}}  source={require('../../assets/img/back.png')} />
    </TouchableOpacity>
</View>

  <View style={{flexDirection:'row', padding:10,  paddingLeft:20}}>
  <Text style={{ fontSize:25, fontFamily:'Alata-Regular', color:colors.white}} >Guidance Strategy</Text>
  </View>
</View>
<ScrollView>
 
 <View   style={{flexDirection:'row', padding:10, }}>
    <Text   style={{fontSize:15, fontFamily:'Alata-Regular'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices arcu eu ligula dapibus, in ornare purus aliquet. Suspendisse lobortis eget mauris nec condimentum. Ut tincidunt fringilla eros, at auctor odio sagittis id. Sed in odio quis elit scelerisque vehicula. Praesent et scelerisque justo. Aliquam egestas nisi ac diam hendrerit accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices arcu eu ligula dapibus, in ornare purus aliquet. Suspendisse lobortis eget mauris nec condimentum. Ut tincidunt fringilla eros, at auctor odio sagittis id. Sed in odio quis elit scelerisque vehicula. Praesent et scelerisque justo. Aliquam egestas nisi ac diam hendrerit accumsan.
</Text>
 </View>

  
 <View   style={{flexDirection:'row', padding:10,}}>
    <Text   style={{fontSize:15, fontFamily:'Alata-Regular'}} >
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices arcu eu ligula dapibus, in ornare purus aliquet. Suspendisse lobortis eget mauris nec condimentum. Ut tincidunt fringilla eros, at auctor odio sagittis id. Sed in odio quis elit scelerisque vehicula. Praesent et scelerisque justo. Aliquam egestas nisi ac diam hendrerit accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices arcu eu ligula dapibus, in ornare purus aliquet. Suspendisse lobortis eget mauris nec condimentum. Ut tincidunt fringilla eros, at auctor odio sagittis id. Sed in odio quis elit scelerisque vehicula. Praesent et scelerisque justo. Aliquam egestas nisi ac diam hendrerit accumsan.
</Text>
 </View>

<View style={{flexDirection:'row', padding:10, paddingLeft:80, top:5 }} >
    <TouchableOpacity  onPress={()=>navigation.navigate('HalamanTaks1')} style={{padding:10, backgroundColor:colors.primary, paddingHorizontal:80, borderRadius:10,}} >
        <Text style={{color:colors.white, fontFamily:'Alata-Regular', fontSize:15}}>Next</Text>
    </TouchableOpacity>
</View>

</ScrollView>


<View style={{padding:1, backgroundColor:colors.secondary,}}></View>
<View style={{flexDirection:'row', padding:10,}}>
    <TouchableOpacity onPress={()=>navigation.navigate('HalamanHome')}  style={{ paddingLeft:65}}  >
        <Image   style={{width:38, height:33,}} source={require('../../assets/img/home.png')} />
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>navigation.navigate('HalamanHistory')}  style={{ paddingLeft:55}}  >
        <Image   style={{width:28, height:33,}} source={require('../../assets/img/history.png')} />
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>navigation.navigate('HalamanAkun')}  style={{ paddingLeft:55}}  >
        <Image   style={{width:33, height:33,}} source={require('../../assets/img/profle.png')} />
    </TouchableOpacity>
</View>



    </View>
  );
}


export default HalamanStrategy;