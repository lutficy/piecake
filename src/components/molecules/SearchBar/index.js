import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {IconSearch} from '../../../assets';

const SearchBar = () => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        placeholder="Find your favorite Pie"
        placeholderTextColor="#89898A"
        style={{color: '#89898A', width: 270, fontSize: 15, fontFamily: 'Poppins-Regular'}}
      />
      <IconSearch />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 50,
    backgroundColor: '#2D2D2D',
    borderRadius: 15,
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
