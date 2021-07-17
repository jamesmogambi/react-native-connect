import React from "react";
import { Text, Avatar, VStack, HStack, Heading, Link } from "native-base";

export const ContactListItem = ({ title,firstname,lastname,picture,email, onPress }) => {
    return (
        <Link onPress={onPress}>
        <HStack m={2} ml={4} >
            <Avatar
                source={{
                    uri: picture,
                }}
            >
                    RS
      </Avatar>
            <VStack ml={2}>
                <Heading size="md" color="black" >`${title}${firstname}${lastname}`</Heading>
                <Text fontSize="md" color='primary.500' >{email}</Text>
            </VStack>
            </HStack>
        </Link>
    )
}


