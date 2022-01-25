import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DummyCake1, IconStar } from '../../../assets';

const CardCategory = ({ image, title, timer, rating, onPress }) => {

  
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <View style={{ paddingRight: 12 }}>
        <View
          style={{
            width: 150,
            height: 223,
            backgroundColor: '#2D2D2D',
            padding: 12,
            borderRadius: 12,
          }}>
          <ImageBackground
            source={image}
            imageStyle={{ borderRadius: 12 }}
            style={{ width: 126, height: 136, justifyContent: 'flex-end' }}>
            <View
              style={{
                width: 86,
                height: 25,
                backgroundColor: '#2D2D2D',
                opacity: 0.7,
                alignItems: 'center',
                justifyContent: 'center',
                borderTopRightRadius: 16,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: 'Poppins-Medium',
                  color: '#B9B9B9',
                  textAlign: 'center',
                }}>
                {timer}
              </Text>
            </View>
          </ImageBackground>
          <Text
            style={{
              color: 'white',
              fontSize: 14,
              fontFamily: 'Poppins-Regular',
              paddingTop: 12,
            }}>
            {title}
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
            <IconStar />
            <Text style={{ fontSize: 12, color: '#FF9500', fontFamily: 'Poppins-Medium', paddingLeft: 5 }}>{rating}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardCategory;

const styles = StyleSheet.create({});
