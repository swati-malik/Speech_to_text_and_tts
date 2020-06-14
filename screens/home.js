import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import Tts from 'react-native-tts';

class Home extends Component {
  constructor(props) {
    super(props);
    //Setting callbacks for the process status
    //Voice.onSpeechStart = this.onSpeechStart;
    //Voice.onSpeechEnd = this.onSpeechEnd;

    Tts.setDefaultRate(0.4);
    Tts.setDefaultPitch(1);
    Tts.setDefaultLanguage('en-US');
  }
  speak = async () => {
    var text =
      "Welcome to our site.'     We have different courses for you.'     Thank You.' ";
    Tts.speak(text);
  };

  speak1 = async () => {
    var text =
      "click    at    the    top    of   your   screen    to   know    about    the     courses available.'   Listen to the complete description before selecting the course.'";

    Tts.speak(text);
  };
  onClick = () => {
    this.props.navigation.navigate('Details');
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'green'}}>
        <Text
          style={{fontSize: 30, color: 'black', textAlign: 'center', top: 20}}>
          COURSES FOR YOU
        </Text>
        <View style={styles.view1}>
          <Text>Click</Text>
          <TouchableOpacity onPress={this.speak}>
            <Image style={styles.button} source={require('./speak.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.view}>
          <TouchableOpacity
            onPress={() => {
              this.onClick();
              this.speak1();
            }}>
            <Text style={{fontSize: 30}}>Click!!!</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Home;
const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  view: {
    flexDirection: 'row',
    width: '100%',
    height: 70,

    backgroundColor: '#ffcbf2',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  button: {
    height: 200,
    width: 200,
    justifyContent: 'center',
  },
  view1: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 200,
  },
});
