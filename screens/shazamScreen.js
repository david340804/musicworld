import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class shazamScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    state = {
    location: null,
    postal_code:  null   ,
    song_name: null , 
    };
    
    let location = await Location.getCurrentPositionAsync({});
    this.setState({location})
    //this should pull postal code but IDK 
    let postal_code = await Location.reverseGeocodeAsync({this.state.postal_code});
    this.setState({postal_code})
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>{str(this.state.postal_code)}</Text>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <ExpoLinksView />
      </ScrollView>
    );
  }

   
      
    };

  }
}




