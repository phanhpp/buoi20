import React from 'react';
import { StyleSheet, Text, View, Dimensions, Button, Alert } from 'react-native';
import {CardSection, Input} from '../common'
import axios from 'axios';
const  wid = Dimensions.get('window').width
const  hei = Dimensions.get('window').height
export default class Register extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
       user: {
         name: '',
         username: '',
         phone: '',
         email: '',
         password: ''
       }
      
    }
  }
  register = () => {
    // componentDidMount(){
    const url ='http://api.keetool.xyz/user'
    axios.post(url, this.state.user)
    .then(res => {
      Alert.alert("Thong bao", "Dang ki thanh cong",
       [{
         text : "OK", onPress : () => this.props.navigation.goBack()
       }]
    )
    })
    .catch(err => {
      alert('failed')
      console.log(err.response.data)
  })
    

  }
  
    render() {
    
  
    return (
      <View style={styles.container}>

      <CardSection>
                 <Input
                 placeholder = 'Ex.Adam'
                 label = ' name'
                //  value = {this.state.data.name}
                 onChangeText={txt => this.setState({user:{...this.state.user,name: txt}}) }

                 />
             </CardSection> 
             <CardSection>
                 <Input
                 placeholder = 'username'
                 label = ' username'
                //  value = {this.state.user.username}
                 onChangeText={txt => this.setState({user:{...this.state.user,username: txt}}) }

                 />
             </CardSection> 
             <CardSection>
                 <Input
                 placeholder = '000000123'
                 label = ' phone'
                //  value = {this.state.user.username}
                 onChangeText={txt => this.setState({user:{...this.state.user,phone: txt}}) }

                 />
             </CardSection> 
             <CardSection>
                 <Input
                 placeholder = 'Ex.Adam@gmail.com'
                 label = ' email'
                //  value = {this.state.user.email}
                 onChangeText={txt => this.setState({user:{...this.state.user,email: txt}}) }

                 />
             </CardSection> 
             <CardSection>
                 <Input
              
                 placeholder = ''
                 label = ' password'
                //  value = {this.state.user.pass}
                 onChangeText={txt => this.setState({user:{...this.state.user,password: txt}}) }

                 />
             </CardSection> 
             
              <Button title= {'Post Data'}
              backgroundColor= 'rgba(0,0,0,0)'
              color= "rgba(0,122,255,1)"
             onPress= {this.register}/>

             
           
            
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 20,
    height: hei
  },
  containerStyle:{
    
    borderBottomWidth: 1,
     padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',//
    flexDirection: 'row',//
    borderColor: '#ddd',
    position:'relative'
   }
});
