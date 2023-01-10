// In App.js in a new project
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../../utils/colors/colors';
import { FaBeer } from 'react-icons/fa';
import CheckBox from '@react-native-community/checkbox';
import BouncyCheckbox from "react-native-bouncy-checkbox";

function KelompokTaksEmpatTujuh({navigation}) {

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
  <Text style={{fontFamily:'Alata-Regular', fontSize:15, textAlign:'center'}}>Questions 1-2 refer to the following text.</Text>
</View>

<View style={{alignItems:'center'}}>
<Image style={{ width:316, height:355, }}  source={require('../../../assets/img/unitempat/unitempat(4).png')} />
</View>


<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>1. At this stage, they are either exported in this form or … (Par. 2)
The underlined words refer to …</Text>
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
        text="A. Logs"
/>

<BouncyCheckbox
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. processed pulp"
/>

<BouncyCheckbox
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. raw wood chips"
/>

<BouncyCheckbox
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. clean wood chips*"
/>
</View>

</View>




<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>2. The woodchips are then screened to remove dirt and other impurities. (Par. 2) In other words, they are …</Text>
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
        text="A. Repaired"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. cleaned*"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. moved"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. removed"
/>
</View>

</View>


<View>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15, textAlign:'center'}}>Questions 3-10 refer to the following text.</Text>
</View>


<View style={{padding:10}}>

<Text  style={{fontFamily:'Alata-Regular', fontSize:15, textAlign:'left'}}>       It has long been known that when exposed to light under suitable conditions of temperature and moisture, the green parts of plants use carbon dioxide from the atmosphere and release oxygen to it. These exchanges are the opposite of those that occur in respiration. The process is called photosynthesis. In photosynthesis, carbohydrates are synthesized from carbon dioxide and water by the chloroplasts of plant cells in the presence of light. In most plants, the water used in photosynthesis is absorbed from the soil by the roots and trans-located through the xylem of the root and stem to the leaves. Except for the usually small percentage used in respiration, the oxygen released in the process diffuses out of the leaf into the atmosphere through the stomata. Oxygen is the product of the reaction. For each molecule of carbon dioxide used, one molecule of oxygen is released. A summary chemical equation for photosynthesis is:{'\n'}
{'\n'}
6CO2+6H2O→C6H12O6+6O2{'\n'}
{'\n'}
       As a result of this process, radiant energy from the sun is stored as chemical energy. In turn the chemical energy is used to decompose carbon dioxide and water. The products of their decomposition are recombined into a new compound, which is successively built up into more and more complex substances. After many intermediate steps, sugar is produced. At the same time, a balance of gases is preserved in the atmosphere.


</Text>
</View>


<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>3. Which title best expresses the ideas in this passage?</Text>
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
        text="A. A chemical Equation"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. The exchange of Respiration"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. The Process of Photosynthesis*"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. The Parts of vascular Plants"
/>
</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>4. In photosynthesis, water …</Text>
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
        text="A. must be present*"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. is produced in carbohydrates"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. is stored in chemical energy"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. is diffused out of the leaf"
/>
</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>5. Combining carbon dioxide and water to form sugar results in an excess of …</Text>
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
        text="A. water"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. oxygen*"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. chlorophyll"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. carbon"
/>
</View>
</View>


<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>6. The word “stored” in Par. 2 is closest in meaning to …</Text>
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
        text="A. retained*"
/>

