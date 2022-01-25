import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {
  IconCartActive,
  IconCartInactive,
  IconHomeActive,
  IconHomeInActive,
  IconLoveActive,
  IconLoveInActive,
  IconProfileActive,
  IconProfileInactive,
} from '../../../assets';

const TabItem = ({label, onLongPress, onPress, isFocused}) => {
  const Icon = () => {
    if (label === 'Home') {
      return isFocused ? <IconHomeActive /> : <IconHomeInActive />;
    }
    if (label === 'Cart') {
      return isFocused ? <IconCartActive /> : <IconCartInactive />;
    }
    if (label === 'Love') {
      return isFocused ? <IconLoveActive /> : <IconLoveInActive />;
    }
    if (label === 'Profile') {
      return isFocused ? <IconProfileActive /> : <IconProfileInactive />;
    }
    return <IconHomeActive />;
  };

  return (
    <TouchableOpacity
      accessibilityRole="button"
      onPress={onPress}
      onLongPress={onLongPress}
      style={{flex: 1}}
      activeOpacity={0.8}
      style={{alignItems: 'center'}}
      >
      <Icon />
      <Text style={{color: isFocused ? '#FF9500' : '#89898A', paddingTop: 5}}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;
