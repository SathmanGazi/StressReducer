import { Text } from 'react-native';
import React from 'react';

import styles from './styles';

function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

export default AppText;
