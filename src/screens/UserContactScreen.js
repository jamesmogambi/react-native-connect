import * as React from "react";
import { Center, Heading, Avatar, VStack, HStack, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

// UserContact Screen -
// Renders the contact of the user: avatar, name and mobile number
const UserContactScreen = ({ route }) => {
    const { user } = route.params;
    const { name, phone } = user;

    return (
        <Center bg="#27C0DA" flex={1}>
            <Avatar
                size="xl"
                borderWidth={3}
                borderColor="white"
            >
                RS
            </Avatar>
            <VStack>
                <Heading size="sm" color="white" mt={4}>{name}</Heading>
                <HStack space={2} >
                    <MaterialIcons name="phone" color="white" size={20}/>
                    <Text color="white">{phone}</Text>
                </HStack>
            </VStack>
        </Center>
    );
};

export default UserContactScreen;

