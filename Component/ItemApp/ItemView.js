import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    ImageBackground
} from 'react-native';

const ItemView = () => {
    const [data, setData] = useState([])
    var url = 'https://www.flickr.com/services/rest/?method=flickr.favorites.getList&api_key=82f251704c5152e2f0f60cf580cc3ca4&user_id=184957000%40N08&extras=url_c&per_page=20&page=1&format=json&nojsoncallback=1'
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => setData(json.photos.photo))
            .catch((error) => console.error(error))
    }, []);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <FlatList
                data={data}
                horizontal={true}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View>
                        <ImageBackground
                            style={{ width: 150, height: 250, margin: 5, justifyContent: 'flex-end', alignItems: 'flex-start',paddingBottom:5,paddingLeft:5}}
                            source={{ uri: item.url_c }} 
                            imageStyle={{borderRadius:5}}>
                            <Text style={{ color: 'white', fontSize: 15, flexDirection: 'column' }}>{item.title}</Text>
                        </ImageBackground>
                    </View>
                )}
            >
            </FlatList>
        </View>
    );
};
export default ItemView