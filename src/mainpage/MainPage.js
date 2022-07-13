import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import S from '../styles/mainPageStyle';

export default function MainPage({navigation}) {
  return (
    <View style={S.mainContainer}>
      <View style={S.logoContainer}></View>
      <View style={[S.mainButtonContainer, {flexDirection: 'row'}]}>
        <View style={{flex: 1, backgroundColor: '#efefef'}}></View>

        <TouchableOpacity
          style={[S.mainButton, {flex: 8}]}
          onPress={() => {
            navigation.navigate('ServerChooser');
          }}>
          <Text style={S.mainButtonText}>Begin Charge</Text>
        </TouchableOpacity>
        <View style={{flex: 1, backgroundColor: '#efefef'}}></View>
      </View>
      <View style={S.otherButtonsContainer}></View>
    </View>
  );
}
