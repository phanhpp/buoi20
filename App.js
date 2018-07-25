import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {createStackNavigator} from 'react-navigation'
import Register from './src/components/screens/Register';
import Login from './src/components/screens/Login';
import Home from './src/components/screens/Home';
import Detail from './src/components/screens/Detail'

const  wid = Dimensions.get('window').width
const  hei = Dimensions.get('window').height
export default class App extends React.Component {
  render() {
    const Main = createStackNavigator(
      {
       Login,
       home: Home,
       detail: Detail,
       register: Register,
       

      } ,
     {headerMode : "none"}
  )
    return (
      <View style={styles.container}>
      <Main/> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: hei,
    width: wid,
  },
});
