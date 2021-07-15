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
} from 'native-base';

// LoginScreen- 
// Allow users to input their account credentials namely: email id and password before submitting
// for authentication
const LoginScreen = (props) => {
    return (
        <Center flex={1} bg="white" >
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
                            <Input />
                        </FormControl>
                        <FormControl mb={5}>
                            <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}>
                                Password
            </FormControl.Label>
                            <Input type="password" />
                            <Link
                                _text={{ fontSize: 'xs', fontWeight: '700', color: 'cyan.500' }}
                                alignSelf="flex-end"
                                mt={1}
                            >
                                Forget Password?
            </Link>
                        </FormControl>
                        <VStack space={2}>
                            <Button colorScheme="cyan" _text={{ color: 'white' }}>
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
    )
}

export default LoginScreen;