import * as React from "react";
import {Avatar,Flex, ScrollView, Link} from "native-base";

// FavouritesScreen -
// Renders avatars of favourite contacts
// When an  individual avatar is pressed , one will be navigated to UserContactScreen
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

const FavouritesScreen = ({navigation}) => {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <Flex direction="row" flexWrap="wrap" pt={3}  >
                {
                    users.map((user,i) => (
                        <Link onPress={() => { navigation.navigate("UserContact",{user})}}>
                        <Avatar
                            m={3}
                            key={user.id}
                            size="xl"
                            source={{
                            uri: user.avatar,
                        }}
                        >
                            RS
                        </Avatar>
                        </Link>
                    ))
                }

            </Flex>
        </ScrollView>
    );
};

export default FavouritesScreen;