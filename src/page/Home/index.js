import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, ScrollView, Modal } from 'react-native';
import { DummyCake1, DummyCake2, DummyProfile } from '../../assets';
import { Button } from '../../components';
import { CardCategory, SearchBar } from '../../components/molecules';
import MenuCategory from '../../components/molecules/MenuCategory';

const Home = () => {

  const [statusModal, setStatusModal] = useState(false);

  return (
    <ScrollView>
      <View style={{ backgroundColor: 'black', flex: 1, padding: 30 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={DummyProfile} style={styles.image} />
          <View style={{ paddingLeft: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'white',
                  fontFamily: 'Poppins-Medium',
                }}>
                Hello,{' '}
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  color: '#FF9500',
                  fontSize: 20,
                }}>
                Shadam
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Poppins-Regular',
                color: '#89898A',
              }}>
              What Pie you want to try today?
            </Text>
          </View>
        </View>
        <View style={{ paddingTop: 30 }}>
          <SearchBar />
        </View>
        <View style={{ paddingTop: 50 }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontFamily: 'Poppins-SemiBold',
            }}>
            Category
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 10,
            }}>
            <MenuCategory title="Salty Pie" />
            <MenuCategory title="Sweet Pie" />
            <MenuCategory title="Fruit Pie" />
            <MenuCategory title="Drinks" />
          </View>
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Poppins-SemiBold',
              color: 'white',
              paddingTop: 30,
            }}>
            Popular Sweet Pie
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ flexDirection: 'row', paddingRight: -12 }}>
            <CardCategory
              title="Cream Sweet Pie"
              timer="20-30 Min"
              rating="4.5"
              image={DummyCake1}
              onPress={() => setStatusModal(true)}
            />
            <CardCategory
              title="DoubleJumbo Pie"
              timer="30-45 Min"
              rating="4.8"
              image={DummyCake2}
            />
            <CardCategory title="Fruit’s Small Pie" timer="10-25 Min" rating="4.5" image={DummyCake1} />
          </ScrollView>
          <Modal
            visible={statusModal}
            animationType={"fade"}
            transparent={true}
            style={{}}
          >
            <View style={{ flex: 1, backgroundColor: '#DCDCDC', justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ backgroundColor: 'white', width: 300, height: 300, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Show Modal</Text>
                <View>
                  <Button title="close modal" onPress={() => setStatusModal(false)} />
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
});
