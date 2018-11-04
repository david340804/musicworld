import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { FlatList, View, Text } from 'react-native';
import Colors from '../constants/Colors';

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
				title: "Don't Stop Believin",
				artist: 'Journey',
				album: 'Escape',
			},
            
			{
				key: '2',
				title: 'Despacito',
				artist: 'Luis Fonsi',
				album: 'Summer Anthems 2017',
			},
			{
				key: '3',
				title: 'Poker Face',
				artist: 'Lady Gaga',
				album: 'The Fame',
			},
			{
				key: '4',
				title: "She Thinks My Tractor's Sexy",
				artist: 'Kenny Chesney',
				album: 'Everywhere We Go',
			},
			{
				key: '5',
				title: 'Tik Tok',
				artist: 'K$sha',
				album: 'Animal',
			},
			{
				key: '6',
				title: 'Sk8r Boi',
				artist: 'Avril Lavigne',
				album: 'Sk8r Boi',
			},
			{
				key: '7',
				title: 'Big Green Tractor',
				artist: 'Jason Aldean',
				album: 'Wide Open',
			},
			{
				key: '8',
				title: 'The Real Slim Shady',
				artist: 'Eminem',
				album: 'The Marshall Mathers LP',
			},
			{
				key: '9',
				title: 'Fergalicious',
				artist: 'Fergi',
				album: 'The Dutchess',
			},
			{
				key: '10',
				title: 'Smack That',
				artist: 'Akon',
				album: 'Konvicted',
			},
			{
				key: '11',
				title: 'Love the Way You Lie',
				artist: 'Eminem',
				album: 'Recovery',
			},
			{
				key: '12',
				title: 'The Monster',
				artist: 'Eminem',
				album: 'The Marshall Mathers LP 2',
			},
			{
				key: '13',
				title: 'Diamonds',
				artist: 'Rihanna',
				album: 'Unapologetic',
			},
			{
				key: '14',
				title: 'Where Have You Been',
				artist: 'Rihanna',
				album: 'Talk That Talk',
			},
			{
				key: '15',
				title: 'Starships',
				artist: 'Nicki Minaj',
				album: 'Pink Friday: Roman Reloaded',
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
                                backgroundColor: "white",
                                marginHorizontal: 10,
                                marginTop: 10,
                                padding: 10,
                            }}>
                            <Text
                             style={{
                             	color: Colors.primaryColor,
                             	fontWeight: "bold"
                             }}>{item.title}</Text>
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
