// In App.js in a new project
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../../utils/colors/colors';
import { FaBeer } from 'react-icons/fa';
import CheckBox from '@react-native-community/checkbox';
import BouncyCheckbox from "react-native-bouncy-checkbox";

function KelompokTaksDuaTujuh({navigation}) {

  const [checkboxState, setCheckboxState] = React.useState(false);
  return (
    <View style={{ flex: 1, backgroundColor:colors.white, }}>



<View  style={{backgroundColor:colors.secondary, padding:10,borderBottomLeftRadius:20, borderBottomRightRadius:20, bottom:30 }}>
<View   style={{flexDirection:'row', padding:10, top:25  }} >
    <TouchableOpacity  onPress={()=>navigation.navigate('KelompokTaksDuaEnam')} >
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
<Image style={{ width:333, height:579, }}  source={require('../../../assets/img/unitdua/unitdua(pempek).png')} />
</View>


<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>1. What is the purpose of the text?</Text>
</View>

<View style={{padding:10}}>
<BouncyCheckbox
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="A. Describing pempek Palembang"
/>

<BouncyCheckbox style={{}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. Entertaining the reader with pempek Palembang"
/>

<BouncyCheckbox
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. Persuading the reader to cook pempek Palembang"
/>

<BouncyCheckbox
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. Telling the reader how to cook pempek Palembang*"
/>
</View>

</View>




<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>2. To cook pempek Palembang, you need …</Text>
</View>

<View style={{padding:10}}>
<BouncyCheckbox style={{}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="A. Gingere"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. Turmeric"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. Clove garlic*"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. Onion"
/>
</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>3. “Boil the water using a saucepan, and cook the pempek ... ”
The best adverb to complete the instruction is ...</Text>
</View>

<View style={{padding:10}}>
<BouncyCheckbox style={{}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="A. for 15 minutes*"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. when finish"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. when serving"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. over the whole oven"
/>
</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>4. The following instruction is to be found in the procedure above ...</Text>
</View>

<View style={{padding:10}}>
<BouncyCheckbox style={{}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="A. Stir the dough slowly"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. Deep fry the cooked pempek*"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. Add a spoonful of sugar to the dough"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. Add 3 tablespoons of salt"
/>
</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>5. Who will be more interested in trying the recipe?</Text>
</View>

<View style={{padding:10}}>
<BouncyCheckbox style={{}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="A. Vegans"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. Meat lovers"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. Seafood lovers*"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. Fast food lovers"
/>
</View>
</View>


<View style={{}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15, textAlign:'center'}}>Questions 5-10 refer to the following text.</Text>
</View>

<View style={{alignItems:'center', }}>
<Image style={{ width:325, height:225, }}  source={require('../../../assets/img/unitdua/unitdua(handnatizer).png')} />
</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>6. The text is useful for the readers to …</Text>
</View>

<View style={{padding:10}}>
<BouncyCheckbox
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="A. be informed how to wash our hands using soap"
/>

<BouncyCheckbox style={{top:5}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. know how to clean hands using hand sanitizer*"
/>

<BouncyCheckbox style={{top:10}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. how to produce a hand sanitizer"
/>
 
<BouncyCheckbox style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. be informed on how to clean the thumbs"
/>
</View>

</View>




<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>7. What should we do after we clean the fingernails using hand sanitizer based on the procedure above?</Text>
</View>

<View style={{padding:10}}>
<BouncyCheckbox style={{}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="A. We should clean the thumbs*"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. We should rub until dry"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. We should clean our wrists"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. We should disinfect the hands"
/>
</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>8. What is the first step of cleaning hands using hand sanitizer?</Text>
</View>

<View style={{padding:10}}>
<BouncyCheckbox style={{}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="A. Rubbing until dry"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. Cleaning the wrists"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. Cleaning the back of hands"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. Cleaning palm to palm*"
/>
</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>9. What is the last stage of the procedure above?</Text>
</View>

<View style={{padding:10}}>
<BouncyCheckbox style={{}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="A. Cleaning palm to palm"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. Disinfecting hands*"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. Cleaning the wrists"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. Rubbing until dry"
/>
</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>10. The following is included in the procedure above, except …</Text>
</View>

<View style={{padding:10}}>
<BouncyCheckbox style={{}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="A. Cleaning palm to palm"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. Rubbing until dryn"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. Cleaning the hair*"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. Cleaning the wrists"
/>
</View>
</View>




<View style={{}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15, textAlign:'center'}}>Questions 11-15 refer to the following text.</Text>
</View>

<View style={{alignItems:'center', }}>
<Image style={{ width:340, height:574, }}  source={require('../../../assets/img/unitdua/unitdua(baksosapi).png')} />
</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>11. The text above is called …</Text>
</View>

<View style={{padding:10}}>
<BouncyCheckbox
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="A. Descriptive text"
/>

<BouncyCheckbox style={{top:5}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. Narrative text"
/>

<BouncyCheckbox style={{top:10}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. Report text"
/>
 
<BouncyCheckbox style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. Procedure text*"
/>
</View>

</View>




<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>12. The goal of the text above is to tell about…</Text>
</View>

<View style={{padding:10}}>
<BouncyCheckbox style={{}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="A. How to cook Indonesian meatball soup*"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. How to bake a cake"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. How to make cheesecake"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. How to cook the soup"
/>
</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>13. The following are the ingredients, except …</Text>
</View>

<View style={{padding:10}}>
<BouncyCheckbox style={{}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="A. Clove garlic"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. Cheese*"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. Beef"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. Oil"
/>
</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>14. How much white peppercorns do we need to cook meatball soup?</Text>
</View>

<View style={{padding:10}}>
<BouncyCheckbox style={{}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="A. 1 tablespoon*"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. 2 tablespoons"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. 3 tablespoons"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. 4 tablespoons"
/>
</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>15. Which of the following procedures is not true?</Text>
</View>

<View style={{padding:10}}>
<BouncyCheckbox style={{}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="A. Wash the beef thoroughly."
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. Crush the garlic."
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. Put two spoonfuls of vanilla.*"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. Add salt and the beef cube/MSG."
/>
</View>
</View>




<View style={{}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15, textAlign:'center'}}>Questions 16-20 refer to the following text.</Text>
</View>

<View style={{alignItems:'center', }}>
<Image style={{ width:341, height:653, }}  source={require('../../../assets/img/unitdua/unitdua(salbalterasi).png')} />
</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>16. According to the text, what should we do to the dried shrimp?</Text>
</View>

<View style={{padding:10}}>
<BouncyCheckbox
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="A. Wash them"
/>

<BouncyCheckbox style={{top:5}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. Remove the seeds"
/>

<BouncyCheckbox style={{top:10}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. Cut them into pieces"
/>
 
<BouncyCheckbox style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. Cook them*"
/>
</View>

</View>




<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>17. After reading the text, the readers will be able to make ………….</Text>
</View>

<View style={{padding:10}}>
<BouncyCheckbox style={{}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="A. Indonesian Chili sauce with shrimp paste*"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. Indonesian shrimp paste"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. Food"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. Dessert"
/>
</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>18. What is the last step of the procedure above?</Text>
</View>

<View style={{padding:10}}>
<BouncyCheckbox style={{}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="A. Frying the chili"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. Stir in the lime juice*"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. Boil the water"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. Cook the dried shrimp paste"
/>
</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>19. Which of the following procedures is true?</Text>
</View>

<View style={{padding:10}}>
<BouncyCheckbox style={{}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="A. Put slices of lemon in the glass."
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. Wash the shrimp paste."
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. Add the cooked shrimp paste to a pestle.*"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. Boil the shrimp paste"
/>
</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>20. The following are the ingredients, except …</Text>
</View>

<View style={{padding:10}}>
<BouncyCheckbox style={{}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="A. Egg*"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. Garlic"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. Chili"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. Oil"
/>
</View>
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


export default KelompokTaksDuaTujuh;