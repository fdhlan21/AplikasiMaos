// In App.js in a new project
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../../utils/colors/colors';
import { FaBeer } from 'react-icons/fa';
import CheckBox from '@react-native-community/checkbox';
import BouncyCheckboxGroup, {
  ICheckboxButton,
} from "react-native-bouncy-checkbox-group";


function KelompokTaksSatuTujuh({navigation}) {


 const [skor1,jawabannomorSatu] = useState(0);
const [skor2,jawabannomorDua] = useState(0); 
const [skor3,jawabannomorTiga] = useState(0);
const [skor4,jawabannomorEmpat] = useState(0);
const [skor5,jawabannomorLima] = useState(0);
const [skor6,jawabannomorEnam] = useState(0);
const [skor7,jawabannomorTujuh] = useState(0);
const [skor8,jawabannomorDelapan] = useState(0);
const [skor9,jawabannomorSembilan] = useState(0);
const [skor10,jawabannomorSepuluh] = useState(0);
const [skor11,jawabannomorSebelas] = useState(0);
const [skor12,jawabannomorDuabelas] = useState(0);
const [skor13,jawabannomorTigabelas] = useState(0);
const [skor14,jawabannomorEmpatbelas] = useState(0);
const [skor15,jawabannomorLimabelas] = useState(0);
const [skor16,jawabannomorEnambelas] = useState(0);
const [skor17,jawabannomorTujuhbelas] = useState(0);
const [skor18,jawabannomorDelapanbelas] = useState(0);
const [skor19,jawabannomorSembilanbelas] = useState(0);
const [skor20,jawabannomorDuapuluh] = useState(0);


const styles = {
  container: { marginTop: 24 },
  verticalStyle: { marginTop: 16 },
  textStyle: { textDecorationLine: "none", fontFamily:'Alata-Regular', fontSize:12, color:colors.black },
  iconImageStyle: { height: 15, width: 15,  },

  
};
  







  return (
    <View style={{ flex: 1, backgroundColor:colors.white, }}>



<View  style={{backgroundColor:colors.secondary, padding:10,borderBottomLeftRadius:20, borderBottomRightRadius:20, bottom:30 }}>
<View   style={{flexDirection:'row', padding:10, top:25  }} >
    <TouchableOpacity  onPress={()=>navigation.navigate('KelompokTaksSatuEnam')} >
        <Image   style={{width:24, height:24}}  source={require('../../../assets/img/back.png')} />
    </TouchableOpacity>
</View>

  <View style={{padding:10, bottom:10}}>
  <Text style={{ fontSize:25, fontFamily:'Alata-Regular', color:colors.white, textAlign:'center'}} >Final Task/{'\n'}
Activities</Text>
  </View>
</View>

<ScrollView>
<View>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15, textAlign:'center'}}>Questions 1-5 refer to the following text.</Text>
</View>

<View style={{alignItems:'center'}}>
<Image style={{ width:314, height:501, }}  source={require('../../../assets/img/takssatu(21).png')} />
</View>


<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>1. The text is useful for the readers to …….</Text>
</View>

<View style={{padding:10}}>


<View style={{flexDirection:'row', }}>
<TouchableOpacity  onPress={()=>{
      jawabannomorSatu(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede'}} >


</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black}}>A. Find out the benefits of the product</Text>
</View>

<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorSatu(10)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:10}} >

</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:10}}>B. Know the detailed information about the product</Text>
</View>

<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorSatu(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:20}} >
</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:20}}>C. Obtain the nutrition information per spoon serving</Text>
</View>


<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorSatu(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:30}} >

</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:30}}>D. Get detailed information on the nutrition of the product</Text>

</View>


</View>
</View>




<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>2. What ingredients are not contained in the product?</Text>
</View>

<View style={{padding:10}}>





<View style={{flexDirection:'row', }}>
<TouchableOpacity  onPress={()=>{
      jawabannomorDua(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede'}} >


</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black}}>A. Find out the benefits of the product</Text>
</View>

<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorDua(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:10}} >

</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:10}}>B. Know the detailed information about the product</Text>
</View>

<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorDua(10)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:20}} >
</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:20}}>C. Obtain the nutrition information per spoon serving</Text>
</View>


<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorDua(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:30}} >

</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:30}}>D. Get detailed information on the nutrition of the product</Text>
</View>




</View>
</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>3. From the text, we can conclude that the product ……</Text>
</View>

<View style={{padding:10}}>



<View style={{flexDirection:'row', }}>
<TouchableOpacity  onPress={()=>{
      jawabannomorTiga(10)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede'}} >


</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black}}>A. is rich of vitamin C</Text>
</View>

