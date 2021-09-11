import React from 'react';
import * as Yup from 'yup';
import { StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker,
} from '../components/forms';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  category: Yup.object().nullable().required().label('Category'),
  description: Yup.string().label('Description'),
});

const items = [
  {
    value: 1,
    label: 'Furniture',
  },
  {
    value: 2,
    label: 'Clothing',
  },
  {
    value: 3,
    label: 'Camera',
  },
];

function ListingEditScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          category: null,
          description: '',
        }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          maxLength={255}
          name='title'
          placeholder='Title'
        />
        <AppFormField
          autoCapitalize='none'
          maxLength={8}
          autoCorrect={false}
          name='price'
          keyboardType='numeric'
          placeholder='Price'
        />
        <AppFormPicker name='category' placeholder='Category' items={items} />
        <AppFormField
          maxLength={255}
          multiline
          numberOfLines={3}
          autoCapitalize='none'
          autoCorrect={false}
          name='description'
          placeholder='Description'
        />
        <SubmitButton title='Post' />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
