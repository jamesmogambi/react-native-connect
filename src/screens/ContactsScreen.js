import React, { useEffect } from "react";
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
export const ContactsScreen = (props) => {


    // react hook[useEffect] which calls async action creator[getUsers]
    useEffect(() => {
        props.getUsers();
        // let unMounted = false;
        // if (!unMounted) {
        //     props.getUsers();
        // }
        // return () => {
        //     unMounted = true;
        // };
    }, []);


    if (props.loading) return <Loader />;
    if (props.error) return (<AppAlert status="error" message={props.error} />);
    return (
        <Box flex={1} backgroundColor="white" >
            {/* If array is not received or length is 0,
               that means we have no users thus display no contacts
                otherwise display flatlist which renders users list
           */}
            { !Array.isArray(props.users) || props.users.length === 0 ?
                <Center m={4} ><Heading color="black">
                    No contacts
                </Heading></Center>
                :
                (<FlatList
                    data={props.users}
                    renderItem={({ item }) => (
                        <ContactListItem
                            title={item.title}
                            firstName={item.firstName}
                            lastName={item.lastName}
                            email={item.email}
                            picture={item.picture}
                            onPress={() => props.navigation.navigate('ContactProfile', { user: item })}
                        />
                    )}
                    keyExtractor={(user) => user.id}
                />)}
        </Box>

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
    let { users, error, loading } = state.users;
    return {
        users,
        loading,
        error
    };
}
// connects component to store:- 
// this produces Higher Order Component which is connected to store thus allows us to access redux store resources
export default connect(mapStateToProps, mapDispatchToProps)(ContactsScreen);