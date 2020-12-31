import React, { useState, useEffect } from 'react'
import { Text, View, SafeAreaView, Button } from 'react-native'

// Styles
// eslint-disable-next-line import/extensions
import styles from './app/styles'

// Custom Components

import NumberButtons, {
  ButtonData,
  ButtonType,
  // eslint-disable-next-line import/extensions
} from './app/components/NumberButtons'

// eslint-disable-next-line import/extensions
import HistoryView from './app/components/HistoryView'

const maxLength = 57
const initialOutput = '0'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function App() {
  // useEffect(() => {
  //
  // }, []);

  const [output, SetOutput] = useState('0')

  const initOutput = () => {
    SetOutput(initialOutput)
  }

  const replaceLastIndex = (value: string) => {
    let str1 = output.replace(/.$/, value)
    SetOutput(str1)
  }

  const concatToOutput = (value: ButtonData) => {
    if (output.length >= maxLength) {
      // TODO: Toast
      console.log(`Maximum Expression Length of ${maxLength} is reached.`)
    } else if (output !== initialOutput) {
      SetOutput(output + value.name)
    } else {
      SetOutput(value.name)
    }
  }

  const escapeRegExp = (value: string) => {
    return value.replace(/([.*+?^=!:${}()|\\[\]\\/\\])/g, '\\$1')
    // return value.replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1')
  }

  const convertToMathExpression = (value: string) => {
    let strTemp = value.replace(new RegExp(escapeRegExp('÷'), 'g'), '/')
    strTemp = strTemp.replace(new RegExp(escapeRegExp('x'), 'g'), '*')
    return strTemp
  }

  const evaluate = () => {
    try {
      let strCurOutput = output
      if (isNaN(+strCurOutput)) {
        // eslint-disable-next-line no-eval
        let dEval = eval(convertToMathExpression(output))
        SetOutput(`${dEval}`)

        // let aHistory = [...this.state._history]
        // aHistory.push([strCurOutput, dEval])

        // this.setState({
        //   _output: `${dEval}`,
        //   _history: aHistory,
        // })
      }
    } catch (exception) {
      console.log(`exception: ${exception}`)
      // this._showToast('Invalid format used.')
    }
  }

  const handleOnPress = (value: ButtonData) => {
    if (!isNaN(+value.name) || value.name === '.') {
      concatToOutput(value)
    } else {
      switch (value.type) {
        case ButtonType.Clear: {
          initOutput()
          break
        }
        case ButtonType.Delete: {
          if (output.length === 1) {
            initOutput()
          } else {
            replaceLastIndex('')
          }
          break
        }
        case ButtonType.Equals: {
          evaluate()
          break
        }
        default: {
          let strLastChar = output.slice(-1)
          if (isNaN(+strLastChar)) {
            replaceLastIndex(value.name)
          } else {
            concatToOutput(value)
          }
          console.log('default')
          break
        }
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
        <NumberButtons handleOnPress={handleOnPress} />
      </View>
    </SafeAreaView>
  )
}
