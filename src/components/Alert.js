import React from "react";
import { Alert } from "native-base";

// return a dynamic Alert component
// receives props containing message and status
// renders Alert component dynamically based on the props received from parent component
export const AppAlert = ({ status, message }) => (
    <Alert status={status} w="100%">
        <Alert.Icon />
        <Alert.Title
            flexShrink={1}
        >{message}</Alert.Title>
    </Alert>
);
