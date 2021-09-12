import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useFormikContext } from 'formik';
import ImageInput from './../ImageInput';
import ErrorMessage from './ErrorMessage';

function FormImageField({ name }) {
  const { setFieldValue, setFieldTouched, touched, errors, values } =
    useFormikContext();

  const handleAddImage = image => {
    console.log('Adding Image', image, values[name]);
    setFieldValue(name, [...values[name], image]);
  };

  const handleDelete = image => {
    Alert.alert('Delete', 'Are you sure you want to delete this image', [
      {
        text: 'No',
      },
      {
        text: 'Yes',
        onPress: () => setFieldValue(values[name].filter(img => img !== image)),
      },
    ]);
  };

  return (
    <>
      <ImageInput
        images={values[name]}
        onImageSelect={handleAddImage}
        onDelete={handleDelete}
        onBlur={() => setFieldTouched(name)}
      />
      <ErrorMessage visable={touched[name]} error={errors[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default FormImageField;
