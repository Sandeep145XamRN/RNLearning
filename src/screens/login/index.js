import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import localStyles from './styles';
import CommonModal from '../../components/commonModal';

const Login = props => {
  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity
        style={localStyles.button}
        onPress={() => {
          //props.navigation.navigate('Otp');
          props.navigation.openDrawer();
        }}>
        <Text>Touch Here</Text>
      </TouchableOpacity>
      <CommonModal />
    </View>
  );
};

export default Login;
