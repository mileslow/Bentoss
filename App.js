// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button 
      title="Go to Details"
      onPress={()=> navigation.navigate('Details', {
        param1: "Test",
      })}
      />
    </View>
  );
}

function DetailsScreen({route, navigation}) {

  //thats how u pass stuff on navigation
  const {param1}  = route.params;
 
  return (
    <View style ={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{param1}</Text>
      <Button
      title="go back"
      onPress={()=> navigation.navigate('Home')}
      />
    </View>
  )
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;