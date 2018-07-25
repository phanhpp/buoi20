import React from 'react';
import {TextInput, View, Text} from 'react-native'

const Input = ({label,value, onChangeText, placeholder,secureTextEntry}) => {
    const {inputStyle,lableStyle,containerStyle} = styles
    return(
    <View style = {containerStyle}>
     <Text style = {lableStyle}>{label}</Text>
     <TextInput 
         secureTextEntry = {secureTextEntry} // ={true}
         placeholder = {placeholder}
         autoCorrect = {false}
         style ={inputStyle}
         value = {value}
         onChangeText = {onChangeText}
     />
    </View>
 );
};
// TextInput & text are children of View, they are sibling
// Rule : use flex to alocate availabe space for each sibling
// add flex of sibing1 to flex of sibling2 - for ex: 1+2 = 3 
//=> TextInput take up 2/3 of the available space 
const styles = {
   inputStyle : {
       color: '#000',
       paddingRight: 5,
       paddingLeft: 5,
       fontSize: 18,
       flex : 2,
       lineHeight: 23 // how much space between the lines
   },
   lableStyle : {
       fontSize: 18,
       paddingLeft: 20,
       flex : 1
   },
   // for view tag
   containerStyle : {
    height: 40,
    flex : 1, // take up all the  available space of its parent component - CardSection
    flexDirection: 'row',
    alignItems: 'center'
   }
};

export {Input}
