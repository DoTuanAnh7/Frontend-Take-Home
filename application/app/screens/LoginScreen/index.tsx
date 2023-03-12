import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  Alert,
  Dimensions,
  Image,
  ImageBackground,
  Keyboard,
  Platform,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {useDispatch, useSelector} from 'react-redux';
import InputEmail from '../../components/forms/InputEmail';
import InputPassword from '../../components/forms/InputPassword';
import Loading from '../../components/Loading';
import {login} from '../../redux/auth/actions';
import {styles} from './style';

const HEIGHT = Dimensions.get('window').height;

const LoginScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const inputRef = useRef(null);

  const submitLogin = async (email: string, password: string) => {
    const onResponse = async (res: any) => {
      const access_token = res.access_token;
      const userInfo = JSON.stringify(res.userInfo);
      await AsyncStorage.multiSet([
        ['idToken', access_token],
        ['userInfo', userInfo],
      ]);
      access_token && navigation.navigate('Dashboard');
    };

    const onError = (err: {message: string}) => {
      Alert.alert(`Error ${err.message}`);
    };

    dispatch(
      login({
        data: {email: email, password: password},
        onResponse,
        onError,
      }),
    );
  };

  return (
    <KeyboardAwareScrollView
      style={{
        backgroundColor: '#FFFFFF',
        flex: 1,
      }}>
      <StatusBar backgroundColor="#082E31" barStyle="light-content" />
      {auth.login.loading && <Loading />}
      <View
        style={{
          backgroundColor: '#FFFFFF',
          flex: 1,
          height: HEIGHT * 1.02,
        }}>
        <ImageBackground
          source={require('../../../assets/images_assets/Finalshape.png')}
          style={styles.Image}>
          <Text style={styles.BrandText}>FE Take Home</Text>
          <Text style={styles.SingupText}>Log in</Text>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: -HEIGHT * 0.02,
              height: styles.GFicons.height / 2,
            }}
          />
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
              ref={inputRef}
              autoCapitalize="none"
              onChangeText={value => setUsername(value)}
              placeholder="Type in your username"
              value={username}
            />
            <InputPassword
              onChangeText={value => setPassword(value)}
              placeholder="Type in your password"
              value={password}
            />
          </DropShadow>
          <Text style={styles.Textpassvalidation}>
            Min. 8 chars long incl. 1x : Lower case, Upper case, Number, Special
            char
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('RecoveryScreen')}>
            <Text style={styles.footertext}>Forgot your password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => submitLogin(username, password)}
            style={styles.TouchableButton}>
            <Text style={styles.Loginbuttontext}>Log In</Text>
          </TouchableOpacity>
          <View style={{justifyContent: 'center', flexDirection: 'row'}}>
            <Text style={styles.footertext1}>Are you new here?{'  '}</Text>
            <Text
              style={styles.footertext2}
              onPress={() => navigation.navigate('RegisterScreen')}>
              Create account
            </Text>
          </View>
        </ImageBackground>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
