import * as React from "react";
import { Avatar, Flex, ScrollView, Link } from "native-base";
import { connect } from "react-redux";
import { AppAlert } from "../components/Alert";
import { Loader } from "../components/Loader";


// FavouritesScreen -
// Renders avatars of favourite contacts
// When an  individual avatar is pressed , one will be navigated to UserContactScreen
const FavouritesScreen = ({ navigation, users, loading, error }) => {
    if (loading) return (<Loader />)
    if (error) return (<AppAlert status="error" message={error} />)
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <Flex direction="row" flexWrap="wrap" pt={3}  >
                {
                    users.map((user, i) => (
                        <Link key={user.id} onPress={() => { navigation.navigate("UserContact", { user }) }}>
                            <Avatar
                                m={3}
                                size="xl"
                                source={{
                                    uri: user.picture,
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


function mapStateToProps(state) {
    let { users, loading, error } = state.users;
    return {
        users,
        loading,
        error
    }

}

export default connect(mapStateToProps)(FavouritesScreen);