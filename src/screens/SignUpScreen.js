import React, { useState } from 'react';
import {
    Box,
    Heading,
    VStack,
    FormControl,
    Input,
    Button,
    Center,
    ScrollView,
    Text
} from 'native-base';
import { connect } from "react-redux";
import { startSignUp } from "../actions/auth";


// SignUpScreen -
// Allows user to input credentials for signup namely: email and password and submit 
// to server for signup
const SignUpScreen = (props) => {

    // component state using hook- includes respective input fields
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    // on click submit handler:- calls startSignUp async action
    const onPressSubmit = () => {
        if (email && password && confirmPassword) {
            // check if both passwords match
            if (password === confirmPassword) {
                let user = { email, password };
                props.startSignUp(user);
            }

        }
    }


    return (
        <ScrollView bg="white">
            <Center flex={1} >
                <Box
                    flex={1}
                    p={2}
                    w="90%"
                    mx='auto'
                >
                    <Heading size="lg" color='primary.500'>
                        Welcome
        </Heading>
                    <Heading color="muted.400" size="xs">
                        Sign up to continue!
        </Heading>
                    <VStack space={2} mt={5}>
                        <FormControl>
                            <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}>
                                Email
            </FormControl.Label>
                            <Input
                                value={email}
                                onChangeText={(text) => setEmail(text)} />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}>
                                Password
            </FormControl.Label>
                            <Input
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                            />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}>
                                Confirm Password
            </FormControl.Label>
                            <Input
                                value={confirmPassword}
                                onChangeText={(text) => setConfirmPassword(text)}
                            />
                        </FormControl>
                        <VStack space={2} mt={5}>
                            {props.error !== null && <Text color="red.500">{props.error}</Text>}

                            <Button colorScheme="cyan" _text={{ color: 'white' }} isLoading={props.loading} onPress={onPressSubmit}>
                                SignUp
          </Button>
                        </VStack>
                    </VStack>
                </Box>
            </Center>
        </ScrollView>
    );
}


const mapStateToProps = (state) => {
    let { error, loading } = state.auth
    return {
        error,
        loading

    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        startSignUp: (user) => dispatch(startSignUp(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);