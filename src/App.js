// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HalamanSplash from './pages/HalamanSplash';
import HalamanLogin from './pages/HalamanLogin';
import HalamanRegister from './pages/HalamanRegister';
import HalamanHome from './pages/HalamanHome';
import HalamanUnitSatu from './pages/HalamanUnitSatu';
import HalamanUnitDua from './pages/HalamanUnitDua';
import HalamanUnitTiga from './pages/HalamanUnitTiga';
import HalamanUnitEmpat from './pages/HalamanUnitEmpat';
import HalamanUnitLima from './pages/HalamanUnitLima';
import HalamanStudent from './pages/HalamanStudent';
import HalamanTeacher from './pages/HalamanTeacher';
import HalamanReception from './pages/HalamanReception';
import HalamanContent from './pages/HalamanContent';
import HalamanStrategy from './pages/HalamanStrategy';
import HalamanTaks1 from './pages/HalamanTaksSatu';
import HalamanResultTaks1 from './pages/HalamanResultTaksSatu';
import HalamanTaks2 from './pages/HalamanTaksDua';
import HalamanResultTaks2 from './pages/HalamanResultTaksDua';
import HalamanTaks3 from './pages/HalamanTaksTiga';
import HalamanResultTaks3 from './pages/HalamanResultTaksTiga';
import HalamanTaks4 from './pages/HalamanTaksEmpat';
import HalamanResultTaks4 from './pages/HalamanResultTaksEmpat';
import HalamanFinalTaks from './pages/HalamanFinalTaks';
import HalamanReflection from './pages/HalamanReflection';
import HalamanAkun from './pages/HalamanAkun';
import HalamanHistory from './pages/HalamanHistory';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HalamanSplash'>
        <Stack.Screen name="HalamanSplash" component={HalamanSplash} options={{headerShown:false}}  />
        <Stack.Screen name="HalamanLogin" component={HalamanLogin} options={{headerShown:false}}  />
        <Stack.Screen name="HalamanRegister" component={HalamanRegister} options={{headerShown:false}}  />
        <Stack.Screen name="HalamanHome" component={HalamanHome} options={{headerShown:false}}  />
        <Stack.Screen name="HalamanUnitSatu" component={HalamanUnitSatu} options={{headerShown:false}}  />
        <Stack.Screen name="HalamanUnitDua" component={HalamanUnitDua} options={{headerShown:false}}  />
        <Stack.Screen name="HalamanUnitTiga" component={HalamanUnitTiga} options={{headerShown:false}}  />
        <Stack.Screen name="HalamanUnitEmpat" component={HalamanUnitEmpat} options={{headerShown:false}}  />
        <Stack.Screen name="HalamanUnitLima" component={HalamanUnitLima} options={{headerShown:false}}  />
        <Stack.Screen name="HalamanStudent" component={HalamanStudent} options={{headerShown:false}}  />
        <Stack.Screen name="HalamanTeacher" component={HalamanTeacher} options={{headerShown:false}}  />
        <Stack.Screen name="HalamanReception" component={HalamanReception} options={{headerShown:false}}  />
        <Stack.Screen name="HalamanContent" component={HalamanContent} options={{headerShown:false}}  />
        <Stack.Screen name="HalamanStrategy" component={HalamanStrategy} options={{headerShown:false}}  />
        <Stack.Screen name="HalamanTaks1" component={HalamanTaks1} options={{headerShown:false}}  />
        <Stack.Screen name="HalamanResultTaks1" component={HalamanResultTaks1} options={{headerShown:false}}  />
        <Stack.Screen name="HalamanTaks2" component={HalamanTaks2} options={{headerShown:false}}  />
        <Stack.Screen name="HalamanResultTaks2" component={HalamanResultTaks2} options={{headerShown:false}}  />
        <Stack.Screen name="HalamanTaks3" component={HalamanTaks3} options={{headerShown:false}}  />
        <Stack.Screen name="HalamanResultTaks3" component={HalamanResultTaks3} options={{headerShown:false}}  />
        <Stack.Screen name="HalamanTaks4" component={HalamanTaks4} options={{headerShown:false}}  />
        <Stack.Screen name="HalamanResultTaks4" component={HalamanResultTaks4} options={{headerShown:false}}  />
        <Stack.Screen name="HalamanFinalTaks" component={HalamanFinalTaks} options={{headerShown:false}}  />
        <Stack.Screen name="HalamanReflection" component={HalamanReflection} options={{headerShown:false}}  />
        <Stack.Screen name="HalamanAkun" component={HalamanAkun} options={{headerShown:false}}  />
        <Stack.Screen name="HalamanHistory" component={HalamanHistory} options={{headerShown:false}}  />






      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;