import React from "react";
import { Center, Heading, HStack, Text, VStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";


// DetailItem component:-
// This component displays user's email, personal phonenumber and Date of Birth (DOB)
//  receives users props from parent component[ContactProfileScreen]
export const DetailItem = ({ iconName, title, name }) => {
    return (
        <HStack borderBottomWidth={0.5} space={4} p={4} ml={3}>
            <Center>
                <MaterialIcons name={iconName} size={30} color="black" />
            </Center>
            <VStack>
                <Heading size="sm">{title}</Heading>
                <Text color="#27C0DA" >{name}</Text>
            </VStack>
        </HStack>
    );
}





