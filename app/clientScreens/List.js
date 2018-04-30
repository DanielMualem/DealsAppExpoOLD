import React, { Component } from 'react';
import {
  View,
  ListView,       // Renders a list
  RefreshControl, // Refreshes the list on pull down
  Text
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import ActionButton from 'react-native-action-button';
import Row from './Row';

export default class List extends Component {
  /**
   * Store the data for ListView
   */
  state = {
    // ListView DataSource object
    dataSource: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    }),
    // Used for RefreshControl
    isRefreshing: false,
  }

  /**
   * Call _fetchData after component has been mounted
   */
  componentDidMount() {
    // Fetch Data
    this._fetchData();
  }

  /**
   * Prepare demo data for ListView component
   */
  _fetchData = () => {
    return fetch('http://35.198.155.182/deals')
      .then((response) => response.json())
      .then((responseJson) => {
        // Data is being refreshed
        this.setState({ isRefreshing: true });
        this.setState({
          // Fill up DataSource with demo data
          dataSource: this.state.dataSource.cloneWithRows(responseJson),
          // Data has been refreshed by now
          isRefreshing: false,
        });
      })
      .catch((error) => {
        console.error(error);
      });

  }

  /**
   * Render a row
   */
  _renderRow = (movie) => {
    return (
      <Row
        // Pass movie object
        movie={movie}
        // Pass a function to handle row presses
        /*onPress={() => {
          // Navigate to a separate movie detail screen
          this.props.navigator.push({
            name: 'movie',
            movie: movie,
          });
        }}*/
      />
    );
  }

  /**
   * Renders the list
   */
  render() {
    return (
      <View >
        <ListView

          // Data source from state
          dataSource={this.state.dataSource}
          // Row renderer method
          renderRow={this._renderRow}
          // Refresh the list on pull down
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this._fetchData}
            />
          }
        />
        <ActionButton
         buttonColor="rgba(231,76,60,1)"
         onPress={() => { this.props.navigation.navigate("AddDeal");}}
       />
      </View>
    );
  }
}


/*
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          onPress={() => {
            this.props.navigator.push({
              name: 'add_deal',
            });
          }}
        />

*/
