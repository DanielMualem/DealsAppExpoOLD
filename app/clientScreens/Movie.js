import React, { Component } from 'react';
import {
  ImageBackground,              // Renders background image
  ScrollView,         // Scrollable container
  StyleSheet,         // CSS-like styles
  Text,               // Renders text
  TouchableOpacity,   // Handles button presses
  View                // Container component
} from 'react-native';

export default class Movie extends Component {

  // Extract movie object passed as a prop from Row component
  render({ movie } = this.props) {
    // Extract values from movie object
    const { storeName, preview, details} = movie;
    return (
      <View style={styles.container}>
        {/* Background image with large image */}
        <ImageBackground source={{uri: 'http://www.solidbackgrounds.com/images/1280x1024/1280x1024-light-blue-solid-color-background.jpg'}} style={styles.imageBackground}>
          {/* Use ScrollView in case plot is too large to fit on the screen */}
          <ScrollView
            style={{flex: 1}}
          >
            {/* Title */}
            <Text style={[styles.text, styles.title]}>{details}</Text>
            {/* Rating */}
            <View style={styles.rating}>
              {/* Icon */}

              {/* Value */}
              <Text style={[styles.text, styles.value]}>{details}</Text>
            </View>
            {/* Plot */}
            <View style={styles.plot}>
              <Text style={styles.plotText}>{details}</Text>
            </View>
          </ScrollView>
          {/* Button container */}
          <View style={styles.buttonContainer}>
            {/* Press handler */}
            <TouchableOpacity
              // Go to the previous screen
              onPress={() => {this.props.navigator.pop();}}
              // Dim button a little bit when pressed
              activeOpacity={0.7}
              // Pass button style
              style={styles.button}
            >
              <Text style={styles.buttonText}>GET DEAL</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            {/* Press handler */}
            <TouchableOpacity
              // Go to the previous screen
              onPress={() => {this.props.navigator.pop();}}
              // Dim button a little bit when pressed
              activeOpacity={0.7}
              // Pass button style
              style={styles.button}
            >
              <Text style={styles.buttonText}>CLOSE</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // Main container
  container: {
    flex: 1,                            // Take up all screen space
    backgroundColor: '#333',            // Dark background
  },
  // Background image
  imageBackground: {
    flex: 1,                            // Take up all screen space
    padding: 20                         // Add padding for content inside
  },
  text: {
    backgroundColor: 'transparent',     // No background
    color: '#fff',                      // White text color             // Change default font
    fontWeight: 'bold',                 // Bold font
    // Add text shadow
    textShadowColor: '#222',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 4,
  },
  title: {
    fontSize: 22,                       // Bigger font size
    marginTop: 30,                      // Add space between top screen edge
    marginBottom: 5,                    // Add space at the bottom
    textAlign: 'center',                // Center horizontally
  },
  rating: {
    flexDirection: 'row',               // Arrange icon and rating in one line
    justifyContent: 'center',           // Center horizontally
  },
  icon: {
    width: 22,                          // Set width
    height: 22,                         // Set height
    marginRight: 5,                     // Add some margin between icon and rating
  },
  value: {
    fontSize: 16,                       // Smaller font size
  },
  plot: {
    backgroundColor: 'rgba(255,255,255,100)', // Semi-transparent white background
    borderRadius: 10,                   // Rounder corners
    marginTop: 40,                      // Margin at the top
    padding: 10,                        // Padding for content inside
  },
  plotText: {
    color: '#333',                      // Dark text color              // Change default font
    fontSize: 15,                       // Small font size
  },
  buttonContainer: {
    marginTop: 20,                      // Add some margin at the top
  },
  button: {
    backgroundColor: '#617D8A',         // Color the button
    padding: 15                         // Padding inside
  },
  buttonText: {
    color: '#fff',                      // White button text            // Change default font
    fontWeight: 'bold',                 // Bold font
    textAlign: 'center',                // Center horizontally
  }
});
