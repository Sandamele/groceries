import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { globalStyle } from '../constants/global'
import { colors } from '../constants/color'

export default function Splash({navigation}: any) {
    useEffect(()=> {
       const timeout = setTimeout(()=>{
            navigation.navigate('onboarding')
            console.log("Home")
        }, 3000)
        return () => clearTimeout(timeout)
    },[])
  return (
    <SafeAreaView style={[globalStyle.container, styles.splashContainer]}>
        <View style={styles.brandContainer}>
            <Text style={styles.brand}>nectar</Text>
            <Text style={styles.brandTag}>online groceriet</Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    splashContainer: {
        backgroundColor: colors.primary,
    },
    brandContainer: {
        alignItems: 'center',
        marginTop: '80%',
    },
    brand: {
        fontSize: 60,
        color: colors.secondary,
        letterSpacing: 1.5,
        fontWeight: '500',
    },
    brandTag: {
        fontSize: 20,
        color: colors.secondary,
        marginTop: -12,
        letterSpacing: 2
    }
})