<BouncyCheckbox style={{top:5}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. converted"
/>

<BouncyCheckbox style={{top:10}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. discovered"
/>
 
<BouncyCheckbox style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. specified"
/>
</View>

</View>




<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>7. In photosynthesis, energy from the sun is…</Text>
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
        text="A. Synthesized"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. changed to chemical energy*"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. not necessary to the process"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. conducted from the xylem to the leaves of green plants"
/>
</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>8. The word “successively” in Par. 2 is closest in meaning to …</Text>
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
        text="A. Carefully"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. Exceptionally"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. with effort"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. in a sequence*"
/>
</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>9. Besides manufacturing food for plants, what is another benefit of photosynthesis?</Text>
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
        text="A. It absorbs the water."
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. It diffuses additional carbon dioxide into the air."
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. It removes harmful gases from the air."
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. It maintains the balance of gases in the atmosphere.*"
/>
</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>10. Which of the following is NOT true of the oxygen used in photosynthesis?</Text>
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
        text="A. It is absorbed by the roots*"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. It is the product of photosynthesis"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. It is used in respiration"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. It is released into the atmosphere through the leaves"
/>
</View>
</View>




<View style={{}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15, textAlign:'center'}}>Questions 11-13 refer to the following text.</Text>
</View>

<View style={{alignItems:'center', }}>
<Image style={{ width:316, height:523, }}  source={require('../../../assets/img/unitempat/unitempat(6).png')} />
</View>






<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>11. The main idea of the second paragraph is … </Text>
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
        text="A. The final form of gelatin is white and odorless"
/>

<BouncyCheckbox style={{top:5}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. Gelatin can only be produced in distilled water"
/>

<BouncyCheckbox style={{top:10}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. Producing gelatin is not simple work*"
/>
 
<BouncyCheckbox style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. Producing gelatin needs a lot of fresh water"
/>
</View>

</View>




<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>12. From the text, we know that ….</Text>
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
        text="A. Gelatin can only be used in the photographic industry"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. It is necessary to add the mineral to the gelatin"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. Fat aids in the process of making gelatin"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. Gelatin is good food because of its high protein*"
/>
</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>13. “….but it is also beneficial to the consumer …” (par.1). The underlined word means ….</Text>
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
        text="A. Dangerous"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. Unfaithful"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. Additive"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. Useful*"
/>
</View>

</View>


<View>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15, textAlign:'center'}}>Questions 14-17 refer to the following text.</Text>
</View>


<View style={{alignItems:'center', }}>
<Image style={{ width:316, height:454, }}  source={require('../../../assets/img/unitempat/unitempat(7).png')} />
</View>






<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>14. When you eat a piece of meat or an apple, the use of your front teeth is for ... them.</Text>
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
        text="A. Tasting"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. tearing*"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. grinding"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. chewing"
/>
</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>15. What substance makes the food in the mouth moist?</Text>
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
        text="A. the milk"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. the starch"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. the water"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. the saliva*"
/>
</View>
</View>

<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>16. The tongue carries the moist food to ...</Text>
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
        text="A. the stomach"
/>

<BouncyCheckbox style={{top:5}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. the back of the mouth*"
/>

<BouncyCheckbox style={{top:10}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. the small intestines"
/>
 
<BouncyCheckbox style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. the esophagus"
/>
</View>

</View>




<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>17. Although a person does a headstand, the food that he eats ...</Text>
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
        text="A. stays in his mouth"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. pushes from his stomach to his mouth"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. still moves from his mouth to his stomach*"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. Jack and the man"
/>
</View>

</View>




<View>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15, textAlign:'center'}}>Questions 18-20 refer to the following text.</Text>
</View>


<View style={{alignItems:'center', }}>
<Image style={{ width:316, height:497, }}  source={require('../../../assets/img/unitempat/unitempat(8).png')} />
</View>






<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>18. A plane stays up in the air because...</Text>
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
        text="A. the streamlined shape of the plane lets the airflow"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. the air under the wing moves slowly"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. there is a pressure under its wings*"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. it moves forward in the sky"
/>
</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>19. The plane will ... the earth very fast if the engine fails to run.</Text>
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
        text="A. fall down"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. jump off"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. decrease"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. drop on*"
/>
</View>

</View>



<View style={{padding:20}}>
<View style={{padding:10}}>
  <Text style={{fontFamily:'Alata-Regular', fontSize:15}}>20. The plane moves forward using.….</Text>
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
        text="A. Engines*"
/>

<BouncyCheckbox style={{top:5}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="B. Wing"
/>

<BouncyCheckbox style={{top:10}}
  size={25} 
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="C. Thrust"
/>

<BouncyCheckbox  style={{top:15}}
  size={25}
  fillColor="gray"
  unfillColor="#FFFFFF"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "Alata-Regular" , fontSize:15, textDecorationLine:"none" }}
        onPress={() => setCheckboxState(!checkboxState)}
        text="D. Air"
/>
</View>
</View>


<View style={{padding:10, top:20, margin:20 }} >
    <TouchableOpacity  onPress={()=>navigation.navigate('KelompokTaksEmpatDelapan')} style={{padding:10, backgroundColor:colors.primary,  borderRadius:10,}} >
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


export default KelompokTaksEmpatTujuh;