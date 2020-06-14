import React, {Component} from 'react';
//Import React
import {
  View,
  Button,
  TouchableHighlight,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import Tts from 'react-native-tts';
import Voice from '@react-native-community/voice';

class Details extends Component {
  state = {
    results: [],
    title: [],

    speechRate: 0.45,
    speechPitch: 1,
  };
  componentWillUnmount() {
    //destroy the process after switching the screen
    Voice.destroy().then(Voice.removeAllListeners);
  }

  constructor(props) {
    super(props);
    //Setting callbacks for the process status
    //Voice.onSpeechStart = this.onSpeechStart;
    //Voice.onSpeechEnd = this.onSpeechEnd;

    Voice.onSpeechResults = this.onSpeechResults.bind(this);
    Tts.setDefaultRate(this.state.speechRate);
    Tts.setDefaultPitch(this.state.speechPitch);
    Tts.setDefaultLanguage('en-US');
  }

  speak = async () => {
    text =
      "       The   available   courses    for    React   Native     technology    are.'         1. React Native Docs.'    2. React Native Tutorial for Begginners.'     3. React Native tutorial by Net Ninja.'                    and.'    The   available   courses    for    Redux    technology    are.'         1. Redux Docs.'    2. Redux tutorial by Mosh.'     3. Getting started with redux in react native.'          Speak  up.' the name   of course  to  add  to  your Course   library.' by  pressing  the  bottom  of  your  screen.'";

    Tts.speak(text);
  };

  _destroyRecognizer = async () => {
    //Destroys the current SpeechRecognizer instance
    try {
      await Voice.destroy();
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
    this.setState({
      results: [],
    });
  };

  onSpeechResults = e => {
    //Invoked when SpeechRecognizer is finished recognizing
    console.log('onSpeechResults: ', e);
    this.setState({
      results: e.value,
    });
  };

  _startRecognizing = async () => {
    //Starts listening for speech for a specific locale
    this.setState({
      results: [],
    });

    try {
      await Voice.start('en-US');
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  onClickDestroy = async () => {
    if (
      this.state.results == 'Redux docs' ||
      this.state.results == 'redux docs' ||
      this.state.results == 'redux dogs' ||
      this.state.results == 'redux tutorial by mosh' ||
      this.state.results == 'redux tutorial by mossh' ||
      this.state.results == 'redux tutorial by moss' ||
      this.state.results == 'redux tutorial by March' ||
      this.state.results == 'getting started with redux in react native'
    ) {
      this.setState(prevState => ({
        title: [...prevState.title, this.state.results],
      }));
    } else if (
      this.state.results == 'react native docs' ||
      this.state.results == 'react native dogs' ||
      this.state.results == 'React native tutorial for beginners' ||
      this.state.results == 'React native tutorial by net ninja'
    ) {
      this.setState(prevState => ({
        title: [...prevState.title, this.state.results],
      }));
    } else if (
      this.state.results == 'Go back' ||
      this.state.results == 'Back' ||
      this.state.results == 'Go to home page' ||
      this.state.results == 'Cancel' ||
      this.state.result == 'Listen to technologies again' ||
      this.state.results == 'Technologies' ||
      this.state.results == 'Back' ||
      this.state.results == 'tech'
    ) {
      this.props.navigation.navigate('Home');
    } else {
      Tts.speak(
        "Invalid Choice.'    Please  speak valid course name.'    if you Want to listen the names again.'    Click at the top of your screen.'",
      );
    }
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity style={styles.speaker} onPress={this.speak}>
          <Text style={{fontSize: 30}}>SPEAK!!!</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            top: 300,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              top: 20,
            }}>
            <TouchableHighlight
              style={styles.view1}
              onPress={this._startRecognizing}>
              <Image
                style={styles.button}
                source={{
                  uri:
                    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/microphone.png',
                }}
              />
            </TouchableHighlight>
            <Text style={styles.stat}>Results</Text>
            <ScrollView style={{marginBottom: 42}}>
              {this.state.results.map((result, index) => {
                return (
                  <Text key={`result-${index}`} style={styles.stat}>
                    {result}
                  </Text>
                );
              })}
            </ScrollView>
          </View>
          <TouchableOpacity
            style={{bottom: 20}}
            onPress={() =>
              this.props.navigation.navigate('courses', {
                title: this.state.title,
              })
            }>
            <Image
              style={{height: 120, width: 120}}
              source={require('../lib.png')}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',

            position: 'absolute',
            bottom: 0,
          }}>
          <TouchableHighlight
            onPress={() => {
              this.onClickDestroy();
              this._destroyRecognizer();
            }}
            style={{flex: 1, backgroundColor: 'red'}}>
            <Text style={styles.action}>Destroy</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
export default Details;
const styles = StyleSheet.create({
  action: {
    width: '100%',
    textAlign: 'center',
    color: 'white',
    paddingVertical: 8,
    marginVertical: 5,
    fontWeight: 'bold',
  },
  button: {
    width: 100,
    height: 100,
  },
  stat: {
    textAlign: 'center',
    color: '#B0171F',
    marginBottom: 1,
    marginTop: 30,
  },

  speaker: {
    width: '100%',
    height: 80,
    backgroundColor: 'darkslateblue',

    justifyContent: 'center',
    alignItems: 'center',
    top: 0,

    position: 'absolute',
  },
  view1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
