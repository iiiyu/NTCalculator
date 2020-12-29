import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';

// eslint-disable-next-line import/extensions
import styles from './styles';

// function _handleOnPress(props:any, value:string) {
//   requestAnimationFrame(()=> {
//     props.onBtnPress(value)
//   })
// }

interface ButtonsProps {
  buttons: string[][];
}

function index(props: ButtonsProps): JSX.Element {
  // const shouldComponentUpdate = (_nextProps, _nextState) => {
  //   return false;
  // };

  const _handleOnPress = (value: string) => {
    requestAnimationFrame(() => {
      // props.onBtnPress(value);
    });
  };

  return (
    <View style={styles.container}>
      {props.buttons.map((row, xindex) => (
        <View key={xindex+'row'} style={styles.containerRow}>
          {row.map((col, rindex) => (
            <TouchableNativeFeedback
              key={rindex+'col'}
              onPress={() => _handleOnPress(col)}
              background={TouchableNativeFeedback.Ripple('#0f0', true)}
            >
              <View style={styles.containerButton}>
                <Text style={styles.txtDefalut}>{col}</Text>
              </View>
            </TouchableNativeFeedback>
          ))}
        </View>
      ))}
    </View>
  );
}

index.defaultProps = {
  buttons: [
    ['CLEAR', 'DEL'],
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '+'],
    ['.', '0', '=', '-'],
  ],
};

export default index;
