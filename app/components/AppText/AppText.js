import { Text } from 'react-native';
import React from 'react';

import styles from './styles';

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

export default AppText;
