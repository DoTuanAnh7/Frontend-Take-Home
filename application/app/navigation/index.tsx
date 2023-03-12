import React from 'react'
import {
  View,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { PublicNavigator } from "./PublicNavigator/PublicNavigator";


export default function Navigation(): JSX.Element {
    return (
      <View style={{ flex: 1 }}>
        <NavigationContainer >
            <PublicNavigator />
        </NavigationContainer>
      </View>
    );
  }

``