import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MenuButton, Logo } from "../components/header";

export default class SearchScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			headerLeft: <MenuButton onPress={() => navigation.openDrawer()} />,
			headerTitle: 'Search',
			headerBackTitle: "Search",
			headerLayoutPreset: "center"
		};
	};
	
	render() {
		return (
			<View style={styles.container}>
				<Text>Hello! Welcome to my search page</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	}
});