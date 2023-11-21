import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Image
        source={{
          uri: 'https://verasquare.in/de24fa636c14c2d9a7a2408ac66792fc.png',
        }}
        style={styles.forgotPasswordImage}
      />
      <Text style={styles.loginFooterText}>
        RestroZap, Powered by JNET Technologies, Inc.
      </Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
  },
  loginFooterText: {
    color: 'black',
    marginVertical: 5,
    fontSize: 12,
  },
  forgotPasswordImage: {
    width: 70,
    height: 40,
  },
});
