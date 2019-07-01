import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class HomeSegment2 extends React.Component {

	render() {
		return (
			<View style={styles.container}>
				<Text>Home Segment 2</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#673ab7"
	}
});