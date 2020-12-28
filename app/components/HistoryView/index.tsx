import React from 'react';
import { View, Text, ScrollView } from 'react-native';

// eslint-disable-next-line import/extensions
import styles from './styles';

interface HistoryProp {
  a: string;
  data: string[];
}

function index(props: HistoryProp): JSX.Element {
  const _onClear = () => {
    console.log('click clear');
  };

  const bEmpty = (): boolean => {
    if (props.data.length === 0) {
      return true;
    }
    return false;
  };

  return (
    <View style={styles.container}>
      <View style={styles.clearCont}>
        <Text onPress={() => _onClear()} style={styles.txtClear}>
          CLEAR HISTORY
        </Text>
      </View>
      {!bEmpty ? (
        <ScrollView>
          {props.data.map((history) => (
            <View style={styles.historyCont}>
              <View style={styles.placeHolderHistory}>
                <View style={styles.expressionCont}>
                  <Text style={styles.txtExpression}>{history[0]}</Text>
                </View>
                <View style={styles.resultCont}>
                  <Text style={styles.txtResult}>{`=${history[1]}`}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      ) : (
        <View style={styles.emptyHistoryCont}>
          <Text style={styles.txtEmptyHistory}>NO HISTORY</Text>
        </View>
      )}
    </View>
  );
}

export default index;
