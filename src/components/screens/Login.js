import React, { Component } from 'react';
import {View, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Button, Card, CardSection, Input, Spinner } from '../common'
class Login extends Component {
    // state = { email: '', password: '', error: '', loading: false };
    constructor(props) {
      super(props)
      this.state = {
        error  : "",
        loading : false,
         user: {
           email: '',
           password: ''
         }
        
      }
    }
  
    onButtonPress() {
      const { email, password } = this.state;
      const url ='http://api.keetool.xyz/login ';
  
      this.setState({ error: '', loading: true });
      axios.post(url, this.state.user)
        .then(res=>
          this.onLoginSuccess(res)
        )
        .catch(err => this.onLoginFail(err)
        );
        ;
    }
  
    onLoginFail(err) {
      console.log(this.state.user)
      console.log(err.response.data)
      this.setState({ error: 'Authentication Failed', loading: false });
    }
  
    onLoginSuccess(res) {
      this.setState({
        email: '',
        password: '',
        loading: false,
        error: '',

      });

      Alert.alert("Thong bao", "Dang nhap thanh cong",
      [{
        text : "OK", onPress : () => this.props.navigation.navigate('home')
      }]
    )
    }
  // determine when spinner run
    renderButton() {
      if (this.state.loading) {
        return <Spinner size="small" />;
      }
  
      return (
        <Button onPress={this.onButtonPress.bind(this)}>
          Log in
        </Button>
      );
    }
  
    render() {
      return (
        <Card>
          <CardSection>
            <Input
              placeholder="user@gmail.com"
              label="Email"
              value={this.state.user.email}
              onChangeText={email => this.setState({user:{...this.state.user,email: email}})}
            />
          </CardSection>
  
          <CardSection>
            <Input
              secureTextEntry
              placeholder="password"
              label="Password"
              value={this.state.user.password}
              onChangeText={password => this.setState({user:{...this.state.user,password: password}})}
            />
          </CardSection>
  
          <Text style={styles.errorTextStyle}>
            {this.state.error}
          </Text>
  
          <CardSection>
            {this.renderButton()}
          </CardSection>
       

          <View>
            <Text>Don't have an account?</Text>
            <TouchableOpacity
            onPress = {()=>  this.props.navigation.navigate('register')}
            >
            <Text>Register now!</Text>
            </TouchableOpacity>
          </View>
 </Card>
      );
    }
  }
  
  const styles = {
    errorTextStyle: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
    }
  };
  
  export default Login;
  