import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const getHeader = async () => {
  const getToken = async () => {
    return await AsyncStorage.getItem('idToken');
  };
  return getToken().then(token => {
    return {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };
  });
};

export const getApi = async (url: string, params: any) => {
  const headers = await getHeader();
  return axios({
    method: 'GET',
    url,
    timeout: 1000 * 60 * 5,
    headers,
    params,
  }).catch(function (error) {
    console.log(`API error: ${error}`);
    return Promise.reject(error);
  });
};

export const deleteApi = async (url, data) => {
  const headers = await getHeader();
  return axios({
    method: 'DELETE',
    url,
    data,
    timeout: 1000 * 60 * 5,
    headers,
  }).catch(function (error) {
    console.log(`API error: ${error}`);
    return Promise.reject(error);
  });
};

export const postApi = async (url: string, data: any) => {
  const headers = await getHeader();
  return axios({
    method: 'POST',
    url,
    data,
    timeout: 1000 * 60 * 5,
    headers,
  }).catch(function (error) {
    console.log(`API error: ${error}`);
    return Promise.reject(error);
  });
};

export const putApi = async (url: string, data: any) => {
  const headers = await getHeader();
  return axios({
    method: 'PUT',
    url,
    data,
    timeout: 1000 * 60 * 5,
    headers,
  }).catch(function (error) {
    console.log(`API error: ${error}`);
    return Promise.reject(error);
  });
};

export const patchApi = async (url: string, data: any) => {
  const headers = await getHeader();
  return axios(
    data
      ? {
          method: 'PATCH',
          url,
          data,
          timeout: 1000 * 60 * 5,
          headers,
        }
      : {
          method: 'PATCH',
          url,
          timeout: 1000 * 60 * 5,
          headers,
        },
  ).catch(function (error) {
    console.log(`API error: ${error}`);
    return Promise.reject(error);
  });
};
