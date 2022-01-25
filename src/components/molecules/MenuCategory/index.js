import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
  IconDrinks,
  IconFruitPie,
  IconSaltyPie,
  IconSweetPie,
} from '../../../assets';

const MenuCategory = ({ title }) => {
  const Icon = () => {
    if (title === 'Salty Pie') {
      return <IconSaltyPie />;
    }
    if (title === 'Sweet Pie') {
      return <IconSweetPie />;
    }
    if (title === 'Fruit Pie') {
      return <IconFruitPie />;
    }
    if (title === 'Drinks') {
      return <IconDrinks />;
    }
    return <IconSaltyPie />;
  };

  return (
    <TouchableOpacity>
      <View style={{ alignItems: 'center' }} >
        <View style={styles.wrapper}>
          <Icon />
        </View>
        <Text style={{ color: 'white', paddingTop: 8, textAlign: 'center', fontFamily: 'Poppins-Medium' }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MenuCategory;

const styles = StyleSheet.create({
  wrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#2D2D2D',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
});
