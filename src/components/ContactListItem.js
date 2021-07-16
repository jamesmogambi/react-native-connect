import React from "react";
import { Text, Avatar, VStack, HStack, Heading, Link } from "native-base";

export const ContactListItem = ({ name, phone, avatar, onPress }) => {
    return (
        <Link onPress={onPress}>
        <HStack m={2} ml={4} >
            <Avatar
                source={{
                    uri: avatar,
                }}
            >
                    RS
      </Avatar>
            <VStack ml={2}>
                <Heading size="md" color="black" >{name}</Heading>
                <Text fontSize="md" color='primary.500' >{phone}</Text>
            </VStack>
            </HStack>
        </Link>
    )
}


