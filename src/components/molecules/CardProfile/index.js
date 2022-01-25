import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconCards, IconNext, IconNotification, IconOrderHistory, IconProfile, IconShipping, IconWishlist } from '../../../assets'

const CardProfile = ({ label, onPress }) => {

    const Icon = () => {
        if (label === 'Edit Profile') {
            return <IconProfile />
        }
        if (label === 'Shipping Address') {
            return <IconShipping />
        }
        if (label === 'Wishlist') {
            return <IconWishlist />
        }
        if (label === 'Order History') {
            return <IconOrderHistory />
        }
        if (label === 'Notification') {
            return <IconNotification />
        }
        if (label === 'Cards') {
            return <IconCards />
        }
        return <IconProfile />
    }

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon />
                <Text style={{ color: 'white', paddingLeft: 20, fontSize: 15, fontFamily: 'Poppins-Medium' }}>{label}</Text>
            </View>
            <IconNext />
        </TouchableOpacity>
    )
}

export default CardProfile

const styles = StyleSheet.create({})
