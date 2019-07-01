import React from 'react'
import { Text, TouchableOpacity, Dimensions } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import { View } from "react-native";
const deviceWidth = Dimensions.get("window").width;

export class Logo extends React.Component {
	render() {
		return (
			<View style={{ flex: 0.8 }}>
				<Text>Logo</Text>
			</View>
		);
	}
}

export class MenuButton extends React.Component {
	render() {
		return (
			<TouchableOpacity onPress = {this.props.onPress} >
				<Icon name = "md-menu" size={30} style = {{color: 'black',paddingLeft: 10}}/>
			</TouchableOpacity>
		);
	}
}