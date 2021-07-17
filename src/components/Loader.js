import React from "react";
import { StyleSheet, View } from "react-native";
import { Spinner ,Box} from "native-base";


// Loader component
// with a spinner
export const Loader = () => {
    return (
        <View style={styles.loader}>
                <Spinner size='lg' color="#27C0DA" />
        </View>
    );
};


const styles = StyleSheet.create({
    // Loader component style
    loader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"white"
    },
});
