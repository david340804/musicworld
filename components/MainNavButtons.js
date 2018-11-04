import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';
import Colors from '../constants/Colors';

export class MusicIDButton extends React.Component {
  render() {
    return (
        <View style={[styles.bigButton,styles.buttonContainer]}>
          <TouchableOpacity style={styles.button}>
            <Image source={require("../assets/images/note.png")}
            style={{height: 60, width: 60}}/>
          </TouchableOpacity>
        </View>
    );
  }
}



export class SocialButton extends React.Component {
  render() {
    return (
        <View style={[styles.socialButton,styles.buttonContainer]}>
          <TouchableOpacity style={styles.button}>
            <Image source={require("../assets/images/friends.png")}
            style={{height: 45, width: 45}}/>
          </TouchableOpacity>
        </View>
    );
  }
}

export class HistoryButton extends React.Component {
  render() {
    return (
        <View style={[styles.historyButton,styles.buttonContainer]}>
          <TouchableOpacity style={styles.button}>
            <Image source={require("../assets/images/heart.png")}
            style={{height: 45, width: 45}}/>
          </TouchableOpacity>
        </View>
    );
  }
}

styles = {
    bigButton: {
        width: 100,
        height: 100,
        borderRadius: 50,
        position: 'absolute',
        left: Dimensions.get('window').width * 0.5 - 50,
        bottom: Dimensions.get('window').height * 0.1,
      },
    socialButton: {
        width: 75,
        height: 75,
        borderRadius: 50,
        position: 'absolute',
        left: Dimensions.get('window').width * 0.2 - (75 * 0.5),
        bottom: Dimensions.get('window').height * 0.1,
    },
    historyButton: {
        width: 75,
        height: 75,
        borderRadius: 50,
        position: 'absolute',
        left: Dimensions.get('window').width * 0.8 - (75 * 0.5),
        bottom: Dimensions.get('window').height * 0.1,
    },
    buttonContainer: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        elevation: 10,
        shadowOpacity: 0.75,
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        padding:10,
        borderRadius: 50,
        width: 100,
        height: 100,
        justifyContent: 'center',
        
      },
}