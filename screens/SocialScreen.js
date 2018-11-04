import React from 'react';
import { ScrollView, StyleSheet, Text, View, AppRegistry, Image, FlatList} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { ExpoLinksView } from '@expo/samples';
import { MusicIDButton } from '../components/MainNavButtons.js';
import Colors from '../constants/Colors.js';

export default class SocialScreen extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  render() {
    return (
        <FlatList
        style={{margin: 0,padding: 0, backgroundColor: 'white'}}
        data={this.state.data}
        renderItem={({ item }) => (
          <ListItem
            roundAvatar
            title={`${item.name.first} ${item.name.last}`}
            titleStyle={{ fontWeight: 'bold', color: Colors.primaryColor }}
            subtitle={'listened to Rock n Roll'}
            avatar={{ uri: item.picture.thumbnail }}
            containerStyle={{ paddingTop: 20, paddingBottom: 20}}
          />
        )}
        keyExtractor={item => item.email}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
