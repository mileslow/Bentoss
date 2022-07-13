import React from 'react';
import {TouchableOpacity, View, Text, FlatList, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import S from '../styles/chargeAmountStyle';

//data for the 1 through 9 keypad flatlist
const keyPadFlatList = [
  {
    row: [{num: 1}, {num: 2}, {num: 3}],
  },
  {
    row: [{num: 4}, {num: 5}, {num: 6}],
  },
  {
    row: [{num: 7}, {num: 8}, {num: 9}],
  },
];

export default function ChargeAmount({navigation}) {
  const [amount, setAmount] = React.useState('');

  function showTooHighAlert() {
    Alert.alert(
      'Warning',
      "Sorry for safety reasons you can't go above a thousand",
    );
  }

  function continuePress() {
    if (amount == '') {
      Alert.alert('Warning', "You can't charge the customer $0");
    } else {
      let alertMsg =
        'Are you sure you want to charge the user ' +
        formatAmount(amount) +
        '?';
      Alert.alert('Please confirm', alertMsg, [
        {
          text: 'Yes',
          style: 'cancel',
          onPress: () => navigation.navigate('AwaitScan'),
        },
        {
          text: 'No',
          style: 'cancel',
        },
      ]);
    }
  }

  function updateAmount(keyInput) {
    if (keyInput == 'del') {
      setAmount(amount.substring(0, amount.length - 1));
    } else if (amount.length == 5) {
      showTooHighAlert();
    } else {
      if (!(keyInput == '0' && amount == '')) {
        setAmount(amount + keyInput);
      }
    }
  }

  function formatAmount(amount) {
    let formattedAmount = '';
    for (let i = amount.length; i < 3; i++) {
      formattedAmount += '0';
    }
    formattedAmount += amount;
    let decimalIndex = formattedAmount.length - 2;
    formattedAmount =
      '$' +
      formattedAmount.substring(0, decimalIndex) +
      '.' +
      formattedAmount.substring(decimalIndex);
    return formattedAmount;
  }

  const keyInPad = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          updateAmount(item.num);
        }}
        style={S.keyPadTextContainer}>
        <Text style={[S.keyPadText, S.zeroThroughNineText]}>{item.num}</Text>
      </TouchableOpacity>
    );
  };

  //each list item is a single key
  const keyPadRow = ({item}) => {
    return (
      <FlatList
        data={item.row}
        renderItem={keyInPad}
        keyExtractor={item => item.num}
        horizontal={true}
      />
    );
  };

  /*
   * This function is the full keypad it uses
   * the data from the keyPadFlatlist, each list
   * item is a a row of keys, the 0 does the same
   * thing as each key, and the delete has seperate
   * functionality
   */

  const KeyPadFull = () => {
    return (
      <View style={S.keypadContainer}>
        <View style={{flex: 40}}>
          <FlatList
            data={keyPadFlatList}
            renderItem={keyPadRow}
            keyExtractor={(item, index) => index}
          />
        </View>

        <View style={{flexDirection: 'row', flex: 13}}>
          <View style={{flex: 1}}>
            <Text> </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              updateAmount('0');
            }}
            style={{flex: 1, alignItems: 'center'}}>
            <Text style={S.keyPadText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              updateAmount('del');
            }}
            style={{flex: 1, alignItems: 'baseline'}}>
            <View style={S.delIconContainer}>
              <Icon name="delete" size={55} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
      }}>
      <View style={{flex: 1}} />
      <View style={S.textContainer}>
        <Text style={S.chargeText}>Enter Amount to charge</Text>
      </View>
      <View style={S.flex1}>
        <Text style={S.amountText}>{formatAmount(amount)}</Text>
      </View>
      <KeyPadFull />
      <View style={S.confirmContainer}>
        <View style={S.flex1} />
        <TouchableOpacity onPress={continuePress} style={S.confirmButton}>
          <Text style={S.confirmButtonText}>Continue</Text>
        </TouchableOpacity>
        <View style={S.flex1} />
      </View>
      <View style={S.bottomSpacer} />
    </View>
  );
}
