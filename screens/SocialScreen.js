import React from 'react';
import { ScrollView, StyleSheet, Text, View, AppRegistry, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../constants/Colors.js';
import { MusicIDButton } from '../components/MainNavButtons.js';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Song ID',
  };

  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{flex: 1}}>
        <Text>Random users go here lol</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
