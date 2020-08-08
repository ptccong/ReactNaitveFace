import React, { useState, useEffect } from 'react'
import { View, Text, Image, FlatList } from 'react-native'

const ItemMarket = () => {
    const [data, setData] = useState()
    var link = 'https://5e032d0763d08b0014a28d2b.mockapi.io/test7/itemMarket'
    useEffect(() => {
        fetch(link)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
    }, []);
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center',marginTop:10 }}>
            <FlatList
                data={data}
                numColumns={2}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={{ marginRight: 5 }}>
                        <Image source={{ uri: item.avatar }} style={{ width: 200, height: 100, borderRadius: 5 }}></Image>
                        <View style={{marginLeft:5}}>
                            <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                            <Text>{item.price}$</Text>
                            <Text >{item.address}</Text>
                        </View>
                    </View>
                )}
            >
            </FlatList>
        </View>
    )
}
export default ItemMarket