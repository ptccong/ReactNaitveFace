import React from 'react';
import { View} from 'react-native';
import TabTopNaigate from './ItemApp/TabTopNavigate'
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import Post from './ItemApp/Post';
import ContentApp from './ItemApp/ContentApp'
const LiveScreen = props => {
    return (
        <View>
            <TabTopNaigate props={props}/>
            <ContentApp nameContent='Watch'/>
            <ScrollView style={{backgroundColor:'#EEEEEE'}}>
                <Post />
            </ScrollView>
        </View>
    );
}
export default LiveScreen