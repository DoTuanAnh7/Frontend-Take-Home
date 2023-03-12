import React, { useState } from "react";
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  Dimensions
} from "react-native";
import { Icon } from '@rneui/themed';
import * as commonStyle from '../../includes/main-style';

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const InputPassword = (props) => {
  const [hidePass, setHidePass] = useState(true);
  const [changepass, setChangepass] = useState(false);
  const {
    value,
    placeholder,
    onChangeText,
    onFocus
  } = props;
  return (
    <View
      style={styles.PasswordText}
    >
      {changepass ? <Image
        source={require('../../../assets/images_assets/keyicon.png')}
        style={styles.Textinputicons}
      /> :
        <Image
          source={require('../../../assets/images_assets/keyicondark.png')}
          style={styles.Textinputicons}
        />}
      <TextInput
        style={{
          width: WIDTH / 2,
          fontSize: 12.5,
          color: '#000000',
        }}
        placeholder={placeholder}
        placeholderTextColor={changepass ? "#000000" : "gray"}
        secureTextEntry={hidePass ? true : false}
        onChangeText={text => {
          onChangeText(text)
          if (text.length > 0) {
            setChangepass(true)
          } else {
            setChangepass(false)
          }
        }}
        value={value}
        autoCapitalize="none"
        onFocus={onFocus}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  PasswordText: {
    flexDirection: 'row',
    height: HEIGHT * 0.078,
    width: WIDTH / 1.16,
    marginTop: HEIGHT * 0.017,
    alignSelf: 'center',
    textAlign: 'left',
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    color: "black",
    shadowColor: '#D8D8D8',
    shadowOpacity: 2,
    shadowRadius: 5,
    alignItems: 'center',
  },
  Textinputicons: {
    padding: HEIGHT * 0.01,
    height: 23,
    width: 25,
    margin: HEIGHT * 0.028,

  },
  EyeButton: {
    flex: 1,
  },
});

export default InputPassword;

