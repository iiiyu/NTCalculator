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
  handleOnPress (value:string): void;
}

function index(props: ButtonsProps): JSX.Element {
  // const shouldComponentUpdate = (_nextProps, _nextState) => {
  //   return false;
  // };

  return (
    <View style={styles.container}>
      {props.buttons.map((row, rindex) => (
        <View key={rindex+'row'} style={styles.containerRow}>
          {row.map((col, cindex) => (
            <TouchableNativeFeedback
              key={cindex+'col'}
              onPress={() => props.handleOnPress(col)}
              background={TouchableNativeFeedback.Ripple('#AAF', true)}
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
    ['7', '8', '9', '÷'],
    ['4', '5', '6', 'x'],
    ['1', '2', '3', '-'],
    ['.', '0', '=', '+'],
  ],
};

export default index;
