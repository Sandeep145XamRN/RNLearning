/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/login';
import SignUp from './src/screens/signUp';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomIcon from 'react-native-vector-icons/AntDesign';
import Otp from './src/screens/otp';


type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const Tab = createBottomTabNavigator();
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Stack = createNativeStackNavigator();


  function MyTabs() {
    return (
      <Tab.Navigator 
      screenOptions={({  }) => {
        return {
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <CustomIcon name="windows" size={20} color="red" />

            )
          },
        }


      }}
     >
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="SignUp" component={SignUp} />
      </Tab.Navigator>
    );
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'transparent'}}>
      {/* navigation declaration */}
      <NavigationContainer>
      <Stack.Navigator screenOptions={{
        //headerShown: false
      }}>
        <Stack.Screen name="MainScreen" component={MyTabs} />
        <Stack.Screen name="Otp" component={Otp} />
      </Stack.Navigator>
    </NavigationContainer>

      {/* <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={'red'}
      /> */}

      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}> */}
      {/* <Header /> */}
      {/* <View style={{flex: 0.25, backgroundColor: 'white'}}>
        <Image
          style={styles.tinyLogo}
          source={{uri: 'https://picsum.photos/200/300'}}
        />
        <Text style={styles.headerText}>Login</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder="You can type in me"
          onChangeText={text => console.warn(text)}
        />
      </View>
      <View
        style={{
          flex: 0.25,
          backgroundColor: 'yellow',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button
          onPress={() => {
            Alert.alert('Simple Button pressed');
          }}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <View style={{height: 20}}></View>
        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            width: 120,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius:25
          }}
          onPress={() => {
            Alert.alert('TouchableOpacity Button pressed');
          }}>
          <Text>Touch Here</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 0.25, backgroundColor: 'red'}}></View>
      <View style={{flex: 0.25, backgroundColor: 'yellow'}}></View> */}
      {/* <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit1 <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View> */}
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  tinyLogo: {
    // width: 150,
    height: '70%',
  },
  headerText: {
    fontSize: 24,
    color: 'black',
  },
});

export default App;
