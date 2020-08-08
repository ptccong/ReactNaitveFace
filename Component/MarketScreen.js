import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import TabTopNavigate from './ItemApp/TabTopNavigate'
import ContentApp from './ItemApp/ContentApp'
import ItemMarket from './ItemApp/ItemMarket'

const MarketScreen = prop => {
    return (
        <View style={{ backgroundColor: 'white' }}>
            <TabTopNavigate props={prop} />
            <ContentApp nameContent='Marketplace' />
            <ItemMarket />
        </View>
    );
}
export default MarketScreen