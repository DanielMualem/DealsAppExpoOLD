import React, { Component } from 'react';
import {
  View,
  Image,
  ListView,       // Renders a list
  RefreshControl, // Refreshes the list on pull down
  Text
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Card, Button } from "react-native-elements";
//import ActionButton from 'react-native-action-button';
import DealRow from './DealRow';
import DealDetails from './DealDetails';

const demoData = [
  {
    storeName: 'BBB',
    preview: '1+1 on all meals',
    image: require('../images/bbb.jpg'),
    details: "1+1 on all meals 1+1 on all meals 1+1 on all meals 1+1 on all meals 1+1 on all meals 1+1 on all meals 1+1 on all meals 1+1 on all meals 1+1 on all meals 1+1 on all meals 1+1 on all meals 1+1 on all meals ",
  },
  {
    storeName: 'Aroma',
    preview: '50% OFF everything',
    image: require('../images/aroma.jpg'),
    details: "bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla   ",
  },
  {
    storeName: 'Humus Medames',
    preview: '20% OFF meals',
    image: require('../images/medames.jpg'),
    details: "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ",
  },
  {
    storeName: 'Deli Cream',
    preview: '1+1 on all ice creams',
    image: require('../images/deli_cream.jpg'),
    details: "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ",
  },
  {
    storeName: 'BBB',
    preview: '1+1 on all meals',
    image: require('../images/bbb.jpg'),
    details: "1+1 on all meals 1+1 on all meals 1+1 on all meals 1+1 on all meals 1+1 on all meals 1+1 on all meals 1+1 on all meals 1+1 on all meals 1+1 on all meals 1+1 on all meals 1+1 on all meals 1+1 on all meals ",
  },
  {
    storeName: 'Aroma',
    preview: '50% OFF everything',
    image: require('../images/aroma.jpg'),
    details: "bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla bla  bla  bla  bla  bla  bla  bla  bla  bla  bla  bla   ",
  },
  {
    storeName: 'Humus Medames',
    preview: '20% OFF meals',
    image: require('../images/medames.jpg'),
    details: "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ",
  },
  {
    storeName: 'Deli Cream',
    preview: '1+1 on all ice creams',
    image: require('../images/deli_cream.jpg'),
    details: "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ",
  },
];

export default class AllDeals extends Component {

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
    this.fetchData();
  }

  /**
   * Prepare demo data for ListView component
   */
   fetchData = () => {
    // Data is being refreshed
    this.setState({ isRefreshing: true });
    this.setState({
      // Fill up DataSource with demo data
      dataSource: this.state.dataSource.cloneWithRows(demoData),
      // Data has been refreshed by now
      isRefreshing: false,
    });
  }

  /**
   * Render a row
   */
  renderRow = (deal) => {
    return (
      <DealRow
        // Pass movie object
        deal={deal}
        // Pass a function to handle row presses
        onPress={() => {
          // Navigate to a separate movie detail screen
          //this.props.navigation.navigate('Deal', deal)
          /*this.props.navigation.navigate('Deal', {
              deal: deal,
            });*/
            this.props.navigation.navigate('Deal', {
              deal: deal,
            });
        }}
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
          renderRow={this.renderRow}
          // Refresh the list on pull down
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this.fetchData}
            />
          }
        />
      </View>
    );
  }
}
