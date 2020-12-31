import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  containerButtons: {
    backgroundColor: '#bdc3c7',
    flex: 0.5,
  },
  containerHistory: {
    backgroundColor: 'red',
    flex: 0.3,
  },
  containerOutput: {
    flex: 0.2,
  },
  placeHolderOutput: {
    alignItems: 'flex-end',
    backgroundColor: 'green',
    flex: 1,
    justifyContent: 'center',
    paddingRight: 20,
  },
  txtDefault: {
    color: '#fff',
    fontFamily: 'Helvetica-Light',
    fontSize: 30,
  },
});

export default styles;
