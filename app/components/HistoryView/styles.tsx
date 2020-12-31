import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  clearCont: {
    alignItems: 'flex-end',
    height: 40,
    justifyContent: 'center',
    paddingRight: 15,
  },

  container: {
    flex: 1,
  },

  emptyHistoryCont: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },

  expressionCont: {
    alignItems: 'flex-end',
    backgroundColor: 'transparent',
    flex: 0.7,
    justifyContent: 'center',
    paddingBottom: 5,
    paddingTop: 5,
  },

  historyCont: {
    flex: 1,
    flexDirection: 'column',
  },

  placeHolderHistory: {
    backgroundColor: 'transparent',
    borderColor: '#000',
    borderTopWidth: 0.7,
    flex: 1,
    flexDirection: 'column',
    marginLeft: 15,
    marginRight: 15,
    paddingBottom: 0,
    paddingTop: 0,
  },

  resultCont: {
    alignItems: 'flex-end',
    backgroundColor: 'transparent',
    flex: 0.3,
    justifyContent: 'center',
    paddingBottom: 5,
    paddingTop: 5,
  },

  txtClear: {
    color: '#2980b9',
    fontFamily: 'Helvetica-Light',
    fontSize: 15,
  },

  txtEmptyHistory: {
    color: '#7f8c8d',
    fontFamily: 'Helvetica-Light',
    fontSize: 15,
  },

  txtExpression: {
    color: '#000',
    fontFamily: 'Helvetica-Light',
    fontSize: 15,
  },

  txtResult: {
    color: '#27ae60',
    fontFamily: 'Helvetica-Light',
    fontSize: 15,
  },
})

export default styles
