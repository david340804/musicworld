import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';
import { WebBrowser, Constants } from 'expo';

import { MonoText } from '../components/StyledText';
import MapView from 'react-native-maps';
import {Marker,Circle} from 'react-native-maps';

import { MusicIDButton, SocialButton, HistoryButton } from '../components/MainNavButtons.js';
import { boundMethod } from 'autobind-decorator';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 33.775620,
        longitude: -84.396286,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      regionString: '...',
      markers: [
        {
          key: 1,
          latlng: {
            latitude: 33.775620,
            longitude: -84.396286,
          },
          title: 'Georgia Tech college of computing',
          description: 'Genre: ',
        },
        { //MJQ Concourse, EDM 33.7740° N, 84.3632° W
          key: 2,
          latlng: {
            latitude: 33.7740,
            longitude: -84.3632,
          },
          title: 'MJQ Concourse',
          description: 'Genre: EDM',
        },
        {//Opera Atlanta, Rap 33.7859° N, 84.3840° W
          key: 3,
          latlng: {
            latitude: 33.7859,
            longitude: -84.3840,
          },
          title: 'Opera',
          description: 'Genre: Rap',
        },
        {//Dark Horse Tavern, Rock 33.7768° N, 84.3526° W
          key: 4,
          latlng: {
            latitude: 33.7768,
            longitude: -84.3526,
          },
          title: 'Dark Horse Tavern',
          description: 'Genre: Rock',
        },
        {//Havana Club ATL, Latin 33.8409° N, 84.3707° W
          key: 5,
          latlng: {
            latitude: 33.8409,
            longitude: -84.3707,
          },
          title: 'Havana Club ATL',
          description: 'Genre: Latin',
        },
        {//Electric Cowboy, Country 34.0053° N, 84.6011° W
          key: 6,
          latlng: {
            latitude: 34.0053,
            longitude: -84.6011,
          },
          title: 'Electric Cowboy',
          description: 'Genre: Country',
        },
      ],
      circles:[
        {
          key: 1,
          latlng: {
            latitude: 33.775620,
            longitude: -84.396286,
          },
          title: 'Georgia Tech college of computing',
          description: 'Genre: ',
          radius: 1000,
          color: 'rgba(59, 88, 230, 0.6)'
        },
        { //MJQ Concourse, EDM 33.7740° N, 84.3632° W
          key: 2,
          latlng: {
            latitude: 33.7740,
            longitude: -84.3632,
          },
          title: 'MJQ Concourse',
          description: 'Genre: EDM',
          radius: 700,
          color: 'rgba(191, 63, 191,0.6)',
        },
        {//Opera Atlanta, Rap 33.7859° N, 84.3840° W
          key: 3,
          latlng: {
            latitude: 33.7859,
            longitude: -84.3840,
          },
          title: 'Opera',
          description: 'Genre: Rap',
          radius: 700,
          color: 'rgba(63, 127, 191,0.6)',
        },
        {//Dark Horse Tavern, Rock 33.7768° N, 84.3526° W
          key: 4,
          latlng: {
            latitude: 33.7768,
            longitude: -84.3526,
          },
          title: 'Dark Horse Tavern',
          description: 'Genre: Rock',
          radius: 500,
          color: 'rgba(191, 63, 63,0.6)',
        },
        {//Havana Club ATL, Latin 33.8409° N, 84.3707° W
          key: 5,
          latlng: {
            latitude: 33.8409,
            longitude: -84.3707,
          },
          title: 'Havana Club ATL',
          description: 'Genre: Latin',
          radius: 800,
          color: 'rgba(63, 191, 63, 0.6)',
        },
        {//Electric Cowboy, Country 34.0053° N, 84.6011° W
          key: 6,
          latlng: {
            latitude: 34.0053,
            longitude: -84.6011,
          },
          title: 'Electric Cowboy',
          description: 'Genre: Country',
          radius: 200,
          color: 'rgba(191, 127, 63,0.6)',
        },

      ]

    };

  }

  @boundMethod
  onRegionChange(region) {
    console.log(region)

    //this.setState({regionString: JSON.stringify(region)})
    //this.state.regionString = ({ region: region });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View>
          <MapView
              style={{height: '100%', width: '100%'}}
              region={this.state.region}
              onRegionChange={this.onRegionChange}>

               {this.state.markers.map(
                  (marker,index) => (
                    <Marker
                      key={index}
                      coordinate={marker.latlng}
                      title={marker.title}
                      description={marker.description}
                    />
                  )
                )}
               {this.state.circles.map(
                  (circle,index) => (
                    <Circle
                      key = {index}
                      center={circle.latlng}   
                      radius = {circle.radius}
                      strokeColor= {circle.color}
                      fillColor= {circle.color}
                      />
                      )
                )}
                <Circle
                 center={{
                    latitude: 33.775620,
                    longitude: -84.396286,
                  }}
                  radius = {1000}
                  strokeColor='rgba(59, 88, 230, 0)'
                  fillColor='rgba(59, 88, 230, 0.6)'/>
            </MapView>

          <MusicIDButton
              onPress={() => {
                navigate('Links', { name: 'Jane', transition: 'vertical'});
                console.log('we hawwt');
               }
              }/>
          <SocialButton
              onPress={() => {
                navigate('Links', { name: 'Jane', transition: 'vertical'});
                console.log('we hawwt');
               }
              }/>
          <HistoryButton
              onPress={() => {
                navigate('Settings', { name: 'Jane', transition: 'vertical'});
                console.log('we hawwt');
               }
              }/>
        </View>

        <View style={styles.container}>
          <TouchableOpacity onPress={() => null}>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
