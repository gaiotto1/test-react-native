import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PeopleList = props => {
  const {peoples} = props;

  const textElements = peoples.map(people => {
    const {first} = people.name;
    return (
      <Text style={style.title} key="{first}">
        {first}
      </Text>
    );
  });

  return <View>{textElements}</View>;
};

const style = StyleSheet.create({
  title: {
    width: '100%',
    fontSize: 20,
    color: '#333',
  },
});

export default PeopleList;
