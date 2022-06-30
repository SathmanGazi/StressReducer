import { StyleSheet, Platform } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});

export default styles;
