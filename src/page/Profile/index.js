import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { DummyProfile, IconLogout, IconNext } from '../../assets'
import { Gap } from '../../components'
import { CardProfile } from '../../components/molecules'

const Profile = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={{ backgroundColor: 'black', padding: 30, flex: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 20, color: 'white', fontFamily: 'Poppins-SemiBold' }}>Profile</Text>
                    <IconLogout />
                </View>
                <View style={{ alignItems: 'center', paddingTop: 20 }}>
                    <Image source={DummyProfile} style={{ height: 100, width: 100, borderRadius: 100 / 2 }} />
                    <Gap height={10} />
                    <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins-Medium' }}>Shadam</Text>
                </View>
                <View style={{ paddingTop: 60 }}>
                    <CardProfile label="Edit Profile" onPress={() => navigation.navigate('Edited Profile')} />
                    <Gap height={30} />
                    <CardProfile label="Shipping Address" />
                    <Gap height={30} />
                    <CardProfile label="Wishlist" />
                    <Gap height={30} />
                    <CardProfile label="Order History" />
                    <Gap height={30} />
                    <CardProfile label="Notification" />
                    <Gap height={30} />
                    <CardProfile label="Cards" />
                </View>
            </View>

        </ScrollView>
    )
}

export default Profile

const styles = StyleSheet.create({
    secondpage: {
        backgroundColor: 'white',

    }
})
