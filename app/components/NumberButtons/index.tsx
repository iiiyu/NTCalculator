import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';

// eslint-disable-next-line import/extensions
import styles from './styles';


export enum ButtonType {
  Clear = 'CLEAR',
  Delete = 'DELETE',
  Symbols = 'SYMBOLS',
  Numbers = 'NUMBERS',
  Equals = 'EQUALS'
}

export interface ButtonData  {
  name:string;
  type:ButtonType;
  size:number;
}

interface ButtonsProps {
  handleOnPress (value:ButtonData): void;
  buttons: ButtonData[][];
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
              <View style={[styles.containerButton, {flex:col.size}]}>
                <Text style={styles.txtDefault}>{col.name}</Text>
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
    [
      {
        name:'CLEAR',
        type:ButtonType.Clear,
        size:2
      },
      {
        name:'DEL',
        type:ButtonType.Delete,
        size:1
      },
      {
        name:'÷',
        type:ButtonType.Symbols,
        size:1
      }
    ],
    [
      {
        name:'7',
        type:ButtonType.Numbers,
        size:1
      },
      {
        name:'8',
        type:ButtonType.Numbers,
        size:1
      },
      {
        name:'8',
        type:ButtonType.Numbers,
        size:1
      },
      {
        name:'x',
        type:ButtonType.Symbols,
        size:1
      }
    ],
    [
      {
        name:'4',
        type:ButtonType.Numbers,
        size:1
      },
      {
        name:'5',
        type:ButtonType.Numbers,
        size:1
      },
      {
        name:'6',
        type:ButtonType.Numbers,
        size:1
      },
      {
        name:'-',
        type:ButtonType.Symbols,
        size:1
      }
    ],
    [
      {
        name:'1',
        type:ButtonType.Numbers,
        size:1
      },
      {
        name:'2',
        type:ButtonType.Numbers,
        size:1
      },
      {
        name:'3',
        type:ButtonType.Numbers,
        size:1
      },
      {
        name:'+',
        type:ButtonType.Symbols,
        size:1
      }
    ],
    [
      {
        name:'0',
        type:ButtonType.Numbers,
        size:2
      },
      {
        name:'.',
        type:ButtonType.Symbols,
        size:1
      },
      {
        name:'=',
        type:ButtonType.Symbols,
        size:1
      }
    ]
  ]
};

export default index;
