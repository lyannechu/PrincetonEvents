import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

export default class EditingButtons extends Component {
  render() {
    var styles = require('./Styles');
    return (
      <View style={styles.footer}>
        <TouchableHighlight style={styles.button} onPress= {() => this.props.cancel()} underlayColor='#ffd199'>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={() => this.props.save()}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
