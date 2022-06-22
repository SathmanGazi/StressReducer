import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Alert,
  Button,
  Platform,
  StatusBar,
} from 'react-native';

export default function App() {
  const handlePress = () =>
    Alert.alert('My Title', 'My Message', [{ text: 'Yes' }, { text: 'No' }]);
  return (
    <SafeAreaView style={(styles.container, containerStyle)}>
      <Button color={'red'} title='Click me' onPress={handlePress} />
    </SafeAreaView>
  );
}
const containerStyle = {
  backgroundColor: 'pink',
  flex: 1,
  paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
