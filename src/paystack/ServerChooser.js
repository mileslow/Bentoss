import React from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import S from '../styles/serverChooserStyle';

const listData = [
  {
    name: 'Miles Low',
  },
  {
    name: 'Robert Harrison',
  },
  {
    name: 'Amy Diaz',
  },
];

export default function ServerChooser({navigation}) {
  const listItem = ({item}) => {
    const name = item.name;
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ChargeAmount', {
            name,
          });
        }}
        style={[S.listItemBlock, S.backgroundWhite]}>
        <Text style={S.listItemText}>{name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[S.mainContainer, {flexDirection: 'column'}]}>
      <View style={{flex: 2}} />
      <View style={[S.listContainer, {flex: 8, flexDirection: 'row'}]}>
        <View style={{flex: 1}} />
        <View style={{flex: 6}}>
          <FlatList
            renderItem={listItem}
            data={listData}
            keyExtractor={(item, index) => index}
            ItemSeparatorComponent={() => {
              return <View style={S.itemSeperator} />;
            }}
          />
        </View>
        <View style={{flex: 1}}></View>
      </View>
    </View>
  );
}
