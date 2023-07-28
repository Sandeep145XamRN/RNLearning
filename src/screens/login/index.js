import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import localStyles from './styles';

const Login = props => {
  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity
        style={localStyles.button}
        onPress={() => {
          props.navigation.navigate('Otp');
        }}>
        <Text>Touch Here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
