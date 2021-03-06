import React, {Component} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {View, Text, TouchableHighlight, TextInput} from 'react-native';

export default class Edit extends Component {
  constructor(props){
    super(props);
    this.state = {
      titleInput: this.props.title,
      whoInput: this.props.who,
      whereInput: this.props.where,
      dateInput: this.props.date,
      timeInput: this.props.time,
      descriptionInput: this.props.description
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.saving) {
    this.props.pushData(this.state.titleInput, this.state.whoInput, this.state.whereInput,
      this.state.timeInput, this.state.dateInput, this.state.descriptionInput);
    }
    else if(nextProps.cancel != this.props.cancel) {
      this.setState({
        titleInput: this.props.title,
        whoInput: this.props.who,
        whereInput: this.props.where,
        timeInput: this.props.time,
        dateInput: this.props.date,
        descriptionInput: this.props.description
      });
    }
};

componentWillReceiveProps(nextProps){
    if(nextProps.saving) {
    this.props.pushData(this.state.titleInput, this.state.whoInput, this.state.whereInput, this.state.whenInput, this.state.descriptionInput);
    }
    else if(nextProps.cancel != this.props.cancel) {
      this.setState({
        titleInput: this.props.title,
        whoInput: this.props.who,
        whereInput: this.props.where,
        whenInput: this.props.when,
        descriptionInput: this.props.description
      });
    }
};

  render() {
    var styles = require('./Styles');
    return (
      <KeyboardAwareScrollView style={styles.body}>
          <View style={styles.header}>
            <Text style={styles.title}>Edit Event</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.inputText}>Title</Text>
            <TextInput
              autoCapitalize={'sentences'}
              editable={this.props.editing}
              style={styles.normInput}
              value={this.state.titleInput}
              returnKeyType={'done'}
              onChangeText={(titleInput) => this.setState({titleInput})}/>
          </View>
          <View style={styles.container}>
            <Text style={styles.inputText}>Who</Text>
            <TextInput
            autoCapitalize={'sentences'}
            editable={this.props.editing}
            style={styles.normInput}
            value={this.state.whoInput}
            returnKeyType={'done'}
            onChangeText={(whoInput) => this.setState({whoInput})}/>
          </View>
          <View style={styles.container}>
            <Text style={styles.inputText}>When</Text>
            <TextInput
            autoCapitalize={'sentences'}
            editable={this.props.editing}
            style={styles.normInput}
            value={this.state.whenInput}
            returnKeyType={'done'}
            onChangeText={(whenInput) => this.setState({whenInput})}/>
          </View>
          <View style={styles.container}>
            <Text style={styles.inputText}>Where</Text>
            <TextInput
            autoCapitalize={'sentences'}
            editable={this.props.editing}
            style={styles.normInput}
            value={this.state.whereInput}
            returnKeyType={'done'}
            onChangeText={(whereInput) => this.setState({whereInput})}/>
          </View>
          <View style={styles.container}>
            <Text style={styles.inputText}>Description</Text>
            <TextInput
              multiline={true}
              textAlignVertical={'top'}
              editable={this.props.editing}
              autoCapitalize={'sentences'}
              style={styles.descriptionInput}
              value={this.state.descriptionInput}
              returnKeyType ={'done'}
              onChangeText={(descriptionInput) => this.setState({descriptionInput})}/>
          </View>
      </KeyboardAwareScrollView>
    );
  }
}
