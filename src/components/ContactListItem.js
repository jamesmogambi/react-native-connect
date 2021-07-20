import React from "react";
import { Text, Avatar, VStack, HStack, Heading, Link } from "native-base";

export const ContactListItem = ({ title, firstName, lastName, picture, email, onPress }) => {
    return (
        <Link onPress={onPress}>
            <HStack m={2} ml={4} >
                <Avatar
                    source={{
                        uri: picture,
                    }}
                    size="md"
                >
                    RS
      </Avatar>
                <VStack ml={4}>
                    <Heading size="sm" color="black" >{`${title} ${firstName} ${lastName}`}</Heading>
                    <Text fontSize="md" style={{ color: "#27C0DA" }}  >{email}</Text>
                </VStack>
            </HStack>
        </Link>
    )
}


