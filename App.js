// import React from 'react';
// import { StyleSheet } from 'react-native';
// import Drawer from './navigators/drawer-navigator';

// export default class App extends React.Component {
//   render() {
//     return (
//       <Drawer />
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import React from 'react';
import { Button, Text, View, SafeAreaView } from 'react-native';
import {
  createBottomTabNavigator,
  createAppContainer,
  createDrawerNavigator,
  DrawerActions,
  createStackNavigator
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import ProfileScreen from './screens/ProfileScreen';
import SearchScreen from './screens/SearchScreen';

//https://snack.expo.io/@nazrdogan/adequate-cookies

const CustomDrawerContentComponent = props => (
  <SafeAreaView
    style={{ flex: 1 }}
    forceInset={{ top: 'always', horizontal: 'never' }}>
    <View>
      <Text>Hello! Welcome to my sidemenu</Text>
    </View>
    
    <Button 
      //icon="add-a-photo"
      //mode="contained"
      style=""
      title="Home"
      onPress={() => {
        props.navigation.dispatch(DrawerActions.closeDrawer());
        props.navigation.navigate('Home');
      }}>
      
    </Button>
    <Button
      //icon="add-a-photo"
      //mode="contained"
      title="Settings"
      onPress={() => {
        props.navigation.dispatch(DrawerActions.closeDrawer());
        props.navigation.navigate('Settings');
      }}>
      
    </Button>

     <Button
      //icon="add-a-photo"
      //mode="contained"
      title="Search"
      onPress={() => {
        props.navigation.dispatch(DrawerActions.closeDrawer());
        props.navigation.navigate('Search');
      }}>
      
    </Button>
  </SafeAreaView>
);

const TabNavigator = createBottomTabNavigator(
  {
    Home:{
      screen: createStackNavigator(
        {Home: HomeScreen}
      ),
    },
    Settings: {
      screen: createStackNavigator(
        {Settings: ProfileScreen}
      ),
    },
    Search: {
      screen: createStackNavigator(
        {Search: SearchScreen}
      ),
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          // iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          iconName = `md-home`;
        } 
        else if (routeName === 'Settings') {
          iconName = `md-pin`;
        }
        else if (routeName === 'Search') {
          iconName = `md-subway`;
        }
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={35} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#EE3439',
      inactiveTintColor: 'gray',
    },
  }
);

const MyDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: TabNavigator,
    },
  },
  {
    contentComponent: props => <CustomDrawerContentComponent {...props} />,
  }
);
export default createAppContainer(MyDrawerNavigator);