<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorTiga(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:10}} >

</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:10}}>B. contains high cholesterol</Text>
</View>

<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorTiga(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:20}} >
</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:20}}>C. is not good for children</Text>
</View>


<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorTiga(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:30}} >

</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:30}}>D. is excellent on zinc</Text>
</View>





</View>

</View>





<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>4. What should we pay attention to about the product?</Text>
</View>

<View style={{padding:10}}>




<View style={{flexDirection:'row', }}>
<TouchableOpacity  onPress={()=>{
      jawabannomorEmpat(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede'}} >


</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black}}>A. The children cannot consume the product</Text>
</View>

<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorEmpat(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:10}} >

</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:10}}>B. Shake before consuming</Text>
</View>

<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorEmpat(10)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:20}} >
</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:20}}>C. Shake after consuming</Text>
</View>


<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorEmpat(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:30}} >

</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:30}}>D. The product could be added sugar before consuming</Text>
</View>






</View>
</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>5. How many liters of the product above?</Text>
</View>

<View style={{padding:10}}>



<View style={{flexDirection:'row', }}>
<TouchableOpacity  onPress={()=>{
      jawabannomorLima(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede'}} >


</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black}}>A. 2.40 L</Text>
</View>

<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorLima(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:10}} >

</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:10}}>B. 1.40 L</Text>
</View>

<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorLima(10)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:20}} >
</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:20}}>C. 1.89 L</Text>
</View>


<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorLima(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:30}} >

</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:30}}>D. 1.98 L</Text>
</View>





</View>
</View>


<View style={{}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15, textAlign:'center'}}>Questions 6-10 refer to the following text.</Text>
</View>

<View style={{alignItems:'center', }}>
<Image style={{ width:341, height:217, }}  source={require('../../../assets/img/takssatu(22).png')} />
</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>6. What is the text about?</Text>
</View>

<View style={{padding:10}}>





<View style={{flexDirection:'row', }}>
<TouchableOpacity  onPress={()=>{
      jawabannomorEnam(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede'}} >


</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black}}>A. The benefits of the product.</Text>
</View>

<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorEnam(10)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:10}} >

</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:10}}>B. The drug facts of the product</Text>
</View>

<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorEnam(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:20}} >
</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:20}}>C. The nutrition facts of the product</Text>
</View>


<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorEnam(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:30}} >

</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:30}}>D. The ingredients of the product</Text>
</View>




</View>

</View>




<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>7. What is the brand of the product?</Text>
</View>

<View style={{padding:10}}>




<View style={{flexDirection:'row', }}>
<TouchableOpacity  onPress={()=>{
      jawabannomorTujuh(10)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede'}} >


</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black}}>A. Equate</Text>
</View>

<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorTujuh(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:10}} >

</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:10}}>B. Acne Treatment Body Pads</Text>
</View>

<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorTujuh(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:20}} >
</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:20}}>C. 75 Pads</Text>
</View>


<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorTujuh(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:30}} >

</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:30}}>D. Drug facts</Text>
</View>




</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>8. What is the name of the drug?</Text>
</View>

<View style={{padding:10}}>




<View style={{flexDirection:'row', }}>
<TouchableOpacity  onPress={()=>{
      jawabannomorDelapan(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede'}} >


</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black}}>A. Equate</Text>
</View>

<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorDelapan(10)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:10}} >

</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:10}}>B. Acne Treatment Body Pads</Text>
</View>

<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorDelapan(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:20}} >
</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:20}}>C. 75 Pads</Text>
</View>


<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorDelapan(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:30}} >

</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:30}}>D. Drug facts</Text>
</View>




</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>9. What if people have a question about the product?</Text>
</View>

<View style={{padding:10}}>




<View style={{flexDirection:'row', }}>
<TouchableOpacity  onPress={()=>{
      jawabannomorSembilan(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede'}} >


</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black}}>A. Send the email</Text>
</View>

<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorSembilan(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:10}} >

</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:10}}>B. Visit the factory of the product</Text>
</View>

<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorSembilan(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:20}} >
</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:20}}>C. Send the letter to the factory address</Text>
</View>


<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorSembilan(10)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:30}} >

</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:30}}>D. Call the telephone number above</Text>
</View>




</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>10. The product is used for…………</Text>
</View>

<View style={{padding:10}}>







<View style={{flexDirection:'row', }}>
<TouchableOpacity  onPress={()=>{
      jawabannomorSepuluh(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede'}} >


</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black}}>A. dry skin</Text>
</View>

<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorSepuluh(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:10}} >

</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:10}}>B. sensitive skin</Text>
</View>

