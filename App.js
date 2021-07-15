import React ,{useState }from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from 'native-base';
import { AuthNavigator } from './src/navigation/AppNavigation';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  // if (isLoading) return <LoaderScreen />;
  return (
    <NativeBaseProvider >
      <NavigationContainer  >
        <AuthNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
export default App;
// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, View, Alert, Text } from 'react-native';
// import { HStack, Stack, Center, NativeBaseProvider, Heading } from "native-base"
// import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
// import {
//   NativeBaseProvider,
//   Box,
//   Text,
//   Heading,
//   VStack,
//   FormControl,
//   Input,
//   Link,
//   Button,
//   Icon,
//   IconButton,
//   HStack,
//   Divider
// } from 'native-base';
// export default function App() {
//   return (
//     // <View style={styles.container}>
//     //   <Text>Open up App.js to start working on your app!</Text>
//     //   <Text>Open up App.js to start working on your app!</Text>
//     //   <Text>Open up App.js to start working on your app!</Text>

//     //   <StatusBar style="auto" />
//     // </View>
//     // <NativeBaseProvider>
//     //   <Center flex={1}>
//     //     <Stack space={3} alignItems="center">
//     //       <Heading>HStack</Heading>
//     //       <HStack space={3} alignItems="center">
//     //         <Center
//     //           size={16}
//     //           bg="primary.400"
//     //           rounded="md"
//     //           _text={{
//     //             color: "white",
//     //           }}
//     //           shadow={3}
//     //         >
//     //           Box 1
//     //     </Center>
//     //         <Center
//     //           bg="secondary.400"
//     //           size={16}
//     //           rounded="md"
//     //           _text={{
//     //             color: "white",
//     //           }}
//     //           shadow={3}
//     //         >
//     //           Box 2
//     //     </Center>
//     //         <Center
//     //           size={16}
//     //           bg="emerald.400"
//     //           rounded="md"
//     //           _text={{
//     //             color: "white",
//     //           }}
//     //           shadow={3}
//     //         >
//     //           Box 3
//     //     </Center>
//     //       </HStack>
//     //     </Stack>

//     //   </Center>
//     // </NativeBaseProvider>
//     <NativeBaseProvider>
//       <Box
//         flex={1}
//         p={2}
//         w="90%"
//         mx='auto'
//       >
//         <Heading size="lg" color='primary.500'>
//           Welcome
//         </Heading>
//         <Heading color="muted.400" size="xs">
//           Sign in to continue!
//         </Heading>

//         <VStack space={2} mt={5}>
//           <FormControl>
//             <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}>
//               Email ID
//             </FormControl.Label>
//             <Input />
//           </FormControl>
//           <FormControl mb={5}>
//             <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}>
//               Password
//             </FormControl.Label>
//             <Input type="password" />
//             <Link
//               _text={{ fontSize: 'xs', fontWeight: '700', color: 'cyan.500' }}
//               alignSelf="flex-end"
//               mt={1}
//             >
//               Forget Password?
//             </Link>
//           </FormControl>
//           <VStack space={2}>
//             <Button colorScheme="cyan" _text={{ color: 'white' }}>
//               Login
//           </Button>

//             <HStack justifyContent="center" alignItem='center'>
//               {/* <IconButton
//                 variant='unstyled'
//                 startIcon={
//                   <Icon
//                     as={< MaterialCommunityIcons name="facebook" />}
//                     color='muted.700'
//                     size='sm'
//                   />
//                 }
//               /> */}
//               {/* <IconButton
//                 variant='unstyled'
//                 startIcon={
//                   <Icon
//                     as={< MaterialCommunityIcons name="google" />}
//                     color='muted.700'
//                     size="sm"
//                   />
//                 }
//               /> */}
//               {/* <IconButton
//                 variant='unstyled'
//                 startIcon={
//                   <Icon
//                     as={< MaterialCommunityIcons name="github" />}
//                     color='muted.700'
//                     size="sm"
//                   />
//                 }
//               /> */}
//             </HStack>
//           </VStack>
//           <HStack justifyContent="center">
//             <Text fontSize='sm' color='muted.700' fontWeight={400}>I'm a new user. </Text>
//             <Link _text={{ color: 'cyan.500', bold: true, fontSize: 'sm' }} href="#">
//               Sign Up
//             </Link>
//           </HStack>
//         </VStack>
//       </Box>
//     </NativeBaseProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
