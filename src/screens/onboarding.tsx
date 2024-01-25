import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Button from '../components/common/button';
import {globalStyle} from '../constants/global';
import {colors} from '../constants/color';

export default function Onboarding({navigation}: any) {
  return (
    <SafeAreaView style={[globalStyle.container]}>
      <ImageBackground
        source={require('../assets/4e8f13cbdb37604e351d37d72a1eb837.jpg')}
        style={styles.image}
        >
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcome}>Welcome</Text>
          <Text style={styles.welcome}>to our store</Text>
          <Text style={styles.message}>
            Get your groceries in as fast as one hour
          </Text>
          <Button
            title="Get Started"
            handleFunction={() => navigation.navigate('authOptions')}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: '100%',
  },
  welcomeContainer: {
    position: 'absolute',
    bottom: '10%',
    left: '5%',
    right: '5%',
  },
  welcome: {
    fontSize: 48,
    color: colors.secondary,
    textAlign: 'center',
    lineHeight: 46,
  },
  message: {
    color: colors.secondary,
    marginBottom: 50,
    marginTop: 10,
    textAlign: 'center',
    fontSize: 14
  },
  testBtn: {
    backgroundColor: 'red',
  },
});
