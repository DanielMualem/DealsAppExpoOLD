import React, { Component } from 'react';
import { Alert, TextInput, View, StyleSheet, ScrollView } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../auth";
import { login } from "../auth";


export default class SignIn extends Component {
  // constructor
  constructor(props) {
    super(props);
    // members
    this.state = {
      navigation: this.props.navigation,
      username: '',
      password: '',
      email: ''
    };
  }

  handleEmail = (text) => {
    this.setState({ email: text })
  }
  handleUsername = (text) => {
    this.setState({ username: text })
  }
  handlePassword = (text) => {
    this.setState({ password: text })
  }

	login = () => {
		const { navigation, username, password } = this.state;

		fetch('http://35.198.155.182/login', {
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
  
  SignUp = () => {
    const { navigation, username, password, email } = this.state;

    fetch('http://35.198.155.182/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password
      }),
    })
      .then((response) => {
        console.log(response);
        if (response._bodyText == 'registered successfully') {
          Alert.alert("registered successfully");
          // this.props.navigation.navigate("SignIn")
          // onSignIn(this.state.username, this.state.password).then(() => this.props.navigation.navigate("SignedIn")); // NEW LOGIC
          console.log("registered successfully!");
        } else {
          Alert.alert("The username is not available");
          console.log("registered failed");
        }
      }).then(() => {this.login()})
      .catch((error) => {
        console.error(error);
      });
      // this.login();
  }



  render() {
    return (
      <View style={{ paddingVertical: 20 }}>
        <Card title="CLIENT - SIGN UP">
          <FormLabel>Email</FormLabel>
          <FormInput placeholder="Email address" onChangeText={this.handleEmail} />
          <FormLabel>Username</FormLabel>
          <FormInput placeholder="Username" onChangeText={this.handleUsername} />
          <FormLabel>Password</FormLabel>
          <FormInput secureTextEntry placeholder="Password" onChangeText={this.handlePassword} />
          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#03A9F4"
            title="SIGN UP"
            onPress={() => this.SignUp()}
          />
        </Card>
      </View>
    );
  }
}
