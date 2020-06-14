import React, {Component} from 'react';

import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './screens/home';
import Details from './screens/details';

import courses from './screens/courses';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen
          name="courses"
          component={courses}
          options={{
            headerRight: () => (
              <Image
                style={{height: 45, width: 80}}
                source={require('./lib.png')}
              />
            ),
          }}
        />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
