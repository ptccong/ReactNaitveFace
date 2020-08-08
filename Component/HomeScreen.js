import React from 'react';
import { View } from 'react-native';
import HeaderApp from './ItemApp/Header';
import TabTopNaigate from './ItemApp/TabTopNavigate'
import { ScrollView } from 'react-native-gesture-handler';
import UpStatus from './ItemApp/upStatus';
import ItemView from './ItemApp/ItemView';
import Post from './ItemApp/Post';

const HomeScreen = (props) => {
    return (
        <View style={{ backgroundColor: '#EEEEEE' }}>
            <View style={{ backgroundColor: 'white' }}>
                <HeaderApp />
                <TabTopNaigate props={props} />
            </View>
            <ScrollView>
                <UpStatus />
                <ItemView />
                <Post />
            </ScrollView>
        </View>

    );

}
export default HomeScreen
