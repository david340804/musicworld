import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { FlatList, View, Text } from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Your Songs',
  };

  constructor(props){
    super(props);
    this.state = {
        songs: [
            {
                key: '1',
                title: 'Title',
                artist: 'Artist',
                album: 'Album',
            },
            {
                key: '2',
                title: 'Title2',
                artist: 'Artist2',
                album: 'Album2',
            },
        ]
    };
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
        <FlatList
            data={this.state.songs}
            renderItem={
                ({item}) => {
                    return (
                        <View
                            style={{
                                backgroundColor: 'white',
                                marginHorizontal: 10,
                                marginTop: 10,
                                padding: 10,
                            }}>
                            <Text>{item.title}</Text>
                            <Text>{item.artist}</Text>
                            <Text>{item.album}</Text>
                        </View>
                    )
                }
            }
            >
        </FlatList>
    );
  }
}
