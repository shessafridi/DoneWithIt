import { StyleSheet } from 'react-native';

import React from 'react';
import AppPicker from '../AppPicker';
import { useFormikContext } from 'formik';
import ErrorMessage from './ErrorMessage';

function AppFormPicker({ name, width, ...otherProps }) {
  const { setFieldValue, setFieldTouched, touched, errors, values } =
    useFormikContext();

  return (
    <>
      <AppPicker
        name={name}
        onBlur={() => setFieldTouched(name)}
        selectedItem={values[name]}
        onSelectItem={item => setFieldValue(name, item)}
        width={width}
        {...otherProps}
      />
      <ErrorMessage visable={touched[name]} error={errors[name]} />
    </>
  );
}

export default AppFormPicker;
