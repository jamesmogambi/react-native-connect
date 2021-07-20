import React from "react";
import { Alert } from "react-native";
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from "@react-navigation/drawer";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";



// Custom drawer content component with logout button
// on press logout button ,one is logged out...
export const DrawerContent = (props) => {
    const { navigation, startLogout } = props;

    return (
        <DrawerContentScrollView>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Logout"
                activeTintColor='#27C0DA'
                inactiveTintColor=' #27C0DA'
                onPress={() => {
                    Alert.alert(
                        "",
                        "Are you sure you want to logout?",
                        [
                            ,
                            {
                                text: "No",
                                style: "cancel",
                            },
                            {
                                text: "Yes",
                                onPress: () => startLogout(),
                            },
                        ],
                        { cancelable: false }
                    );
                    navigation.closeDrawer();
                }}
            />
        </DrawerContentScrollView>
    );
};

const mapDispatchToProps = (dispatch, props) => ({
    startLogout: () => dispatch(startLogout()),
});
export default connect(undefined, mapDispatchToProps)(DrawerContent);
