import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Welcome from "../screens/Welcome";
import Home from "../screens/Home";
import MealDetails from "../screens/MealDetails";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MealDetails" component={MealDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
