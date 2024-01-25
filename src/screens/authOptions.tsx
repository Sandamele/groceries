import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { globalStyle } from '../constants/global'

export default function AuthOptions() {
  return (
    <SafeAreaView style={[globalStyle.container]}>
        <View style={styles.optionsContainer}>
            <Text>Vew</Text>
        </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    optionsContainer: {
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        right: '5%',
    }
})