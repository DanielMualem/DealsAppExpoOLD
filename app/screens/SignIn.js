import React, { Component } from 'react';
import { Alert, TextInput, View, StyleSheet } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../auth";



export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
		navigation: props.navigation,
		username: '',
		password: ''
    };
  }


render() {
    return (
	  <View style={{ paddingVertical: 20 }}>
		<Card title="SIGN IN">
		  <FormLabel>Username</FormLabel>
		  <FormInput placeholder="Username" onChangeText={(username) => this.setState({ username })} />
		  <FormLabel>Password</FormLabel>
		  <FormInput secureTextEntry placeholder="Password" onChangeText={(password) => this.setState({ password })} />

		  <Button
			buttonStyle={{ marginTop: 20 }}
			backgroundColor="#03A9F4"
			title="SIGN IN"
			onPress={() =>{
				onSignIn(this.state.username, this.state.password).then(() => navigation.navigate("SignedIn")); // NEW LOGIC
			}}
		  />
		</Card>
	  </View>
	);
  }
}

