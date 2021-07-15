// import { react } from "react";
import * as React from 'react';
import { StyleSheet } from "react-native";
import { Button } from "native-base";
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from "@expo/vector-icons";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";



// Auth Navigator
// Implements a stack navigator (Auth Navigator)  which contains screens that are not authenticated namely:
// WelcomeScreen, LoginScreen, SignUpScreen;
// Header is disabled
const Stack = createStackNavigator();
export function AuthNavigator() {
    const headerStyle = {
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
    }
    return (
        <Stack.Navigator initialRouteName="Welcome" headerMode="float">
            <Stack.Screen name="Welcome" component={WelcomeScreen}
                options={({ navigation }) => ({
                    headerShown: false,
                    headerStyle,
                })}
            />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={({ navigation }) => ({
                    title: "",
                    headerStyle,
                    headerLeft: () => (
                        <Button
                            transparent
                            onPress={() => navigation.navigate("Welcome")}
                            bg="white"
                            style={{ backgroundColor: "#ffffff"}}
                        >
                            <MaterialIcons
                                name="keyboard-arrow-left"
                                color="#27C0DA"
                                size={60}
                            />
                        </Button>
                    ),
                })}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
                options={({ navigation }) => ({
                    title: "",
                    headerStyle,
                    headerLeft: () => (
                        <Button
                            transparent
                            onPress={() => navigation.navigate("Welcome")}
                            style={{ backgroundColor: "#ffffff" }}
                        >
                            <MaterialIcons
                                name="keyboard-arrow-left"
                                color="#27C0DA"
                                size={60}
                            />
                        </Button>
                    ),
                })}
            />
        </Stack.Navigator>
    );
}


