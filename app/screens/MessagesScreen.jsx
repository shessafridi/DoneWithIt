import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Screen from './../components/Screen';
import ListItem from './../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from './../components/ListItemDeleteAction';

const initialMessages = [
  {
    id: 1,
    title: 'M1',
    description: 'D1',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 2,
    title: 'M2',
    description: 'D2',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 3,
    title: 'M3',
    description: 'D3',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 4,
    title: 'M4',
    description: 'D4',
    image: require('../assets/mosh.jpg'),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = message => {
    const newMessages = messages.filter(m => m.id !== message.id);
    setMessages(newMessages);
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            key={item.id}
            image={item.image}
            title={item.title}
            subTitle={item.description}
            onPress={() => console.log(item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => setMessages(initialMessages)}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
