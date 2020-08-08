import React from 'react';
import { View } from 'react-native';
import TabTopNavigate from './ItemApp/TabTopNavigate'
import ViewNotify from './ItemApp/ViewNotify'
import ContentApp from './ItemApp/ContentApp'
const NotifyScreen = prop => {
    return (
        <View style={{ backgroundColor: 'white' }}>
            <TabTopNavigate props={prop} />
            <ContentApp nameContent='Thông báo' />
            <ViewNotify />
        </View>
    );
}
export default NotifyScreen