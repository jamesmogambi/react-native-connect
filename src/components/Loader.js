import React from "react";
import { StyleSheet, View } from "react-native";
import { Spinner } from "native-base";


// Loader component
// with a spinner
const Loader = () => {
    return (
        <View style={styles.loader}>
            <Spinner size="lg" color="#000000" />
        </View>
    );
};

export default Loader;

const styles = StyleSheet.create({
    // Loader component style
    loader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
