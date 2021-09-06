import { Platform } from 'react-native';
import colors from './colors';

const platformStyles = Platform.select({
  android: {
    fontFamily: 'Roboto',
  },
  ios: {
    fontFamily: 'Avenir',
  },
  web: {
    fontFamily: 'Segoe UI',
  },
});

const defaultStyles = {
  colors,
  text: {
    color: colors.dark,
    fontSize: 18,
    ...platformStyles,
  },
};

export default defaultStyles;
