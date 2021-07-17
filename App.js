import React, { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from 'native-base';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./src/reducers/Index";
import { AuthNavigator, AppNavigator } from './src/navigation/AppNavigation';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  // configure redux store and intergrate thunk from redux-thunk module:
  // thunk middlware enables us to define async redux actions 
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const appStore = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
   
  );
  // if (isLoading) return <LoaderScreen />;
  return (
    <Provider store={appStore}>
    <NativeBaseProvider >
      <NavigationContainer>
          <AppNavigator />
      </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
};
export default App;
