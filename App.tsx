import React from 'react';
import { Text, View } from 'react-native';
// Styles
// eslint-disable-next-line import/extensions
import styles from './app/styles';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerHistory} />
      <View style={styles.containerOutput}>
        <View style={styles.placeHolderOutput}>
          <Text style={styles.txtDefalut}>OUTPUT HERE</Text>
        </View>
      </View>
      <View style={styles.containerButtons} />
    </View>
  );
}
