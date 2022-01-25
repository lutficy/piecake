import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconBack } from '../../assets'

const EditedProfile = () => {
    return (
        <View style={styles.page}>
            <View style={styles.headerwrapper}>
                <IconBack />
                <View style={styles.header}>
                    <Text style={styles.title}>Edited Profile</Text>
                </View>
            </View>
        </View>
    )
}

export default EditedProfile

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'black',
        padding: 30
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Poppins-SemiBold',
    },
    headerwrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '75%'
    },
    header: {
        alignSelf: 'center'

    }
})
