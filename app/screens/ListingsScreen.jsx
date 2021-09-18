import { FlatList, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import React from 'react';

import Screen from '../components/Screen';
import ListItemSeperator from '../components/ListItemSeparator';
import Card from '../components/Card';
import colors from '../config/colors';
import { useNavigation } from '@react-navigation/core';
import routes from '../navigation/routes';

const listings = [
  {
    id: 1,
    title: 'Red jacket for sale',
    price: 100,
    image: require('../assets/jacket.jpg'),
  },
  {
    id: 2,
    title: 'Couch in great condition',
    price: 1000,
    image: require('../assets/couch.jpg'),
  },
];

function ListingsScreen(props) {
  const navigation = useNavigation();
  console.log(props, 'Listing Screen Props');
  return (
    <Screen style={styles.screen}>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            image={item.image}
            onPress={() => navigation.push(routes.LISTING_DETAILS, { item })}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
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
