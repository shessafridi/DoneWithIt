import React from 'react';
import * as Yup from 'yup';
import * as Location from 'expo-location';
import { StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker,
} from '../components/forms';
import CategoryPickerItem from '../components/CategoryPickerItem';
import FormImagePicker from './../components/forms/FormImagePicker';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label('Title'),
  images: Yup.array()
    .of(Yup.string())
    .length(1, 'Please select at least one image.')
    .label('Image'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  category: Yup.object().nullable().required().label('Category'),
  description: Yup.string().label('Description'),
});

const categories = [
  {
    backgroundColor: '#fc5c65',
    icon: 'floor-lamp',
    label: 'Furniture',
    value: 1,
  },
  {
    backgroundColor: '#fd9644',
    icon: 'car',
    label: 'Cars',
    value: 2,
  },
  {
    backgroundColor: '#fed330',
    icon: 'camera',
    label: 'Cameras',
    value: 3,
  },
  {
    backgroundColor: '#26de81',
    icon: 'cards',
    label: 'Games',
    value: 4,
  },
  {
    backgroundColor: '#2bcbba',
    icon: 'shoe-heel',
    label: 'Clothing',
    value: 5,
  },
  {
    backgroundColor: '#45aaf2',
    icon: 'basketball',
    label: 'Sports',
    value: 6,
  },
  {
    backgroundColor: '#4b7bec',
    icon: 'headphones',
    label: 'Movies & Music',
    value: 7,
  },
  {
    backgroundColor: '#a55eea',
    icon: 'book-open-variant',
    label: 'Books',
    value: 8,
  },
  {
    backgroundColor: '#778ca3',
    icon: 'application',
    label: 'Other',
    value: 9,
  },
];

function ListingEditScreen(props) {
  const getLocation = async () => {};

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          images: [],
          category: null,
          description: '',
        }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name='images' />
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
        <AppFormPicker
          name='category'
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder='Category'
          items={categories}
        />
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
