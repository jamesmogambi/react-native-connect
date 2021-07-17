import React, { useState, useEffect } from "react";
import { Box, Center, FlatList, Heading } from "native-base";
import { connect } from "react-redux";
import { ContactListItem } from "../components/ContactListItem";
import { AppAlert } from "../components/Alert";
import { Loader } from "../components/Loader";
import { getUsers } from "../actions/users";

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

export const ContactsScreen = (props) => {


    //  react hook[useState] to define our application state 
    const [isLoading, setisLoading] = useState(true);

    // react hook[useEffect] which calls async action creator[getUsers]
    useEffect(() => {
        props.getUsers();
        setisLoading(false);
    }, []);


    if (isLoading) return <Loader />;
    return (
        <Box flex={1} backgroundColor="white" >
            {/* // {props.error && <AppAlert status="error" message={props.error} />} */}
            {/* If array is not received or length is 0,
               that means we have no users thus display no contacts
                otherwise display flatlist which renders users list
           */}
            { !Array.isArray(props.users) || props.user.length === 0 ?
                <Center m={4} ><Heading color="black">
                    No contacts
                </Heading></Center>
                :
                (<FlatList
                    data={props.users}
                    renderItem={({ item }) => (
                        <ContactListItem
                            title={item.title}
                            firstname={item.firstname}
                            lastname={item.lastname}
                            email={item.email}
                            picture={item.picture}
                            onPress={() => props.navigation.navigate('ContactProfile', { user: item })}
                        />
                    )}
                    keyExtractor={(user) => user.id}
                />)}
        </Box>


        // -----test
        // <Box flex={1} bg="white">
        //     {/* If error render Alert otherwise return FlatList which displays users list */}
        //     {props.error ? <AppAlert status="error" message={props.error} /> :
        //         //     {/* If array is not received or length is 0,
        //         //        that means we have no users thus display no contacts
        //         //         otherwise display flatlist which renders users list
        //         //    */}

        //         !Array.isArray(props.users) || props.user.length === 0 ?
        //             <Center m={4} ><Heading color="black">
        //                 No contacts
        //         </Heading></Center>
        //             :

        //             <FlatList
        //                 data={props.users}
        //                 renderItem={({ item }) => (
        //                     <ContactListItem
        //                         title={item.title}
        //                         firstname={item.firstname}
        //                         lastname={item.lastname}
        //                         email={item.email}
        //                         picture={item.picture}
        //                         onPress={() => props.navigation.navigate('ContactProfile', { user: item })}
        //                     />
        //                 )}
        //                 keyExtractor={(user) => user.id}
        //             />
        //     }

        // </Box>

    );
};

// MapDispatchToProps allows app to call respective action creator functions
const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => dispatch(getUsers())
    };
}
// MapStateToProps allows app to grab state resources from redux-store
const mapStateToProps = (state) => {
    console.log("users state", state.users)
    let { users, error } = state.users;
    return {
        users,
        error
    };
}
// connects component to store:- 
// this produces Higher Order Component which is connected to store thus allows us to access redux store resources
export default connect(mapStateToProps, mapDispatchToProps)(ContactsScreen);