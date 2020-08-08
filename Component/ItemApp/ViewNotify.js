import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image,TouchableOpacity } from 'react-native';

const ViewNotify = () => {
    const [data, setData] = useState()
    const link = 'https://5e032d0763d08b0014a28d2b.mockapi.io/test7/iteamView'
    
    useEffect(() => {
        fetch(link)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
    }, []);

    return (
        <View style={{ marginTop: 10 }}>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={{ marginTop: 10, flexDirection: 'row', marginLeft: 10 }}>
                        <Image source={{ uri: item.imageNotify }} style={{ width: 70, height: 70, borderRadius: 100 }}></Image>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                            <Text>{item.detail} </Text>
                        </View>
                    </View>
                )}
            >
            </FlatList>
        </View>
    )
}
export default ViewNotify