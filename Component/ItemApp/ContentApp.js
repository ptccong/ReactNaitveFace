import React from 'react'
import { View,Text,TouchableOpacity,Image } from 'react-native';

const ContentApp = ({ nameContent }) => {
    var iconSeach = 'https://img.icons8.com/pastel-glyph/2x/search--v2.png'
    return (
        <View>
            <View style={{ marginLeft: 10, justifyContent: 'space-between', flexDirection: 'row',backgroundColor:'white' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 25 }}>{nameContent}</Text>
                <TouchableOpacity>
                    <Image source={{ uri: iconSeach }} style={{ width: 30, height: 30, marginRight: 20 }}></Image>
                </TouchableOpacity>

            </View>
        </View>
    )
}
export default ContentApp