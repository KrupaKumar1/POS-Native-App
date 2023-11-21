// OTPScreen.js
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Footer from '../components/Footer';

// ... (Your other imports)

const OtpPage = ({navigation}) => {
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleVerification = () => {
    const enteredOTP = otp.join('');
    // Implement your verification logic here
    console.log('Verifying OTP:', enteredOTP);
    navigation.navigate('OrderDashboard');
  };

  const handleInputChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    // Move to the next input field if the current one is not empty
    if (index < otp.length - 1 && value !== '') {
      otpInputs[index + 1].focus();
    }

    setOtp(newOtp);
  };

  // Reference array for TextInput elements
  const otpInputs = Array.from({length: 4}, (_, index) => null);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://verasquare.in/0daf71ab0d56753aaec0c776aabb0c08.png',
        }}
        style={styles.logo}
      />

      <Text style={styles.headerText}>Enter PIN</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(input) => (otpInputs[index] = input)}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleInputChange(index, text)}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleVerification}>
        <Text style={styles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>
      <Footer />
    </View>
  );
};

export default OtpPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  loginFooterText: {
    color: 'black',
    margin: 5,
    fontSize: 12,
    position: 'absolute',
    bottom: 10,
  },
  forgotPasswordImage: {
    width: 70,
    height: 40,
    margin: 5,
    position: 'absolute',
    bottom: 20,
  },
  headerText: {
    fontSize: 24,
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 50,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  otpInput: {
    height: 50,
    width: '20%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 20,
    marginHorizontal: 5,
  },
  button: {
    backgroundColor: '#ff9500',
    padding: 14,
    borderRadius: 8,
    marginTop: 40,
    marginBottom: 30,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
