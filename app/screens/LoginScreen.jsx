import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import ErrorMessage from '../components/ErrorMessage';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppTextInput
              autoCapitalize='none'
              autoCorrect={false}
              icon='email'
              keyboardType='email-address'
              onBlur={() => setFieldTouched('email')}
              onChangeText={handleChange('email')}
              placeholder='Email'
              textContentType='email'
            />
            <ErrorMessage visable={touched.email} error={errors.email} />
            <AppTextInput
              autoCapitalize='none'
              autoCorrect={false}
              icon='lock'
              keyboardType='email-address'
              onBlur={() => setFieldTouched('password')}
              onChangeText={handleChange('password')}
              placeholder='Password'
              secureTextEntry
              textContentType='password'
            />
            <ErrorMessage visable={touched.password} error={errors.password} />

            <AppButton title='Login' onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  container: {
    padding: 10,
  },
});

export default LoginScreen;