import React from 'react';
import {View, Text, TextInput, StyleSheet, Modal} from 'react-native';
import Buttons from '../atoms/buttons';
import CountryDetails from './CountryDetails';

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    height: '100%',
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

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      ifCountryDetails: false,
      countryName: '',
      CountryDetails: [],
      ifSubmitButton: true,
    };
  }
  onInputChange = event => {
    this.setState({countryName: event, ifSubmitButton: false});
  };
  onSubmit = () => {
    const {ifCountryDetails, countryName, CountryDetails} = this.state;
    this.setState({ifCountryDetails: true});
    // console.log(this.state.countryName);
    return fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
      .then(response => response.json())
      .then(json => {
        // return console.log(json);
        this.setState({CountryDetails: json});
      })
      .catch(err => {
        console.log(err);
      });
  };
  onClose = () => {
    const {ifCountryDetails} = this.state;
    this.setState({ifCountryDetails: false});
    console.log(this.state.CountryDetails);
  };
  renderCountrylDetailsModal() {
    return (
      <Modal
        animationType="slide"
        visible={this.state.ifCountryDetails}
        onRequestClose={this.onClose}>
        <CountryDetails
          details={this.state.CountryDetails}
          onClick={this.onClose}
        />
      </Modal>
    );
  }
  render() {
    return (
      <View style={styles.Container}>
        <TextInput
          style={styles.InputBoxStyle}
          placeholder="EnterCountry"
          onChangeText={event => this.onInputChange(event)}
        />
        <Buttons
          title={'Submit'}
          ButtonStyle={[styles.buttonStyle]}
          onsubmit={this.onSubmit}
          textStyle={styles.ButtonTExtStyle}
          enable={this.state.ifSubmitButton}
        />
        {this.renderCountrylDetailsModal()}
      </View>
    );
  }
}

export default Home;
