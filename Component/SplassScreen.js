import React, { useEffect } from 'react';
import {View,Text} from 'react-native';

const SplassScreen = prop => {
    useEffect(() => {
      setTimeout(() => { prop.navigation.navigate('Login') },3000)
    })
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor:'#4267b2'}}>
        <Text style={{ color: 'white',fontSize:40,fontFamily:'' }}>Facebook</Text>
      </View>
    );
  }
  export default SplassScreen;