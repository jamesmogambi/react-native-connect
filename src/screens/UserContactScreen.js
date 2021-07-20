import * as React from "react";
import { Center, Heading, Avatar, VStack, HStack, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

// UserContact Screen -
// Renders the contact of the user: avatar, name and mobile number
const UserContactScreen = ({ route }) => {
    const { user } = route.params;
    console.log("")
    const { title, firstName, lastName, email, picture } = user;

    return (
        <Center bg="#27C0DA" flex={1}>
            <Avatar
                size="xl"
                borderWidth={3}
                borderColor="white"
                source={{
                    uri: picture,
                }}
            >
                RS
            </Avatar>
            <VStack>
                <Center>
                    <Heading size="sm" color="white" mt={4}>{`${title} ${firstName} ${lastName}`}</Heading>
                </Center>
                <HStack space={2} >
                    <MaterialIcons name="email" color="white" size={20} />
                    <Text color="white">{email}</Text>
                </HStack>
            </VStack>
        </Center>
    );
};

export default UserContactScreen;

