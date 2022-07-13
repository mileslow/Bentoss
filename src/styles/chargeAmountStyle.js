import {StyleSheet} from 'react-native';

const S = StyleSheet.create({
  textContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  amountContainer: {
    flex: 1,
  },
  chargeText: {
    color: '#333',
    fontSize: 35,
  },
  chargeAmountStyles: {
    flex: 4,
    backgroundColor: '#f0f',
    width: '100%',
  },
  amountText: {
    color: '#333',
    fontSize: 50,
  },
  keypadContainer: {
    flex: 8,
    alignItems: 'center',
    paddingTop: 20,
    flexDirection: 'column',
    // backgroundColor: '#f0f',
  },
  confirmContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  keyPadText: {
    fontSize: 45,
  },
  zeroThroughNineText: {
    paddingHorizontal: 70,
    paddingTop: 30,
  },
  keyPadTextContainer: {
    padding: 20,
  },
  flex1: {
    flex: 1,
  },
  alignCenter: {
    alignItems: 'center',
  },
  delIconContainer: {position: 'absolute', marginLeft: 37, marginTop: 3},
  bottomSpacer: {
    flex: 3,
  },
  confirmButton: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderColor: '#4b4b4b',
    borderWidth: 3,
  },
  confirmButtonText: {
    fontSize: 35,
    marginVertical: 30,
  },
});

export default S;
