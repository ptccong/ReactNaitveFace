import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './Component/LoginScreen';
import SplassScreen from './Component/SplassScreen';
import HomeScreen from './Component/HomeScreen';
import LiveScreen from './Component/LiveScreen';
import MarketScreen from './Component/MarketScreen';
import NotifyScreen from './Component/NotifyScreen';
import ProfileScreen from './Component/ProfileScreen';
import ResgistorScreen from './Component/ResgistorScreen';
const AppNavigate = createStackNavigator(
  {
    Splass: { screen: SplassScreen,},
    Login:{screen:LoginScreen,},
    HomeScreen:{screen:HomeScreen},
    LiveScreen:{screen:LiveScreen},
    MarketScreen:{screen:MarketScreen},
    NotifyScreen:{screen:NotifyScreen},
    ProfileScreen:{screen:ProfileScreen},
    ResgistorScreen:{screen:ResgistorScreen}
  }, 
  { 
    headerMode:'none',
    navigationOptions: {
      headerVisible: false,
    },
    initialRouteName:'Splass' 
  });
export default createAppContainer(AppNavigate)