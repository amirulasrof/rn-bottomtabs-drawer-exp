import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { MenuButton, Logo } from "../components/header";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import HomeSegment1 from '../screens/HomeSegment1';
import HomeSegment2 from '../screens/HomeSegment2';


// const FirstRoute = () => (
//   <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
// );

// const SecondRoute = () => (
//   <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
// );

export default class HomeScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			headerLeft: <MenuButton onPress={() => navigation.openDrawer()} />,
			headerTitle: 'Home',
			headerBackTitle: "Home",
			headerLayoutPreset: "center",
			headerStyle: {
	      elevation: 0.0,
	    },
		};
	};

	state = {
    index: 0,
    routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
    ],
  };

	render() {
		return (
			<TabView
        navigationState={this.state}
       	renderTabBar={props =>
				  <TabBar
				    {...props}
				    indicatorStyle={{ 
				    	elevation:1, 
				    	backgroundColor: 'black',
				    	height: 2.5 
				    }}
				    style={{
				    	backgroundColor: 'white'
				    }}
						labelStyle={{
							color: 'black',
							textTransform: 'capitalize'
						}}
				  />
				}
        renderScene={SceneMap({
          // first: FirstRoute,
          // second: SecondRoute,
          first: HomeSegment1,
          second: HomeSegment2
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	scene: {
    flex: 1,
  },
});

//export default class HomeScreen