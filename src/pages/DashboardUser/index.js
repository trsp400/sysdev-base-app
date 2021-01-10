import React, { useState, useEffect } from 'react';
import {
  StatusBar,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Descriptions,
  DescriptionName,
  DescriptionLocation,
  Avatar,
  Header,
} from './styles';

export default function DashboardUser({ navigation }) {
  Geocoder.init('AIzaSyCW4nTNB9yHvvjDpVqYik7QbC15ZIEXSoE');

  // AsyncStorage.clear();

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [loading, setLoading] = useState(false);
  const [lastPosition, setLastPosition] = useState('unknown');
  const [currentPosition, setCurrentPosition] = useState('unknown');

  const storeLocation = async value => {
    try {
      const store = await AsyncStorage.setItem('@location', value);
    } catch (err) {
      console.log(err);
    }
  };

  const retrieveLocation = async () => {
    try {
      const value = await AsyncStorage.getItem('@location');

      if (value != null) {
        setLastPosition(value);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleLocation = async () => {
    setLoading(true);
    Geolocation.getCurrentPosition(
      ({ coords }) => {
        const { latitude, longitude } = coords;
        setLatitude(latitude);
        setLongitude(longitude);

        Geocoder.from({ lat: latitude, lng: longitude })
          .then(res => {
            const address = res.results[0].formatted_address;
            const city = address.split('-');
            const neighborhood = city[1].split(',');
            setCurrentPosition(neighborhood[0]);
            storeLocation(neighborhood[0]);
          })
          .catch(err => {
            console.log(err);
          });
        setLoading(false);
      },
      () => {
        Alert.alert(
          'OPS!',
          'Não pude acessar sua localização, tente novamente daqui a pouco!',
          [
            {
              text: 'Ok',
              onPress: () => {
                setLoading(false);
              },
            },
          ]
        );
      },
      { enableHighAccuracy: false, timeout: 5000, maximumAge: 1000 }
    );
  };

  useEffect(() => {
    retrieveLocation();
  }, []);

  useEffect(() => {
    retrieveLocation();
  }, [currentPosition]);

  return (
    <Container>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <Header>
        <Descriptions>
          <DescriptionName>Olá Thiago,</DescriptionName>
          <TouchableOpacity
            style={{ flexDirection: 'row' }}
            onPress={handleLocation}
          >
            {/* {console.log('currentPosition: '+currentPosition)}
                        {console.log('lastPosition: '+ lastPosition)} */}
            {lastPosition !== 'unknown' ? (
              <DescriptionLocation>{lastPosition}</DescriptionLocation>
            ) : (
              <DescriptionLocation>Atualizar localização!</DescriptionLocation>
            )}
            <Icon
              name="keyboard-arrow-down"
              size={15}
              style={{ marginTop: 2 }}
            />
            {loading ? <ActivityIndicator color="#50a45a" /> : null}
          </TouchableOpacity>
          {/* {hidden == true ? null : currentPosition ? (
            currentPosition == 'unknown' ? null : (
              <GetAddress>
                <CloseButton onPress={handleClose}>
                  <Icon name="close" color="#000" size={20} />
                </CloseButton>
                <Location>{currentPosition}</Location>
              </GetAddress>
            )
          ) : null} */}
        </Descriptions>
        <TouchableOpacity>
          <Avatar
            source={{ uri: 'https://api.adorable.io/avatar/50/thiago' }}
          />
        </TouchableOpacity>
      </Header>
    </Container>
  );
}

DashboardUser.navigationOptions = {
  tabBarLabel: 'Dashboard',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="dashboard" size={20} color={tintColor} />
  ),
};
