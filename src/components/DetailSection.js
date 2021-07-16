import React from "react";
import { Box, Center, Heading, Avatar, HStack, Text, VStack } from "native-base";
import { FontAwesome } from "@expo/vector-icons";


// DetailSection component:-
// This component displays user's avatar, name and phone number respectively
//  receives users props from parent component
export const DetailSection = ({ user }) => {
    const { avatar, name, phone } = user;
    return (
        <Box p={12} backgroundColor=" #27C0DA">
        <Center  >
            <Avatar
                size="xl"
                borderWidth={3}
                borderColor="white"
                source={{
                    uri: avatar
                }}
            >
                RS
            </Avatar>

            <Heading color="white" size="md" mt={5}>{name}</Heading>
            <HStack space={2}>
                <FontAwesome name="phone" size={24} color="white" />
                <Text color="white">{phone}</Text>
            </HStack>
            </Center>
        </Box>
    );
}





