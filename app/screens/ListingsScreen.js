import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';

const listings = [
  {
    id: 1,
    title: 'Bengal Cat',
    price: 'If you find one, contact me and give me. please?',
    image: require('../assets/bengalcat.jpg'),
  },
  {
    id: 2,
    title: 'Norwegian Forest Cat',
    price: 'I want this one too. Thank you.',
    image: require('../assets/Norwegian-Forest-Cat.jpg'),
  },
];
function ListingsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            price={'ATTENTION EVERYNIAN!!!!!! ' + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
