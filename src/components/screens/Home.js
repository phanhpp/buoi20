import React from 'react';
import {Dimensions, StyleSheet, Text, View, Button, FlatList, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Spinner} from '../common'
const  wid = Dimensions.get('window').width
const  hei = Dimensions.get('window').height
export default class Home extends React.Component {
 
  constructor(props) {
    super(props)
    this.state = {
       loading: false,
      products : [],
      
    }
  
  }
  componentDidMount() {
    const url='http://colorme.vn:8000/products'
   {this.setState({loading: true})}
    axios.get(url)
    .then((res)=> {
      // // this.setState({
        
      // //   products : res.data.products
      // })
      // alert("Thanh cong")

      this.onLoadingSuccess(res)
    })
    .catch((err)=> {
      alert('Get API Failed')
    })
  }
  onLoadingSuccess = (res) => {
  
    this.setState({
        
        products : res.data.products,
        loading: false
      })
  }
  renderSpinner = ()=> {
    if(this.state.loading) {
      return <Spinner />
    }
  }
    render() {
    return (
      <View style={styles.container}>
        {/* <Button title= {'Get Data'}
         backgroundColor= 'rgba(0,0,0,0)'
         color= "rgba(0,122,255,1)" */}
        onPress= {this.props.navigation.navigate}/>
        <FlatList
        data = {this.state.products}
        keyExtractor = { (item,i)=> `${i}`}
        renderItem = {({item}) => (
         
          <TouchableOpacity
          onPress = {()=> this.props.navigation.navigate('detail', {title : item.title , uri : item.thumb_url,des: item.description, auth: item.author.name})}
           style = {styles.containerStyle}> 
           
            <Text style = {styles.textStyle}>{item.title}</Text>
          <Image 
          resizeMode= 'contain'
          style = {{ flex: 1,height: 300, width: 350}}
          source= {{uri: item.thumb_url}}/>
         
          
          </TouchableOpacity>
        )
      }
        />
 {this.renderSpinner()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: hei,
    width: wid,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  
    containerStyle:{
    
     borderBottomWidth: 1,
      padding: 5,
     backgroundColor: '#fff',
     justifyContent: 'center',//
     alignItems: 'center',
     borderColor: '#ddd',
     position:'relative'
    },
    textStyle: {
      fontWeight: 'normal',
      fontSize: 20,
      color: "blue"
    }

});
