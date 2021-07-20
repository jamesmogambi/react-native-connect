import React, { useEffect } from "react";
import { Box } from "native-base";
import { connect } from "react-redux";
import { getUserProfile } from "../actions/users";
import { DetailSection } from "../components/DetailSection";
import { DetailItem } from "../components/DetailItem";
import { Loader } from "../components/Loader";
import { AppAlert } from "../components/Alert";


// ContactProfileScreen :-
// Allows one to view user profile in detail
// Displays user avatar, name, email, personal mobile number, Date of Birth 
// Receives navigation props which contains params( this params object has user data )
//  Contains two children components namely:- DetailSection and DetailItem
export const ContactProfileScreen = (props) => {
    let { route, userProfile, loading, error } = props;

    const { user } = route.params;

    console.log('props------', userProfile);

    // useEffect hook --- when screen mounts get user profile 
    useEffect(() => {
        let id = user.id;
        props.getUserProfile(id);
    }, []);

    if (error) return (<AppAlert status="error" message={error} />)
    return (
        !props.userProfile ? (<Loader />) : (
            <Box backgroundColor="white" flex={1}>
                <DetailSection user={props.userProfile} />
                <DetailItem iconName="email" title="Email" name={props.userProfile.email} />
                <DetailItem iconName="phone-iphone" title="Personal" name={props.userProfile.phone} />
                <DetailItem iconName="person-pin" title="Date of birth" name={props.userProfile.dateOfBirth} />
            </Box>
        )
    )

}


function mapStateToProps(state) {
    let { userProfile, loading, error } = state.users;
    return {
        loading,
        userProfile,
        error
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getUserProfile: (id) => dispatch(getUserProfile(id))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ContactProfileScreen);