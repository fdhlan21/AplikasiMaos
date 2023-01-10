// In App.js in a new project
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../../utils/colors/colors';
import { FaBeer } from 'react-icons/fa';
import CheckBox from '@react-native-community/checkbox';
import BouncyCheckbox from "react-native-bouncy-checkbox";

function KelompokTaksLimaTujuh({navigation}) {

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
  <Text style={{fontFamily:'Alata-Regular', fontSize:15, textAlign:'center'}}>Questions 1-4 refer to the following text.</Text>
</View>

<View style={{alignItems:'center'}}>
<Image style={{ width:308, height:422, }}  source={require('../../../assets/img/unitlima/unitlima(4).png')} />
</View>


<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>1. The text is intended to …</Text>
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
        text="A. advertise the website of the Oxford School of English"
/>

<BouncyCheckbox
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. promote English courses at Oxford School of English*"
/>

<BouncyCheckbox
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. inform about the kinds of classes the Oxford School of English"
/>

<BouncyCheckbox
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. announce the opening of the classes at the Oxford School of English"
/>
</View>

</View>




<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>2. What should a would-be student do to get the 25% discount?</Text>
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
        text="A. Register himself not later than 24 February 2020.*"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. Call the Oxford School of English on 24 February 2020."
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. Email the Oxford School of English on 24 February 2020."
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. Come to the Oxford School of English on 24 February 2020."
/>
</View>

</View>





<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>3. "By experienced trainers," The underlined word means...</Text>
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
        text="A. Well-known"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. Qualified*"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. Famous"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. Patient"
/>
</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>4. From the text, we can conclude that the Oxford School of English provides ...</Text>
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
        text="A. Exclusive audio-video sessions*"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. LCD (Liquid Crystal Display)"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. Computer"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. Telephone"
/>
</View>

</View>

<View>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15, textAlign:'center'}}>Questions 5-9 refer to the following text.</Text>
</View>


<View style={{alignItems:'center'}}>
<Image style={{ width:328, height:383, }}  source={require('../../../assets/img/unitlima/unitlima(5).png')} />
</View>


<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>5. We know from the text that Neko Pet is …….</Text>
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
        text="A. Veterinary hospital"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. Café"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. Supermarket"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. Clinic for pets*"
/>
</View>
</View>


<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>6. What is the treatment offered if your pets have sore?</Text>
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
        text="A. Bathing"
/>

<BouncyCheckbox style={{top:5}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. Trimming"
/>

<BouncyCheckbox style={{top:10}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. A vet consultation*"
/>
 
<BouncyCheckbox style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. Food and vitamins"
/>
</View>

</View>




<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>7. What is the intention of the writer in composing the text?</Text>
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
        text="A. To invite pet lovers."
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. To sell services for pets.*"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. To inform about a pet hotel."
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. To describe the grooming package."
/>
</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>8. The word “trimming” in the text is closest in meaning to …</Text>
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
        text="A. Removing"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. Cutting*"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. Balancing"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. Moving"
/>
</View>

</View>



<View>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15, textAlign:'center'}}>Questions 10-13 refer to the following text.</Text>
</View>


<View style={{alignItems:'center'}}>
<Image style={{ width:328, height:328, }}  source={require('../../../assets/img/unitlima/unitlima(6).png')} />
</View>





<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>10. What is the text about?</Text>
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
        text="A. An advertisement for an opening of a store.*"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. An announcement of a store bankruptcy."
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. An advertisement about a big sale."
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. A notice for a clothing line."
/>
</View>
</View>


<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>11. What products does the shop sell?</Text>
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
        text="A. Cheaper than the normal price."
/>

<BouncyCheckbox style={{top:5}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. The same as the normal price."
/>

<BouncyCheckbox style={{top:10}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. Higher than the normal price."
/>
 
<BouncyCheckbox style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. At a big discounted price.*"
/>
</View>

</View>




<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>12. How long does the program run?</Text>
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
        text="A. A week"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. A month"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. Fortnight"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. Twenty days*"
/>
</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>13. What is the purpose of the advertisement?</Text>
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
        text="A. To tell people how big the items sold are discounted."
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. To persuade people to come to the closing ceremony."
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. To persuade people to come during the opening month.*"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. To inform people of the name of the new clothing line in the town."
/>
</View>

</View>


<View>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15, textAlign:'center'}}>Questions 14-16 refer to the following text.</Text>
</View>


<View style={{alignItems:'center', }}>
<Image style={{ width:296, height:378, }}  source={require('../../../assets/img/unitlima/unitlima(7).png')} />
</View>






<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>14. The main ingredient of the snack is...</Text>
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
        text="A. Flour"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. Wheat"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. Flavors"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. Potatoes*"
/>
</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>15. "No artificial flavors or preservatives."
The underlined word has a similar meaning to ...</Text>
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
        text="A. Chemical"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. Materials"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. Additives"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. Taste*"
/>
</View>
</View>

<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>16. The snack comes in many…….</Text>
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
        text="A. Colors"
/>

<BouncyCheckbox style={{top:5}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. Shapes"
/>

<BouncyCheckbox style={{top:10}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. Flavors"
/>
 
<BouncyCheckbox style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. Packages with various sizes*"
/>
</View>

</View>


<View>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15, textAlign:'center'}}>Questions 17-20 refer to the following text.</Text>
</View>


<View style={{alignItems:'center', }}>
<Image style={{ width:322, height:376, }}  source={require('../../../assets/img/unitlima/unitlima(8).png')} />
</View>


<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>17. What is the writer’s intention in writing the text?</Text>
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
        text="A. To persuade people to buy at soccer store*"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. To tell how to build a soccer stores"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. To give information about the product"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. To inform the customers about the products"
/>
</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>18. What can people probably find in the store?</Text>
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
        text="A. Guitars"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. Balls*"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. Refrigerators"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. Book"
/>
</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>19. From the text, we can conclude that the store…….</Text>
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
        text="A. opens every day*"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. is located at its old address"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. sells products at high prices"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. is closed on Sunday afternoons"
/>
</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>20. “Affordable”
What is the closest meaning of “affordable”?</Text>
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
        text="A. Low-cost*"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. Luxurious"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. Up to date"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. Glamorous"
/>
</View>
</View>


<View style={{padding:10, top:20, margin:20 }} >
    <TouchableOpacity  onPress={()=>navigation.navigate('KelompokTaksLimaDelapan')} style={{padding:10, backgroundColor:colors.primary,  borderRadius:10,}} >
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


export default KelompokTaksLimaTujuh;