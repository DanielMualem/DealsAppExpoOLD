import React, { Component } from 'react';
import { Alert, TextInput, View, StyleSheet } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../ownerAuth";
import Promise from 'bluebird'


export default class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navigation: props.navigation,
			username: '',
			password: ''
		};
	}


	handleUsername = (text) => {
		this.setState({ username: text })
	}
	handlePassword = (text) => {
		this.setState({ password: text })
	}


	login = () => {
		const { navigation, username, password } = this.state;

		fetch('http://35.198.155.182/storeOwner/login', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: username,
				password: password,
			}),
		}).then((response) => {
			// console.log(response);
			if (response._bodyText == 'Yoa are logged in') {
				Alert.alert("Hey " + username + " You are logged in");
				console.log("You are logged in");
				onSignIn().then(() => navigation.navigate("SignedIn"));
			} else {
				Alert.alert("username - " + username + " or password - " + password + " is wrong");
				console.log("You are not logged in");
			}
		})
			.catch((error) => {
				console.error(error);
			});
	}

	render() {
		return (
			<View style={{ paddingVertical: 20 }}>
				<Card title="OWNER - SIGN IN">
					<FormLabel>Username</FormLabel>
					<FormInput placeholder="Username" onChangeText= {this.handleUsername} />
					<FormLabel>Password</FormLabel>
					<FormInput secureTextEntry placeholder="Password" onChangeText={(password) => this.setState({ password })} />

					<Button
						buttonStyle={{ marginTop: 20 }}
						backgroundColor="#03A9F4"
						title="SIGN IN"
						onPress={() => this.login()}
					/>
				</Card>
			</View>
		);
	}
}

