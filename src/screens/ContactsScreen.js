import * as React from "react";
import { Box, FlatList } from "native-base";
import { ContactListItem } from "../components/ContactListItem";

// Contact Screen -
// Renders all the contacts of users to the user
// Each contact contains user avatar, name and mobile number
// When tapped , one will views user profile
// It contains a Flatlist which loops through the users list and renders ContactListItem component
const users = [
    {
        id: 0,
        avatar: 'https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg',
        name: "ms. Sara Andersen",
        email: "sara.andersen@example.com",
        phone: "92694011",
        gender: "female",
        DOB: "Apr 30 1996",
        registerDate: "Jun 22 2021",
        address: "Denmark, Nordjylland, Kongsvinger9614, SÃ¸ndermarksvej"
    },
    {
        id: 2,
        avatar: 'https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg',
        name: "ms. Sara Andersen",
        email: "sara.andersen@example.com",
        phone: "92694011",
        gender: "female",
        DOB: "Apr 30 1996",
        registerDate: "Jun 22 2021",
        address: "Denmark, Nordjylland, Kongsvinger9614, SÃ¸ndermarksvej"
    },
    {
        id: 3,
        avatar: "https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg",
        name: "ms. Sara Andersen",
        email: "sara.andersen@example.com",
        phone: "92694011",
        gender: "female",
        DOB: "Apr 30 1996",
        registerDate: "Jun 22 2021",
        address: "Denmark, Nordjylland, Kongsvinger9614, SÃ¸ndermarksvej"
    },
    {
        id: 4,
        avatar: 'https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg',
        name: "ms. Sara Andersen",
        email: "sara.andersen@example.com",
        phone: "92694011",
        gender: "female",
        DOB: "Apr 30 1996",
        registerDate: "Jun 22 2021",
        address: "Denmark, Nordjylland, Kongsvinger9614, SÃ¸ndermarksvej"
    },
    {
        id: 5,
        avatar: 'https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg',
        name: "ms. Sara Andersen",
        email: "sara.andersen@example.com",
        phone: "92694011",
        gender: "female",
        DOB: "Apr 30 1996",
        registerDate: "Jun 22 2021",
        address: "Denmark, Nordjylland, Kongsvinger9614, SÃ¸ndermarksvej"
    },
    {
        id: 6,
        avatar: 'https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg',
        name: "ms. Sara Andersen",
        email: "sara.andersen@example.com",
        phone: "92694011",
        gender: "female",
        DOB: "Apr 30 1996",
        registerDate: "Jun 22 2021",
        address: "Denmark, Nordjylland, Kongsvinger9614, SÃ¸ndermarksvej"
    },
    {
        id: 7,
        avatar: 'https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg',
        name: "ms. Sara Andersen",
        email: "sara.andersen@example.com",
        phone: "92694011",
        gender: "female",
        DOB: "Apr 30 1996",
        registerDate: "Jun 22 2021",
        address: "Denmark, Nordjylland, Kongsvinger9614, SÃ¸ndermarksvej"
    },
    {
        id: 8,
        avatar: 'https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg',
        name: "ms. Sara Andersen",
        email: "sara.andersen@example.com",
        phone: "92694011",
        gender: "female",
        DOB: "Apr 30 1996",
        registerDate: "Jun 22 2021",
        address: "Denmark, Nordjylland, Kongsvinger9614, SÃ¸ndermarksvej"
    },
    {
        id: 9,
        avatar: 'https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg',
        name: "ms. Sara Andersen",
        email: "sara.andersen@example.com",
        phone: "92694011",
        gender: "female",
        DOB: "Apr 30 1996",
        registerDate: "Jun 22 2021",
        address: "Denmark, Nordjylland, Kongsvinger9614, SÃ¸ndermarksvej"
    },
    {
        id: 10,
        avatar: 'https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg',
        name: "ms. Sara Andersen",
        email: "sara.andersen@example.com",
        phone: "92694011",
        gender: "female",
        DOB: "Apr 30 1996",
        registerDate: "Jun 22 2021",
        address: "Denmark, Nordjylland, Kongsvinger9614, SÃ¸ndermarksvej"
    },
    {
        id: 11,
        avatar: 'https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg',
        name: "ms. Sara Andersen",
        email: "sara.andersen@example.com",
        phone: "92694011",
        gender: "female",
        DOB: "Apr 30 1996",
        registerDate: "Jun 22 2021",
        address: "Denmark, Nordjylland, Kongsvinger9614, SÃ¸ndermarksvej"
    }
    ,
    {
        id: 12,
        avatar: 'https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg',
        name: "ms. Sara Andersen",
        email: "sara.andersen@example.com",
        phone: "92694011",
        gender: "female",
        DOB: "Apr 30 1996",
        registerDate: "Jun 22 2021",
        address: "Denmark, Nordjylland, Kongsvinger9614, SÃ¸ndermarksvej"
    },
    {
        id: 13,
        avatar: 'https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg',
        name: "ms. Sara Andersen",
        email: "sara.andersen@example.com",
        phone: "92694011",
        gender: "female",
        DOB: "Apr 30 1996",
        registerDate: "Jun 22 2021",
        address: "Denmark, Nordjylland, Kongsvinger9614, SÃ¸ndermarksvej"
    },
    {
        id: 14,
        avatar: 'https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg',
        name: "ms. Sara Andersen",
        email: "sara.andersen@example.com",
        phone: "92694011",
        gender: "female",
        DOB: "Apr 30 1996",
        registerDate: "Jun 22 2021",
        address: "Denmark, Nordjylland, Kongsvinger9614, SÃ¸ndermarksvej"
    },
    {
        id: 15,
        avatar: 'https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg',
        name: "ms. Sara Andersen",
        email: "sara.andersen@example.com",
        phone: "92694011",
        gender: "female",
        DOB: "Apr 30 1996",
        registerDate: "Jun 22 2021",
        address: "Denmark, Nordjylland, Kongsvinger9614, SÃ¸ndermarksvej"
    },
    {
        id: 16,
        avatar: 'https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg',
        name: "ms. Sara Andersen",
        email: "sara.andersen@example.com",
        phone: "92694011",
        gender: "female",
        DOB: "Apr 30 1996",
        registerDate: "Jun 22 2021",
        address: "Denmark, Nordjylland, Kongsvinger9614, SÃ¸ndermarksvej"
    }
]

const ContactsScreen = (props) => {
   
    return (
    
        <Box flex={1} backgroundColor="white"   >
            <FlatList
                data={users}
                               renderItem={({ item }) => (
                    <ContactListItem
                        name={item.name}
                        avatar={item.avatar}
                        phone={item.phone}
                        onPress={() => props.navigation.navigate('ContactProfile', {user: item})}
                    />
                )}
                keyExtractor={(user) => user.id}
            />
        </Box>
    );
};

export default ContactsScreen;