import React from 'react';
import { ScrollView, StyleSheet, Text, View, AppRegistry, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../constants/Colors.js';
import { MusicIDButton } from '../components/MainNavButtons.js';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{flex: 1}}>
        <View style={{height: 50, backgroundColor: Colors.primaryColor}} />
        <View style={{flex: 3}}>
          <View style={{height: 300,
          alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require("../assets/images/albumCoverEX.jpg")}
              style={{height: 250, width: 250, marginTop: 17}}/>
          </View>
        </View>
        <View style={{flex: 3}}>
        <View style={{justifyContent: 'center', marginTop: 40}}>
            <Text style={{color: '#606060', marginTop: 0, paddingTop: 0,
            textAlign: 'center', fontSize: 18}}>
            99 XYZ Street Atlanta, Georgia
              {"\n"}
              {"\n"}
              <Text style={{color: Colors.primaryColor,
                fontWeight: 'bold', fontSize: 25}}>
                Song Name
              </Text>
              {"\n"}
              <Text style={{color: Colors.primaryColor, fontSize: 20}}>
                by
              </Text>
              <Text style={{color: Colors.primaryColor,
                fontWeight: 'bold', fontSize: 25}}>
                {" "}Artist
              </Text>
            </Text>
          </View>
        </View>
        <MusicIDButton/>
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
