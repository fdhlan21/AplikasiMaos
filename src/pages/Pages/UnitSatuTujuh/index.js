// In App.js in a new project
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../../utils/colors/colors';
import { FaBeer } from 'react-icons/fa';
import CheckBox from '@react-native-community/checkbox';
import BouncyCheckbox from "react-native-bouncy-checkbox";

function KelompokTaksSatuTujuh({navigation}) {

  const [checkboxState, setCheckboxState] = React.useState(false);
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
<BouncyCheckbox
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="A. Find out the benefits of the product"
/>

<BouncyCheckbox
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. Know the detailed information about the product*"
/>

<BouncyCheckbox
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. Obtain the nutrition information per spoon serving"
/>

<BouncyCheckbox
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. Get detailed information on the nutrition of the product"
/>
</View>

</View>




<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>2. What ingredients are not contained in the product?</Text>
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
        text="A. Freshly squeezed lemon juice"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. Organic cane sugar"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. Milk*"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. Filtered water"
/>
</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>3. From the text, we can conclude that the product …….</Text>
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
        text="A. is rich of vitamin C*"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. contains high cholesterol"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. is not good for children"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. is excellent on zinc"
/>
</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>4. What should we pay attention to about the product?</Text>
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
        text="A. The children cannot consume the product"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. Shake before consuming*"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. Shake after consuming"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. The product could be added sugar before consuming"
/>
</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>5. How many liters of the product above?</Text>
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
        text="A. 2.40 L"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. 1.40 L"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. 1.89 L"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. 1.98 L"
/>
</View>
</View>


<View style={{}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15, textAlign:'center'}}>Questions 5-10 refer to the following text.</Text>
</View>

<View style={{alignItems:'center', }}>
<Image style={{ width:341, height:217, }}  source={require('../../../assets/img/takssatu(22).png')} />
</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>6. What is the text about?</Text>
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
        text="A. The benefits of the product."
/>

<BouncyCheckbox style={{top:5}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. The drug facts of the product*"
/>

<BouncyCheckbox style={{top:10}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. The nutrition facts of the product"
/>
 
<BouncyCheckbox style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. The ingredients of the product"
/>
</View>

</View>




<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>7. What is the brand of the product?</Text>
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
        text="A. Equate*"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. Acne Treatment Body Pads"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. 75 Pads"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. Drug facts"
/>
</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>8. What is the name of the drug?</Text>
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
        text="A. Equate"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. Acne Treatment Body Pads*"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. 75 Pads"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. Drug facts"
/>
</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>9. What if people have a question about the product?</Text>
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
        text="A. Send the email"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. Visit the factory of the product"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. Send the letter to the factory address"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. Call the telephone number above"
/>
</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>10. The product is used for…………</Text>
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
        text="A. dry skin"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. sensitive skin"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. acne skin"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. oily skin"
/>
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
<BouncyCheckbox
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="A. To give detailed information about the meadows*"
/>

<BouncyCheckbox style={{top:5}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. To show the ingredient of the meadows"
/>

<BouncyCheckbox style={{top:10}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. To tell us how to use the product"
/>
 
<BouncyCheckbox style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. To inform how to consume the product of the product"
/>
</View>

</View>




<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>12. Which ingredient is excluded from the meadows?</Text>
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
        text="A. Guar gum"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. Sugar"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. Milk"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. Egg*"
/>
</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>13. From the label above, we can assume that the product……</Text>
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
        text="A. contains much cholesterol"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. contains calories*"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. contains the honey"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. contains oil"
/>
</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>14. How many are acne treatment body pads contained in the product above?</Text>
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
        text="A. 10 pads"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. 6 pads"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. 75 pads*"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. 2 pads"
/>
</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>15. What can you tell about the product?</Text>
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
        text="A. It tastes delicious"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. It contains many artificial flavors"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. It has no vitamin"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. It contains vitamin"
/>
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
<BouncyCheckbox
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="A. Hand Sanitizer"
/>

<BouncyCheckbox style={{top:5}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. Instant Hand Sanitizer"
/>

<BouncyCheckbox style={{top:10}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. Assured*"
/>
 
<BouncyCheckbox style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. Kill 99% of germs"
/>
</View>

</View>




<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>17. What is the name of the product?</Text>
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
        text="A. Instant Hand Sanitizer*"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. Assured"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. Kill 99% of germs"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. Aloe Vera & Moisturizers"
/>
</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>18. The text is useful for the readers to……</Text>
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
        text="A. know the detailed information about the product*"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. the benefit of the product"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. the ingredients of the product"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. the nutrition facts of the product"
/>
</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>19. This product is useful for……</Text>
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
        text="A. Getting rid of red eyes"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. Handwashing to decrease bacteria on the skin*"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. Handwashing increases bacteria on the skin"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. Getting rid of the headache"
/>
</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>20. What should we pay attention to the product?</Text>
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
        text="A. We may take the product as the safety seal is broken."
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. The children should not use this product."
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. The children may consume the product"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. This product cannot be used in the eyes."
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


export default KelompokTaksSatuTujuh;