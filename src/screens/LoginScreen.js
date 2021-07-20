import * as React from 'react';
import {
    Box,
    Text,
    Heading,
    VStack,
    FormControl,
    Input,
    Link,
    Button,
    HStack,
    Center,
    ScrollView,
} from 'native-base';
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

// LoginScreen- 
// Allow users to input their account credentials namely: email id and password before submitting
// for authentication
const LoginScreen = (props) => {


    // component state using react hook[useState] with input fields
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");


    // submit handler :- submits user credentials to login async redux function if all values are input
    // otherwise display error
    const onPressSubmit = () => {
        console.log('onPressSubmit', email, password);
        if (email && password) {
            let user = { email, password };
            props.startLogin(user);
        }

    };

    return (
        <ScrollView bg="white">
            {/* {renderError()} */}
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
                        Sign in to continue!
        </Heading>

                    <VStack space={2} mt={5}>
                        <FormControl>
                            <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}>
                                Email ID
            </FormControl.Label>
                            <Input
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                            />
                        </FormControl>
                        <FormControl mb={5}>
                            <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}>
                                Password
            </FormControl.Label>
                            <Input
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                            />
                            <Link
                                _text={{ fontSize: 'xs', fontWeight: '700', color: 'cyan.500' }}
                                alignSelf="flex-end"
                                mt={1}
                            >
                                Forget Password?
            </Link>
                        </FormControl>
                        <VStack space={2}>
                            {props.error !== null && <Text color="red.500">{props.error}</Text>}
                            <Button colorScheme="cyan" _text={{ color: 'white' }} isLoading={props.loading} onPress={onPressSubmit}>
                                Login
          </Button>

                        </VStack>
                        <HStack justifyContent="center">
                            <Text fontSize='sm' color='muted.700' fontWeight={400}>I'm a new user. </Text>
                            <Link _text={{ color: 'cyan.500', bold: true, fontSize: 'sm' }} onPress={() => props.navigation.navigate("SignUp")}>
                                Sign Up
            </Link>
                        </HStack>
                    </VStack>
                </Box>
            </Center>
        </ScrollView>
    )
}

const mapStateToProps = (state) => {
    let { loading, error } = state.auth;
    return {
        loading, error
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        startLogin: (user) => dispatch(startLogin(user))

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);