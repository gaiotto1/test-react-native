import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = props => (
  <View style={style.container}>
    <Text style={style.title}>{props.title}</Text>
  </View>
);

const style = StyleSheet.create({
  container: {
    marginTop: 0,
    width: '100%',
    height: 50,
    backgroundColor: '#7159C1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: '#fff',
  },
});

export default Header;
