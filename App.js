import React, { useState, useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from 'native-base';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./src/reducers/Index";
import { AuthNavigator, AppNavigator } from './src/navigation/AppNavigation';
import * as firebase from 'firebase';


// obtain firebase keys from google--firebase config
const firebaseConfig = {
  apiKey: "AIzaSyACkd_oLyujJx78xri4HyIESYG7sfwGWas",
  authDomain: "react-native-connect.firebaseapp.com",
  projectId: "react-native-connect",
  storageBucket: "react-native-connect.appspot.com",
  messagingSenderId: "156485908067",
  appId: "1:156485908067:web:bb111cb1f4f192f5316a56",
  measurementId: "G-1GNRSLSBSG"
};

// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const App = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);

  // check if user is logged in ---if user is authenticated 
  // return AppNavigator which renders protected screens
  // otherwise return AuthNavigator which renders unprotected  screens
  useEffect(
    () => {
      //  check if user is logged in---
      //  using firebase observer--listens to athentication status 
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in
          let uid = user.uid;
          setIsLoggedin(true);
        } else {
          // User is signed out
          setIsLoggedin(false);
        }
      });

    }

    , []
  );

  // configure redux store and intergrate thunk from redux-thunk module:
  // thunk middlware enables us to define async redux actions 
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const appStore = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))

  );
  return (
    <Provider store={appStore}>
      <NativeBaseProvider >
        <NavigationContainer>
          {/* // check if user is logged in ---if user is authenticated 
  // return AppNavigator which renders protected screens
  // otherwise return AuthNavigator which renders unprotected  screens */}
          {isLoggedin ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
};
export default App;
