import React from 'react';
import {View, Text, StyleSheet, Modal} from 'react-native';
import Buttons from '../atoms/buttons';

class CapitalDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      ifCapitalWeather: false,
      capitalName: '',
    };
  }
  onCapitalDetails = () => {
    const {ifCapitalWeather} = this.state;
    this.setState({ifCapitalWeather: !ifCapitalWeather});
  };

  renderCapitalDetails(){
    return (
        <Modal
          animationType="slide"
          visible={this.state.ifCapitalWeather}
          onRequestClose={this.onCapitalDetails}>
          <CapitalDetails onClick={this.onCapitalDetails} />
        </Modal>
      );
  }
  render() {
    const {onClick} = this.props;
    return (
      <View>
        {/* <Text onPress={}>Back</Text> */}
        <Buttons title={'Back'} onsubmit={onClick} />
        {/* <Buttons title={'capital Wether'} /> */}
      </View>
    );
  }
}
export default CapitalDetails;
