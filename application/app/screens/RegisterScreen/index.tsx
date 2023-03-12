import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useRef, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {styles} from './style.js';

import {
  Dimensions,
  ImageBackground,
  Keyboard,
  Platform,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import * as Keychain from 'react-native-keychain';
import {useDispatch, useSelector} from 'react-redux';
import ToggleSwitch from 'toggle-switch-react-native';
// import {
//     authenticateCredentials,
//     getBiometryTypeLabel,
//     getSupportedBiometryType,
//     KEYCHAIN_OPTIONS,
// } from '../../session.js';
// import { doCognitoRegister, doDbRegister } from "../../redux/users/actions"
import InputEmail from '../../components/forms/InputEmail';
import InputPassword from '../../components/forms/InputPassword';
import Loading from '../../components/Loading';
// import {SIGN_UP} from '../../events';
// import {sendCustomEvent} from '../../helper/sendCustomEvent';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function index({navigation}) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onRegister = (email: string, password: string) => {
    navigation.navigate('RegisterScreenStep2', {
      email: email,
      password: password,
    });
  };
  const Register = () => {
    Keyboard.dismiss();
    let rjxemail =
      /([a-zA-Z0-9]+)([\_\.\-\+{1}])?([a-zA-Z0-9]+)\@([a-zA-Z0-9]+)([\.])([a-zA-Z\.]+)/;
    let isEmailValid = rjxemail.test(email);

    let rjxpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W])\S{8,99}$/;
    let isPasswordValid = rjxpass.test(password);

    if (email === '') {
      Alert.alert('Please enter email');
      return false;
    } else {
      onRegister(email, password);
    }
  };

  return (
    <KeyboardAwareScrollView
      style={{
        backgroundColor: '#FFFFFF',
        flex: 1,
      }}>
      <View
        style={{
          backgroundColor: '#FFFFFF',
          flex: 1,
          height: HEIGHT * 1,
        }}>
        <StatusBar backgroundColor="#082E31" barStyle="light-content" />

        <ImageBackground
          source={require('../../../assets/images_assets/Finalshape.png')}
          style={styles.Image}>
          <Text style={styles.BrandText}>FE Take Home</Text>

          <Text style={styles.SingupText}>Create an Account now</Text>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: -HEIGHT * 0.02,
              height: styles.GFicons.height / 2,
            }}></View>

          <View>
            <DropShadow
              style={{
                ...Platform.select({
                  android: {
                    backgroundColor: '#FFFFFF',
                    color: 'black',
                    shadowColor: '#D8D8D8',
                    shadowOpacity: 2,
                    shadowRadius: 5,
                    shadowOffset: {width: 0, height: -3},
                  },
                }),
              }}>
              <InputEmail
                value={email}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholder="Type in your email"
                onChangeText={value => setEmail(value)}
              />
              <InputPassword
                value={password}
                placeholder="Type in your password"
                onChangeText={value => setPassword(value)}
              />
            </DropShadow>

            <Text style={styles.Textpassvalidation}>
              Min. 8 chars long incl. 1x : Lower case, Upper case, Number,
              Special char
            </Text>

            <View style={{}}>
              <TouchableOpacity
                onPress={Register}
                style={styles.TouchableButton}>
                <Text style={styles.RegisterButtonText}>Register</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginTop: HEIGHT * 0.025,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Text style={styles.footertext}>
                Already have an account?{'  '}
              </Text>
              <Text
                style={styles.footertext2}
                onPress={() => navigation.navigate('LoginScreen')}>
                Sign In
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </KeyboardAwareScrollView>
  );
}
