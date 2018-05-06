
// app/router.js
import React, {Component} from 'react';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { StackNavigator, TabNavigator, SwitchNavigator } from "react-navigation";

import SignUp from "./clientScreens/SignUp";
import SignIn from "./clientScreens/SignIn";
import OwnerSignUp from "./ownerScreens/SignUp"
import OwnerSignIn from "./ownerScreens/SignIn"
import AddDeal from "./ownerScreens/AddDeal"

import Deals from "./clientScreens/List";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import DealRow from './clientScreens/DealRow';
import DealDetails from './clientScreens/DealDetails';
import AllDeals from './clientScreens/AllDeals';




export const createRootNavigator = (signedIn = false) => {
  return SwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn
      },
      SignedOut: {
        screen: SignedOut
      }
    },
    {
      // initialRouteName: signedIn ? "SignedIn" : "SignedOut"
      initialRouteName: signedIn ? "SignedOut" : "SignedOut"
    }
  );
};



export const SignedOut = StackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: "Sign In"
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "Sign Up"
    }
  },
  OwnerSignIn: {
    screen: OwnerSignIn,
    navigationOptions: {
      title: "Owner Sign In"
    }
  },
/*
  OwnerSignUp: {
    screen: OwnerSignUp,
    navigationOptions: {
      title: "Owner Sign Up"
    }
  }
  */
});

/*
export const SignedIn = TabNavigator({
  Deals: {
    screen: Deals,
    navigationOptions: {
      tabBarLabel: "Deals",

    }
  },

  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: "Home",

    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: "Profile",

    }
  }
});

*/


export const SignedIn = StackNavigator({
  Deals: {
    screen: AllDeals,
    navigationOptions: {
      title: "Deals"
    }
  },
  Deal: {
    screen: DealDetails,
    navigationOptions: {
      title: "Deal"
    }
  },
  AddDeal: {
    screen: AddDeal,
    navigationOptions: {
      title: "AddDeal"
    }
  }
});
