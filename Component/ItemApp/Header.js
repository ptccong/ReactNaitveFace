import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const HeaderApp = prop => {
    var iconSeach = 'https://img.icons8.com/pastel-glyph/2x/search--v2.png'
    var iconMess = 'https://cdn.iconscout.com/icon/free/png-256/facebook-messenger-14-896250.png'
    var square = 30
    return (
        <View style={{ justifyContent: 'space-between', alignItems: "flex-start", height: 40, flexDirection: 'row', backgroundColor: 'white' }}>
            <Text style={{ alignItems: 'flex-start', fontSize: 30, color: '#4267b2', fontStyle: 'italic', marginLeft: 20, fontWeight: 'bold' }}>
                facebook
            </Text>
            <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', paddingLeft: 190, paddingTop: 5 }}>
                <TouchableOpacity>
                    <Image source={{ uri: iconSeach }} style={{ width: square, height: square }}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={{ uri: iconMess }} style={{ width: square, height: square }}></Image>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default HeaderApp