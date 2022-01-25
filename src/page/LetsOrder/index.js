import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ILBackground } from '../../assets'
import { Button } from '../../components'

const LetsOrder = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.firstpage}>
                <Image source={ILBackground} style={styles.background} />
                <Text>First Page</Text>
            </View>
            <View style={styles.containersecondpage}>
                <View style={styles.secondpage}>
                    <Text style={styles.title}>PieLove Anetto</Text>
                    <Text style={styles.subtitle}>Let's taste the Pie Cake made by Chef Bimo Semesta</Text>
                    <Button title="Let's Order" onPress={() => navigation.navigate('MainApp')} />
                </View>
            </View>
        </View>
    )
}

export default LetsOrder

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
    },
    firstpage: {
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',
        paddingTop: 50
    },
    containersecondpage: {
        backgroundColor: 'black'
    },
    secondpage: {
        backgroundColor: '#2D2D2D',
        height: 250,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        paddingTop: 50,
        paddingBottom: 40,
        paddingHorizontal: 30,
        alignItems: 'center'
    },
    background: {
        width: 310,
        height: 474
    },
    title: {
        fontSize: 24,
        color: 'white',
        fontFamily: 'Poppins-SemiBold',
    },
    subtitle: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#89898A',
        maxWidth: 239,
        textAlign: 'center',
        paddingBottom: 10
    },
})
