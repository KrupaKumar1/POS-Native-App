import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Footer from '../components/Footer';
// ... (Your other imports)

const LoginPage = ({navigation}) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      // .matches(
      //   /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]/,
      //   'Password must include at least one lowercase letter, one uppercase letter, one number, and one special character',
      // )
      .required('Password is required'),
  });

  const handleEmailLogin = (values) => {
    // Handle your email/password authentication logic
    console.log('Email:', values.email, 'Password:', values.password);
    navigation.navigate('OtpPage');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}>
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: 'https://verasquare.in/0daf71ab0d56753aaec0c776aabb0c08.png',
          }}
          style={styles.logo}
        />
      </View>
      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={validationSchema}
        onSubmit={(values) => handleEmailLogin(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            {/* Email Input */}

            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

            {/* Password Input */}
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

            {/* Login Button */}
            <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
              <Text style={styles.loginButtonText}>Log In</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <Footer />
    </KeyboardAvoidingView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  // ... (Your other styles)

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },

  errorText: {
    color: 'red',
    marginBottom: 4,
    marginTop: -8, // To provide a bit of spacing between the input and error text
    alignSelf: 'flex-start', // Align the error text to the left
  },
  input: {
    height: 50,
    width: '100%',
    backgroundColor: '#f0f0f0',
    marginVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  loginButton: {
    backgroundColor: '#ff9500',
    padding: 14,
    borderRadius: 8,
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
  },
  forgotPassword: {
    color: '#333',
    marginTop: 10,
  },
});
