import React from "react";
import { VStack, Center, Heading, Button, Image } from "native-base";


// Welcome  screen
// By default , its the first screen to render when the application mounts
// It contains the company logo and two buttons , one for navigating  to login screen 
// and the other to navigate to sign up screen
const WelcomeScreen = (props) => {
    return (
        <Center flex={1} backgroundColor="white">
            <VStack alignItems="center" space={4} width="100%">
                {/* <Ima/ge source={require('../../assets/wine.jpg')} alt="wine" height={250} width={250} /> */}
                <Heading color='primary.500'>Connect</Heading>
                {/*  on press button you will be navigated to LoginScreen */}
                <Button size="lg" backgroundColor="primary.500" style={{ width: "70%" }}
                    onPress={() => props.navigation.navigate("Login")} >Log In</Button>
                {/*  on press button you will be navigated to SignUpScreen */}
                <Button size="lg" variant="outline" borderColor="primary.500" _text={{ color: 'primary.500' }} style={{ width: "70%" }}
                    onPress={() => props.navigation.navigate("SignUp")}>Sign Up</Button>
            </VStack>
        </Center>
    )
}

export default WelcomeScreen;
