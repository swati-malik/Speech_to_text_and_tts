import React, {Component} from 'react';
//Import React
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Text,
} from 'react-native';
import Tts from 'react-native-tts';

class courses extends Component {
  speak = async () => {
    const title = this.props.route.params.title;
    //const item = this.props.route.params.item;
    if (title.length == 0) {
      Tts.speak('Your course library is empty!!!');
    } else {
      for (i = 0; i < title.length; i++) {
        Tts.speak('the courses selected are.');
        Tts.speak(JSON.stringify(title[i]));
      }
    }
  };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity onPress={this.speak}>
          <Image source={require('./click1.png')} />
        </TouchableOpacity>
      </View>
    );
  }
}
export default courses;