<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorSepuluh(10)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:20}} >
</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:20}}>C. acne skin</Text>
</View>


<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorSepuluh(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:30}} >

</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:30}}>D. oily skin</Text>
</View>



</View>
</View>




<View style={{}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15, textAlign:'center'}}>Questions 11-15 refer to the following text.</Text>
</View>

<View style={{alignItems:'center', }}>
<Image style={{ width:334, height:568, }}  source={require('../../../assets/img/takssatu(23).png')} />
</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>11. Why does the writer write the label?</Text>
</View>

<View style={{padding:10}}>



<View style={{flexDirection:'row', }}>
<TouchableOpacity  onPress={()=>{
      jawabannomorSebelas(10)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede'}} >


</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black}}>A. To give detailed information about the meadows</Text>
</View>

<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorSebelas(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:10}} >

</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:10}}>B. To show the ingredient of the meadows</Text>
</View>

<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorSebelas(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:20}} >
</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:20}}>C. To tell us how to use the product</Text>
</View>


<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorSebelas(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:30}} >

</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:30}}>D. To inform how to consume the product of the product</Text>
</View>







</View>
</View>




<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>12. Which ingredient is excluded from the meadows?</Text>
</View>

<View style={{padding:10}}>





<View style={{flexDirection:'row', }}>

<TouchableOpacity  onPress={()=>{
      jawabannomorDuabelas(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede'}} >


</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black}}>A. Guar gum</Text>
</View>

<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorDuabelas(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:10}} >

</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:10}}>B. Sugar</Text>
</View>

<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorDuabelas(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:20}} >
</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:20}}>C. Milk</Text>
</View>


<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorDuabelas(10)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:30}} >

</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:30}}>D. Egg</Text>
</View>


</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>13. From the label above, we can assume that the product……</Text>
</View>

<View style={{padding:10}}>




<View style={{flexDirection:'row', }}>

<TouchableOpacity  onPress={()=>{
      jawabannomorTigabelas(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede'}} >


</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black}}>A. contains much cholesterol</Text>
</View>

<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorTigabelas(10)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:10}} >

</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:10}}>B. contains calories</Text>
</View>

<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorTigabelas(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:20}} >
</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:20}}>C. contains the honey</Text>
</View>


<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorTigabelas(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:30}} >

</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:30}}>D. contains oil</Text>
</View>


</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>14. How many are acne treatment body pads contained in the product above?</Text>
</View>

<View style={{padding:10}}>


<View style={{flexDirection:'row', }}>
<TouchableOpacity  onPress={()=>{
      jawabannomorEmpatbelas(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede'}} >


</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black}}>A. 10 pads</Text>
</View>

<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorEmpatbelas(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:10}} >

</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:10}}>B. 6 pads</Text>
</View>

<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorEmpatbelas(10)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:20}} >
</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:20}}>C. 75 pads</Text>
</View>


<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorEmpatbelas(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:30}} >

</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:30}}>D. 2 pads</Text>
</View>


</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>15. What can you tell about the product?</Text>
</View>

<View style={{padding:10}}>


<View style={{flexDirection:'row', }}>
<TouchableOpacity  onPress={()=>{
      jawabannomorLimabelas(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede'}} >


</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black}}>A. It tastes delicious</Text>
</View>

<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorLimabelas(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:10}} >

</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:10}}>B. It contains many artificial flavors</Text>
</View>

<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorLimabelas(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:20}} >
</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:20}}>C. It has no vitamin</Text>
</View>


<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorLimabelas(10)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:30}} >

</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:30}}>D. It contains vitamin</Text>
</View>


</View>
</View>




<View style={{}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15, textAlign:'center'}}>Questions 16-20 refer to the following text.</Text>
</View>

<View style={{alignItems:'center', }}>
<Image style={{ width:336, height:334, }}  source={require('../../../assets/img/takssatu(24).png')} />
</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>16. What is the brand of the product?</Text>
</View>

<View style={{padding:10}}>


<View style={{flexDirection:'row', }}>
<TouchableOpacity  onPress={()=>{
      jawabannomorEnambelas(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede'}} >


</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black}}>A. Hand Sanitizer</Text>
</View>

<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorEnambelas(0)
    }}  style={{width:20, height:20,borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:10}} >

</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:10}}>B. Instant Hand Sanitizer</Text>
</View>

<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorEnambelas(10)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:20}} >
</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:20}}>C. Assured</Text>
</View>


<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorEnambelas(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:30}} >

</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:30}}>D. Kill 99% of germs</Text>
</View>


</View>

</View>




<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>17. What is the name of the product?</Text>
</View>

<View style={{padding:10}}>


