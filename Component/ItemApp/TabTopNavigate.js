import React from 'react'
import { View, Image, Alert,TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const TabTopNavigate = ({props})=> {
    var iconHome = 'https://img.icons8.com/pastel-glyph/2x/home.png'
    var iconTv = 'data:image/png;base64,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'
    var iconMarket = 'https://cdn.iconscout.com/icon/premium/png-256-thumb/market-1802176-1530897.png'
    var iconNotify ='https://cdn.iconscout.com/icon/premium/png-256-thumb/notification-bell-1736872-1478467.png'
    var iconProfile ='https://cdn.iconscout.com/icon/premium/png-256-thumb/profile-2019966-1704057.png'
    var quare =30;
   // console.log('propsTabTopNavigate=>>>>',props.props.navigation)
    return (
        <View style={{height:35, justifyContent: 'flex-start', flexDirection: 'row', justifyContent: 'space-around',borderBottomColor:'#DDDDDD',backgroundColor:'white',marginTop:5}}>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('HomeScreen')}} >
                <Image style={{ width: quare, height: quare }} source={{ uri: iconHome }}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('LiveScreen')}}>
                <Image style={{ width: quare, height: quare }} source={{ uri: iconTv }}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>props.navigation.navigate('MarketScreen')}>
                <Image style={{ width: quare, height: quare }} source={{ uri: iconMarket }}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>props.navigation.navigate('NotifyScreen')}>
                <Image style={{ width: quare, height: quare }} source={{ uri: iconNotify }}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>props.navigation.navigate('ProfileScreen')}>
                <Image style={{ width: quare, height: quare }} source={{ uri: iconProfile }}></Image>
            </TouchableOpacity>
        </View>
    );
}
export default TabTopNavigate