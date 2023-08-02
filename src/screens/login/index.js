import React, {useEffect, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import localStyles from './styles';
import CommonModal from '../../components/commonModal';
import styles from './styles';

const Login = props => {
  const [email, setEmail] = useState('');
  useEffect(() => {}, []);

  const loginAction = async () => {
    var formdata = new FormData();
    formdata.append('email', email);
    formdata.append('password', 'test@123');
    formdata.append('role', 'restaurant');
    formdata.append('fcm_token', 'restaurant');
    console.warn('formdata', formdata);
    var requestOptions = {
      method: 'POST',
      body: formdata,
      // redirect: 'follow',
    };

    fetch('https://2topadmindev.clienturls.com/api/login', requestOptions)
      .then(response => {
        console.log('response1', response);
        return response.text();
      })
      .then(result => console.log('result', result))
      .catch(error => console.log('error', error));
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={txt => setEmail(txt)}
        placeholder="Enter your email"
      />

      <TextInput style={styles.input} placeholder="Enter your password" />

      <TouchableOpacity
        style={localStyles.button}
        onPress={() => {
          //props.navigation.navigate('Otp');
          // props.navigation.openDrawer();
          loginAction();
        }}>
        <Text>Login</Text>
      </TouchableOpacity>
      <CommonModal />
    </View>
  );
};

export default Login;
