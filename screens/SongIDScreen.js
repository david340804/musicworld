import React from 'react';
import { ScrollView, StyleSheet, Text, View, AppRegistry, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Colors from '../constants/Colors.js';
import { MusicIDButton } from '../components/MainNavButtons.js';
import { boundMethod } from 'autobind-decorator';
import { Constants, Location, Permissions } from 'expo';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Song ID',
  };
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      postal_code:  'no address',
      locale_name: 'Finding Location Name...',
      song_name: null , 
      song_mp3: null,
    };
    this._getLocationAsync();
  };

  @boundMethod
  async _getLocationAsync() {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
          this.setState({
            errorMessage: 'Permission to access location was denied',
          });
      }

      Location.getCurrentPositionAsync().then((location) => {
        Location.reverseGeocodeAsync(
          {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
          }).then((arrayAddresses) => {
            this.setState({
              
              locale_name: arrayAddresses[0].name,
              postal_code: arrayAddresses[0].postalCode,
            });
            console.log('got postal code:' + JSON.stringify(arrayAddresses));
        })
      })
      //let location = await Location.getCurrentPositionAsync({});
      //this.setState({location})
      //this should pull postal code but IDK 
      //let postal_code = await Location.reverseGeocodeAsync(location.coords.latitude,location.coords.longitude);
      //this.setState({postal_code})
  }

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
              {this.state.locale_name}
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
