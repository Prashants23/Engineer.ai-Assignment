/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Modal, Image} from 'react-native';
import Buttons from '../atoms/buttons';
import CapitalDetails from './Capitaldetails';

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    // height: '100%',
    marginTop:50,
    justifyContent: 'center',
  },
  buttonStyle: {
    width: 200,
    height: 40,
    // textAlign: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    justifyContent: 'center',
    borderRadius: 8,
    marginHorizontal:100,
    marginVertical:20
  },
  ButtonTExtStyle: {
    color: 'white',
    letterSpacing: 0.5,
    fontSize: 16,
  },
  InputBoxStyle: {
    width: 300,
    borderWidth: 1,
    borderColor: 'black',
    paddingLeft: 20,
    borderRadius: 8,
    marginVertical: 25,
  },
});

class CountryDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      ifCapitalWeather: false,
      capitalName: '',
      CountryDetails: [],
    };
  }

  componentDidMount() {
    this.setState({CountryDetails: this.props.details});
  }

  onCapitalDetails = () => {
    const {ifCapitalWeather} = this.state;
    this.setState({ifCapitalWeather: !ifCapitalWeather});
    console.log(
      'dytjvhkjk,j434216532--------------------------etails',
      this.state.CountryDetails.length,
    );
  };

  renderCapitalDetails() {
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
    const {CountryDetails} = this.state;
    return (
      <View>
        {/* <Text onPress={}>Back</Text> */}
        <Buttons title={'Back'} onsubmit={onClick} />
        <View>
          {CountryDetails.map(item => {
            return (
              <View style={styles.Container}>
                <Image
                  source={{uri: `${item.flag}`}}
                  // source={{
                  //     uri:
                  //       item.flag,
                  //   }}
                  style={{width: 200, height: 200}}
                />
                <Text>name:{item.capital}</Text>
                <Text>Population:{item.population}</Text>
                <Text>Latlng:{item.latlng}</Text>
              </View>
            );
          })}
        </View>
        <Buttons
          title={'Capital Weather'}
          ButtonStyle={styles.buttonStyle}
          textStyle={styles.ButtonTExtStyle}
          onsubmit={this.onCapitalDetails}
        />
        {this.renderCapitalDetails()}
      </View>
    );
  }
}
export default CountryDetails;
