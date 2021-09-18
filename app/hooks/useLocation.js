import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export default function useLocation() {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) return;

    try {
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      setLocation({ latitude, longitude });
    } catch (error) {}
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
}
