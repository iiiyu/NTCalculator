import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, Button } from 'react-native';
import { ButtonData } from './app/components/NumberButtons'

// Styles
// eslint-disable-next-line import/extensions
import styles from './app/styles';

// Custom Components
// eslint-disable-next-line import/extensions
import NumberButtons from './app/components/NumberButtons';
// eslint-disable-next-line import/extensions
import HistoryView from './app/components/HistoryView';



const maxLength = 57;
const initialOutput = '0';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function App() {

  // useEffect(() => {
    //
  // }, []);

  const [output, SetOutput] = useState('0')

  const handleOnPress = function (value:ButtonData) {
    console.log(value.name)
    SetOutput(value.name)
  }

  const concatToOutput = (value:ButtonData) => {
    if(output.length>=maxLength){
      // this._showToast('Maximum Expression Length of ' + maxLength + ' is reached.');
      //TODO: Toast
      console.log('Maximum Expression Length of ' + maxLength + ' is reached.')
    }
    else{
      if(output !== initialOutput){
        SetOutput(output+value.name)
      }
      else{
        SetOutput(value.name)
      }
    }

  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerHistory}>
        {/* <HistoryView data={this.state._history} onClear={this._clearHistory} /> */}
      </View>
      <View style={styles.containerOutput}>
        <View style={styles.placeHolderOutput}>
          <Text style={styles.txtDefault}>{output}</Text>
        </View>
      </View>
      <View style={styles.containerButtons}>
        <NumberButtons handleOnPress={handleOnPress}/>
      </View>
    </SafeAreaView>
  );
}
