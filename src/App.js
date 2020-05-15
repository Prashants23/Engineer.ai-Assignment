import React from 'react';
import {View, Text} from 'react-native';
import Home from './Component/screen/home';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View>
        <Home />
      </View>
    );
  }
}

export default App;
