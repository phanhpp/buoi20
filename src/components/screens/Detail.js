import React, {Component} from 'react';
import {View, Text, Button, Image, Dimensions, StyleSheet} from 'react-native';
import axios from 'axios';
import {Header, Card, Spinner} from '../common'
const  wid = Dimensions.get('window').width
const  hei = Dimensions.get('window').height
class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
           loading: false,
          products : {},
        }
      }
      componentDidMount(id) {
        this.setState({loading: true})
        let url = 'http://colorme.vn:8000/products/' + id + '/content'
      axios.get(url)
      .then((res )=> {
        //   alert("thanh cong")
       this.setState({
           products: res.data,
           loading: false })
      })
      .catch((err)=> {
        alert('err')
      })
      }

      renderSpinner = ()=> {
        if(this.state.loading) {
          return <Spinner />
        }
      }
    render() {
        return(

            <View style={styles.container} >
                {/* <Button title= {'Get Data'}
         backgroundColor= 'rgba(0,0,0,0)'
         color= "rgba(0,122,255,1)"
        onPress= {() =>this.getProduct(this.props.navigation.state.params.id)}/> */}
               {/* <Image 
          resizeMode= 'contain'
          style = {{ flex: 3,height: 300, width: 350, marginVertical: 10}}
          source= {{uri:this.props.navigation.state.params.uri}}/>
               <View style = {styles.containerStyle}>
               <Text style = {styles.textStyle}>Name: {this.props.navigation.state.params.title}</Text>
               <Text style = {styles.textStyle}>Description: {this.props.navigation.state.params.des}</Text>
               <Text style = {styles.textStyle}>Author: {this.props.navigation.state.params.auth}</Text>
               <Button
               color=  'blue'
                title = {'Back'}
                onPress = {()=> {this.props.navigation.goBack()}}/> */}
                 {/* </View> */}
              
                 {this.renderSpinner()}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      height: hei,
      width: wid,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 30,
      flex: 3
    },
    
      containerStyle:{
      flex: 1
      },
      textStyle: {
        fontWeight: 'normal',
        fontSize: 20,
       
      }
  
  });
export default Detail;
