import React, { useState } from "react";
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  Dimensions
} from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const InputEmail = React.forwardRef((props, ref) => {
  const [change, setChange] = useState(false);
  const {
    value,
    placeholder,
    onChangeText,
    onFocus,
    keyboardType
  } = props;

  return (
    <View
      style={styles.Textinputview}
    >
      {change ? <Image
        source={require('../../../assets/images_assets/mailiconnew.png')}
        style={styles.Textinputicons1}
      /> :
        <Image
          source={require('../../../assets/images_assets/mailicondark.png')}
          style={styles.Textinputicons1}
        />}
      <TextInput
        style={{
          color: '#000000',
          width: 200, fontSize: 12.5
        }}
        placeholder={placeholder}
        placeholderTextColor={change ? "#000000" : "gray"}
        onChangeText={text => {
          onChangeText(text)
          if (text.length > 0) {
            setChange(true)
          } else {
            setChange(false)
          }
        }}
        value={value}
        autoCapitalize="none"
        keyboardType={keyboardType}
        onFocus={onFocus}
        ref={ref}
      />
    </View>
  )
})
const styles = StyleSheet.create({
  Textinputview: {
    flexDirection: 'row',
    height: HEIGHT * 0.078,
    width: WIDTH / 1.16,
    marginTop: HEIGHT * 0.01,
    margin: HEIGHT * 0.013,
    alignSelf: 'center',
    textAlign: 'left',
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    color: "black",
    shadowColor: '#D8D8D8',
    shadowOpacity: 2,
    shadowRadius: 5,
  },
  Textinputicons1: {
    padding: HEIGHT * 0.01,
    height: 20,
    width: 25,
    margin: HEIGHT * 0.028
  },
});

export default InputEmail;

