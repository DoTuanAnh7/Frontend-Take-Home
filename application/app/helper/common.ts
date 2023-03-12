import AsyncStorage from '@react-native-async-storage/async-storage';

export const getUserInfomation = async () => {
  try {
    const getUserInfo = await AsyncStorage.getItem('userInfo');
    const userInfo = await JSON.parse(getUserInfo);
    return userInfo;
  } catch (error) {
    console.log('Can not get user info', error);
  }
};
