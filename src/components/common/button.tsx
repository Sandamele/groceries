import { View, Text, TouchableOpacity, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../constants/color'
import { ButtonProps } from '../../types/buttonTypes'

export default function Button({title, handleFunction, btnBackground}: ButtonProps) {
  return (
   <Pressable onPress={handleFunction} style={[styles.btn, !btnBackground ? styles.background : btnBackground]}>
    <Text style={styles.title}>{title}</Text>
   </Pressable>
  )
}

const styles = StyleSheet.create({
    btn: {
        padding: 10,
        borderRadius: 10,
    },
    background: {
        backgroundColor: colors.primary
    },
    title: {
        textAlign: 'center',
        color: colors.secondary,
        fontSize: 18,
    }
})