<View style={{flexDirection:'row', }}>
<TouchableOpacity  onPress={()=>{
      jawabannomorTujuhbelas(10)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede'}} >


</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black}}>A. Instant Hand Sanitizer</Text>
</View>

<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorTujuhbelas(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:10}} >

</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:10}}>B. Assured</Text>
</View>

<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorTujuhbelas(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:20}} >
</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:20}}>C. Kill 99% of germs</Text>
</View>


<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorTujuhbelas(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:30}} >

</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:30}}>D. Aloe Vera & Moisturizers</Text>
</View>


</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>18. The text is useful for the readers to……</Text>
</View>

<View style={{padding:10}}>


<View style={{flexDirection:'row', }}>
<TouchableOpacity  onPress={()=>{
      jawabannomorDelapanbelas(10)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede'}} >


</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black}}>A. know the detailed information about the product</Text>
</View>

<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorDelapanbelas(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:10}} >

</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:10}}>B. the benefit of the product</Text>
</View>

<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorDelapanbelas(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:20}} >
</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:20}}>C. the ingredients of the product</Text>
</View>


<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorDelapanbelas(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:30}} >

</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:30}}>D. the nutrition facts of the product</Text>
</View>


</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>19. This product is useful for……</Text>
</View>

<View style={{padding:10}}>


<View style={{flexDirection:'row', }}>
<TouchableOpacity  onPress={()=>{
      jawabannomorSembilanbelas(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede'}} >


</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black}}>A. Getting rid of red eyes</Text>
</View>

<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorSembilanbelas(10)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:10}} >

</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:10}}>B. Handwashing to decrease bacteria on the skin</Text>
</View>

<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorSembilanbelas(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:20}} >
</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:20}}>C. Handwashing increases bacteria on the skin</Text>
</View>


<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorSembilanbelas(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:30}} >

</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:30}}>D. Getting rid of the headache</Text>
</View>


</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>20. What should we pay attention to the product?</Text>
</View>

<View style={{padding:10}}>


<View style={{flexDirection:'row', }}>
<TouchableOpacity  onPress={()=>{
      jawabannomorDuapuluh(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede'}} >


</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black}}>A. We may take the product as the safety seal is broken.</Text>
</View>

<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorDuapuluh(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:10}} >

</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:10}}>B. The children should not use this product.</Text>
</View>

<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorDuapuluh(0)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:20}} >
</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:20}}>C. The children may consume the product.</Text>
</View>


<View style={{flexDirection:'row',}}>
<TouchableOpacity onPress={()=>{
      jawabannomorDuapuluh(10)
    }}  style={{width:20, height:20, borderRadius:10, borderWidth:1, borderColor:colors.secondary, backgroundColor:'#dedede', top:30}} >

</TouchableOpacity>
<Text style={{left:10, fontFamily:'Alata-Regular', fontSize:15, color:colors.black, top:30}}>D. This product cannot be used in the eyes.</Text>
</View>


</View>
</View>

<View style={{padding:10}}>
 <Text style={{
      fontSize:20,
      textAlign:'center'
    }}>Total SKOR :  {skor1 + skor2 + skor3 + skor4 + skor5 + skor6 + skor7 + skor8 + skor9 + skor10 + skor11 + skor12 + skor13 + skor14 + skor15 +  skor16 + skor17 + skor18 + skor19 + skor20}</Text>


</View>

<View style={{padding:10, top:20, margin:20 }} >
    <TouchableOpacity  onPress={()=>navigation.navigate('KelompokTaksSatuDelapan')} style={{padding:10, backgroundColor:colors.primary,  borderRadius:10,}} >
        <Text style={{color:colors.white, fontFamily:'Alata-Regular', fontSize:15, textAlign:'center'}}>Next</Text>
    </TouchableOpacity>
</View>

</ScrollView>


<View style={{padding:1, backgroundColor:colors.secondary,}}></View>
<View style={{flexDirection:'row', padding:10, justifyContent:'space-around'}}>
    <TouchableOpacity onPress={()=>navigation.navigate('HalamanHome')}  style={{}}  >
        <Image   style={{width:38, height:33,}} source={require('../../../assets/img/home.png')} />
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>navigation.navigate('HalamanHistory')}  style={{}}  >
        <Image   style={{width:28, height:33,}} source={require('../../../assets/img/history.png')} />
    </TouchableOpacity>

    <TouchableOpacity  onPress={()=>navigation.navigate('HalamanAkun')}  style={{}}  >
        <Image   style={{width:33, height:33,}} source={require('../../../assets/img/profle.png')} />
    </TouchableOpacity>
</View>



    </View>
  );
}


export default KelompokTaksSatuTujuh;