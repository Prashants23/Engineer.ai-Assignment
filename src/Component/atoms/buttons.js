import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class Buttons extends React.Component {
  render() {
    const {onsubmit, enable, textStyle, title, ButtonStyle} = this.props;
    return (
      <TouchableOpacity
        style={[ButtonStyle]}
        onPress={onsubmit}
        disabled={enable}>
        <View>
          <Text style={textStyle}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default Buttons;
