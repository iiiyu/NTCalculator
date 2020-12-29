import React from 'react';
import { Text, View } from 'react-native';
// Styles
// eslint-disable-next-line import/extensions
import styles from './app/styles';

// Custom Components
// eslint-disable-next-line import/extensions
import NumberButtons from './app/components/NumberButtons';
// eslint-disable-next-line import/extensions
import HistoryView from './app/components/HistoryView';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerHistory}>
        {/* <HistoryView data={this.state._history} onClear={this._clearHistory} /> */}
      </View>
      <View style={styles.containerOutput}>
        <View style={styles.placeHolderOutput}>
          {/* <Text style={styles.txtDefault}>{this.state._output}</Text> */}
        </View>
      </View>
      <View style={styles.containerButtons}>
        <NumberButtons />
      </View>
    </View>
  );
}
