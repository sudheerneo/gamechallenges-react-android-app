import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { Colors } from '../config';

export const FormErrorMessage = ({ error, visible }) => {
  if (!error || !visible) {
    return null;
  }

  return <Text style={styles.errorText}>{error}</Text>;
};

const styles = StyleSheet.create({
  errorText: {
    textAlign: 'center',
    color: Colors.red,
    fontSize: 11.5,
    marginVertical: 8,
    fontWeight: '400'
  }
});
