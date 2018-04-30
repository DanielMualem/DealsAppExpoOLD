import React, { Component } from 'react';
import {
  ImageBackground,              // Renders background image
  StyleSheet,         // CSS-like styles
  Text,               // Renders text
  TouchableOpacity,   // Handles row presses
  View                // Container component
} from 'react-native';
import Dimensions from 'Dimensions';

// Detect screen size to calculate row height
const screen = Dimensions.get('window');

export default class Row extends Component {

  // Extract movie and onPress props passed from List component
  render({ movie, onPress } = this.props) {
    // Extract values from movie object
    const { storeName, preview, details } = movie;
    return (
      // Row press handler
      <TouchableOpacity
        // Pass row style
        style={styles.row}
        // Call onPress function passed from List component when pressed
        onPress={onPress}
        // Dim row a little bit when pressed
        activeOpacity={0.7}
      >
        {/* Background image */}
        <ImageBackground source={{uri: 'https://png.pngtree.com/thumb_back/fw800/back_pic/04/50/08/15585c91b38a772.jpg'}} style={styles.imageBackground}>
          {/* Title */}
          <Text style={[styles.text, styles.title]}>{details}</Text>
          {/* Rating */}
          <View style={styles.rating}>
            {/* Icon */}

            {/* Value */}
            <Text style={[styles.text, styles.value]}>{details}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }

}

const styles = StyleSheet.create({
  // Row
  row: {
    paddingBottom: 5,                   // Add padding at the bottom
  },
  // Background image
  imageBackground: {
    height: screen.height / 5,          // Divide screen height by 3
    justifyContent: 'center',           // Center vertically
    alignItems: 'center',               // Center horizontally
  },
  // Shared text style
  text: {
    color: '#fff',                      // White text color
    backgroundColor: 'transparent',     // No background            // Change default font
    fontWeight: 'bold',                 // Bold font
    // Add text shadow
    textShadowColor: '#222',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  // Movie title
  title: {
    fontSize: 22,                       // Bigger font size
  },
  // Rating row
  rating: {
    flexDirection: 'row',               // Arrange icon and rating in one line
  },
  // Certified fresh icon
  icon: {
    width: 30,                          // Set width
    height: 30,                         // Set height
    marginRight: 5,                     // Add some margin between icon and rating
  },
  // Rating value
  value: {
    fontSize: 16,                       // Smaller font size
  },
});
