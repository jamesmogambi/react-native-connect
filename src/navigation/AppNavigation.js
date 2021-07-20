import * as React from 'react';
import { Button } from "native-base";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons, Entypo, AntDesign } from "@expo/vector-icons";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ContactsScreen from "../screens/ContactsScreen";
import ContactProfileScreen from "../screens/ContactProfileScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import UserContactScreen from "../screens/UserContactScreen";
import FeedbackScreen from "../screens/FeedbackScreen";
import DrawerContent from "./DrawerContent";



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



// This stack navigator is nested in Tab navigator [AppNavigator]
// It contains two routes namely:- ContactsScreen, ContactScreen
function contactNavigator(params) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Contacts"
                component={ContactsScreen}
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <Button
                            transparent
                            onPress={() => navigation.openDrawer()}
                            style={{ backgroundColor: "#ffffff" }}
                        >
                            <Entypo name="menu" size={30} color="black" />
                        </Button>
                    ),
                })}
            />
            <Stack.Screen name="ContactProfile" component={ContactProfileScreen} options={({ navigation, route }) => ({
                title: route.params.user.firstName,
                headerTintColor: '#fff',
                headerStyle: { backgroundColor: "#27C0DA" }
            })} />
        </Stack.Navigator>

    );

}



// This stack navigator is nested in Tab Navigator [AppNavigator]
// It comprises of two routes namely:- FavouritesScreen, UserContactScreen
function favouriteNavigator(params) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="UserFavourites" component={FavouritesScreen}
                options={({ navigation }) => ({
                    title: "Favourites",
                    headerLeft: () => (
                        <Button
                            transparent
                            onPress={() => navigation.openDrawer()}
                            style={{ backgroundColor: "#ffffff" }}
                        >
                            <Entypo name="menu" size={30} color="black" />
                        </Button>
                    ),
                })}
            />
            <Stack.Screen name="UserContact" component={UserContactScreen}
                options={({ navigation, route }) => ({
                    title: route.params.user.firstName,
                    headerTintColor: '#fff',
                    headerStyle: { backgroundColor: "#27C0DA" }
                })}
            />
        </Stack.Navigator>

    );

}


// Tab Navigator
// Comprises of two child navigators [ContactNavigator, favouritesNavigator] :- e
const Tab = createBottomTabNavigator();
export function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                // set tab bar icons
                tabBarIcon: ({ focused, color, size }) => {

                    let iconColor;

                    if (route.name === 'Home') {
                        iconColor = focused
                            ? '#27C0DA'
                            : 'black';
                        return <Entypo name="home" size={24} color={iconColor} />
                    } else if (route.name === 'Favourites') {
                        iconColor = focused
                            ? '#27C0DA'
                            : 'black';
                        return <AntDesign name="star" size={24} color={iconColor} />

                    }


                },
            })}
            tabBarOptions={{
                activeTintColor: '#27C0DA',
                inactiveTintColor: 'black',
            }}

        >
            <Tab.Screen name="Home" component={contactNavigator} />
            <Tab.Screen name="Favourites" component={favouriteNavigator} />
        </Tab.Navigator>
    );
}


// FeedBack Stack Navigator
function FeedBackNavigator(params) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="FeedBack" component={FeedbackScreen}
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <Button
                            transparent
                            onPress={() => navigation.goBack()}
                            style={{ backgroundColor: "#ffffff" }}
                        >
                            <AntDesign name="arrowleft" size={30} color="black" />
                        </Button>
                    ),
                })}
            />
        </Stack.Navigator>

    );

}

// AppNavigator
// Comprises of nested Tab Navigator[TabNavigator] , the tab navigator consists of two routes
// each route has two stacks
const Drawer = createDrawerNavigator();
export function AppNavigator() {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            drawerContentOptions={{
                activeTintColor: '#27C0DA',
                inactiveTintColor: 'black'
            }}
            drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Drawer.Screen name="Home" component={TabNavigator} />
            <Drawer.Screen name="FeedBack" component={FeedBackNavigator} />
        </Drawer.Navigator>
    );
}

