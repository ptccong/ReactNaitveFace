import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
const Post = () => {
    const [data, setData] = useState([])
    let url = 'https://5e032d0763d08b0014a28d2b.mockapi.io/test7/Posts'
    let iconLike = 'https://img.icons8.com/cotton/2x/facebook-like--v2.png'
    let iconComment = 'https://cdn.iconscout.com/icon/premium/png-256-thumb/comment-1578797-1347658.png'
    let iconShare = 'https://freeiconshop.com/wp-content/uploads/edd/share-outline.png'
    let square = 30
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
    }, []);
    // if (data == null) {
    //     return (
    //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //             <ActivityIndicator style={{width:70,height:70}}/>
    //         </View>
    //     );
    // } else {
    return (
        <View style={styles.layout}>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View >
                        <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>
                            <Image source={{ uri: item.avatar }} style={{ width: 60, height: 60, borderRadius: 100 }}></Image>
                            <Text style={{ fontWeight: 'bold', fontSize: 24, paddingLeft: 7 }}>{item.nameUser}</Text>
                        </View>
                        <View>
                            <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 20 }}>{item.title}</Text>
                            <Image source={{ uri: item.imgPost }} style={{ width: 400, height: 200 }}></Image>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderTopColor: '#CCCCCC', borderTopWidth: 1, marginTop: 5, borderBottomWidth: 1, marginBottom: 5, borderBottomColor: '#CCCCCC' }}>
                            <TouchableOpacity>
                                <Image style={{ width: square, height: square }} source={{ uri: iconLike }}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={{ width: square, height: square, marginTop: 5 }} source={{ uri: iconComment }}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={{ width: square, height: square, marginTop: 5 }} source={{ uri: iconShare }}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            >
            </FlatList>
        </View>
    )
}
const styles = StyleSheet.create({
    layout: {
        marginTop: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default Post