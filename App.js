import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  View,
  TouchableHighlight,
  Image,
  SafeAreaView,
} from 'react-native';

export default function App() {
  const handlePress = () => console.log('Text Pressed');
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        This will be my second project!
      </Text>
      <Image source={require('./assets/favicon.png')} />
      <TouchableHighlight onPress={() => console.log('Image Tapped')}>
        <Image
          fadeDuration={1000}
          blurRadius={1}
          source={{
            width: 200,
            height: 300,
            uri: 'https://picsum.photos/200/300',
          }}
        />
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
