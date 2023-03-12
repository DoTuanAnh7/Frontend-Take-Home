import React, {useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import Toast from 'react-native-easy-toast';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './style';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
// import { doResetPassword, doResetPasswordNotify } from "../../redux/users/actions"
import * as Sentry from '@sentry/react-native';
import InputPassword from '../../components/forms/InputPassword';
import Loading from '../../components/Loading';

export default function index({route, navigation}) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const toastPassword = useRef();
  const {email, code} = route.params;
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  const rjxpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W])\S{8,99}$/;
  const isPasswordValid = rjxpass.test(password1);

  const updatePassword = () => {
    if (!isPasswordValid) {
      toastPassword.current.show('Please enter a strong password', 1000);
    } else if (password1 !== password2) {
      toastPassword.current.show('Please ensure that passwords match', 1000);
    } else {
      const onResponse = async response => {
        console.log(response);
        dispatch(
          doResetPasswordNotify({
            data: {
              email,
            },
            onResponse: response => {
              console.log(response);
            },
            onError: error => {
              console.log(error);
              Sentry.captureException(error);
            },
          }),
        );
        navigation.navigate('LoginScreen', {resetPassword: true});
      };
      const onError = async error => {
        console.log('error heheheherrre', error);
        const {code, message} = error;
        toastPassword.current.show(message, 1000);
      };
      dispatch(
        doResetPassword({
          data: {
            email: email,
            confirmationCode: code,
            newPassword: password1,
          },
          onResponse,
          onError,
        }),
      );
    }
  };

  return (
    <KeyboardAwareScrollView
      style={{
        backgroundColor: '#FFFFFF',
      }}>
      {user.resetPassword.loading && <Loading />}
      <StatusBar backgroundColor="#082E31" barStyle="light-content" />
      <View
        style={{
          backgroundColor: '#FFFFFF',
          flex: 1,
          height: HEIGHT * 1.02,
        }}>
        <Image
          source={require('../../../assets/images_assets/Pathfirstscreen.png')}
          style={styles.Image}
        />
        <Text style={styles.SingupText}>Forgot your password?</Text>
        <Text
          // style={styles.SingupText}
          style={{
            alignSelf: 'center',
            fontSize: 13,
            marginTop: HEIGHT * 0.013,
            color: '#000000',
            opacity: 0.57,
            textAlign: 'center',
          }}>
          Enter a new, strong, password
        </Text>
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
          <InputPassword
            value={password1}
            placeholder="Enter new password"
            onChangeText={value => setPassword1(value)}
          />
          <InputPassword
            value={password2}
            placeholder="Re-enter new password"
            onChangeText={value => setPassword2(value)}
          />
        </DropShadow>

        <Text style={styles.Textpassvalidation}>
          Minimum 8 characters long incl:{'\n'}1x: Lower case, Upper case,
          Number, Special character
        </Text>
        <TouchableOpacity
          style={
            password1 && password2 ? styles.TouchableButton : styles.GreyButton
          }
          disabled={!(password1 && password2)}
          onPress={() => updatePassword()}>
          <Text
            style={{
              color: '#000000',
              fontSize: 14,
            }}>
            Change Password
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.footertext2}>Go back to start</Text>
        </TouchableOpacity>
        <Toast
          position="center"
          ref={toastPassword}
          style={{backgroundColor: 'black'}}
        />
      </View>
    </KeyboardAwareScrollView>
  );
}
