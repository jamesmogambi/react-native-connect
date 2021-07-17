import * as React from "react";
import { Box } from "native-base"; 
import { DetailSection } from "../components/DetailSection";
import { DetailItem } from "../components/DetailItem";


// ContactProfileScreen :-
// Allows one to view user profile in detail
// Displays user avatar, name, email, personal mobile number, Date of Birth 
// Receives navigation props which contains params( this params object has user data )
//  Contains two children components namely:- DetailSection and DetailItem
const ContactProfileScreen = ({ route, navigation }) => {
    const { user } = route.params;
    return ( 
        <Box backgroundColor="white" flex={1}>
            <DetailSection user={user} />
            <DetailItem iconName="email" title="Email" name={user.email} />
            <DetailItem iconName="phone-iphone" title="Personal" name={user.phone} />
            <DetailItem iconName="person-pin" title="Date of birth" name={user.email} />
       </Box>
    )
}

export default ContactProfileScreen;

