import * as React from "react";
import {
    Box,
    Heading,
    VStack,
    FormControl,
    Input,
    Button,
    TextArea,
    ScrollView,
} from 'native-base';

// Feedback Screen -
//Allows user to send feedbck about application experience
// It contains three input fields for the user namely:- email, subject, and message
const FeedbackScreen = () => {
    return (
        <ScrollView style={{ backgroundColor: "white" }}>
            <Box
                flex={1}
                p={5}
                w="100%"
                mx='auto'

            >
                <Heading size="lg" mt="4" color='primary.500'>
                    Send Feedback
        </Heading>
                <VStack space={2} mt={5}>
                    <FormControl>
                        <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}>
                            Email
            </FormControl.Label>
                        <Input />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}>
                            Subject
            </FormControl.Label>
                        <Input />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}>
                            Message
            </FormControl.Label>
                        <TextArea h={20} placeholder="Enter message....." />
                        {/* <Input type="password" /> */}
                    </FormControl>
                    <VStack space={2} mt={5}>
                        <Button colorScheme="cyan" _text={{ color: 'white' }}>
                            Submit
          </Button>
                    </VStack>
                </VStack>
            </Box>
        </ScrollView>
    );
};

export default FeedbackScreen;