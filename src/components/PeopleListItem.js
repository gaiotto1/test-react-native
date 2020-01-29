import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {capitalizeFirstLetter} from '../util';

const PeopleListItem = props => {
  const {people} = props;
  const {first, last} = people.name;
  return (
    <View style={styles.line}>
      <Text style={styles.lineText}>
        { `${
          capitalizeFirstLetter(first)
        } ${
          capitalizeFirstLetter(last)
        }`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    height: 55,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
    alignItems: 'center',
    flexDirection: 'row',
  },
  lineText: {
    fontSize: 20,
    paddingLeft: 10,
  },
});

export default PeopleListItem;