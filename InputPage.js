import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import Input from './Input';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class InputScreen extends Component {

  static navigationOptions = {
      tabBarLabel: 'Input',
      tabBarIcon: ({tintColor}) => (
        <Icon
          name = {'add-circle'}
          size = {26}
          style = {{color: tintColor}} />
      )

  }

  render() {
    const {navigate} = this.props.navigation;
    var styles = require('./Styles');
    return (
      <View style={{
        flex: 1
      }}>
        <View style={styles.body}>
          <Input/>
        </View>
        <View style={styles.footer}>
          <TouchableHighlight style={styles.button} onPress={() => navigate('Home')} underlayColor='#ffd199'>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
