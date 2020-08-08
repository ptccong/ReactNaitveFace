import React, { useState, useEffect } from 'react'
import { View, AsyncStorage, Text, StyleSheet,TouchableOpacity } from 'react-native';
import TabTopNavigate from './ItemApp/TabTopNavigate'
import { ScrollView } from 'react-native-gesture-handler';
const ProfileScreen = prop => {
    const logOut= async()=>{
         AsyncStorage.clear()
        prop.navigation.navigate('Login') 
        
    }
    return (
        <View style={{ backgroundColor: 'white', }}>
            <TabTopNavigate props={prop} />
            <View style={{alignItems:'center',marginTop:10}}>
            <TouchableOpacity onPress={() => { logOut()}}
                style={styles.button} >
                <Text style={{ color: 'white', fontSize: 18 }}>Log out</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#4267b2',
        width: '90%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 10
    }
})
export default ProfileScreen