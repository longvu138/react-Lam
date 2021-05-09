/** @format */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import Login from "../screens/Login";
import Outcome from "../screens/Outcome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Text } from "react-native";

const Stack = createStackNavigator();

function NavigationApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name='Login' component={Login} /> */}
        <Stack.Screen name="HomeScreen" component={BottomTab} />
        <Stack.Screen name="Outcome" component={Outcome} />
        {/*<Stack.Screen
					name='StudyAgain'
					component={StudyAgain}
				/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        options={{
          tabBarLabel: "Xem Điểm",
          tabBarIcon: ({ color, size }) => (
            <AntDesign
              name="switcher"
              color={color}
              size={size}
            />
          ),
        }}
        name="HomeScreen"
        component={HomeScreen}
      />

      <Tab.Screen
        options={{
          tabBarLabel: "Đăng Ký Học",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-arrow-right-outline"
              color={color}
              size={size}
            />
          ),
        }}
        name="Outcome"
        component={Outcome}
      />
    </Tab.Navigator>
  );
}

export default NavigationApp;
