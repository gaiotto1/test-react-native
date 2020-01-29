import React from 'react';
import axios from 'axios';

import {View, Text, StyleSheet} from 'react-native';

import Header from './src/components/Header';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      peoples: [],
    };
  }

  componentDidMount() {
    axios.get('https://randomuser.me/api/?nat=br&results=5')
    .then(response => {
      const {results} = response.data;
      this.setState({
        peoples: results,
      });
    });
  }

  renderList() {
    const textElements = this.state.peoples.map(people => {
      const {first} = people.name;
      return <Text style={style.title} key="{first}">{first}</Text>;
    });
    return textElements;
  }

  render() {
    return (
      <View>
        <Header title="Pessoas" />
        {this.renderList()}
      </View>
    );
  }
}

const style = StyleSheet.create({
  title: {
    width: '100%',
    fontSize: 20,
    color: '#333',
  },
});
