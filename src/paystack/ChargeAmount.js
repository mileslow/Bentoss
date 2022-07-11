import React from 'react';
import {TouchableOpacity, View, Text, FlatList} from 'react-native';
import S from '../styles/chargeAmountStyle';


export default function ChargeAmount({navigation}) {
  const [amount, setAmount] = React.useState('$0.00');

    // function keyInPad({item}) {
    //     return (
    //         <TouchableOpacity>
    //             <Text>{item.number}</Text>
    //         </TouchableOpacity>
    //     )
    // }

    // function keyPadRow({item}) {
    //     return (
    //         <View>
    //             <TouchableOpacity>

    //             </TouchableOpacity>
    //         </View>
    //     )
    // }



  function numberPicker() {

    let flatListArr = [];
    for(let i = 1; i * 3 < 10; i++) {
        flatListArr[i-1] = {};
        for(let j = i; j < i + 3; j++) {

        }
    }

    return (
    <View >
       <TouchableOpacity>
        <Text
        style={{fontSize: 40}}
        >1</Text>
       </TouchableOpacity>
    </View>);
  }

  return (
    <View
      style={{
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View style={S.textContainer}>
        <Text style={S.chargeText}>Enter Amount to charge</Text>
      </View>
      <View style={S.amountContainer}>
        <Text style={S.amountText}>{amount}</Text>
      </View>
      <View
        style={S.keypadContainer}
      >
      <View >
       {numberPicker()}
    </View>
      </View>
    </View>
  );
}
