import React from 'react';
import { Navigation } from 'react-native-navigation';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Login from '../screens/Login';
import Home from '../screens/Home';
import SignUp from '../screens/Login/SignUp';
import ForgotPassword from '../screens/Login/ForgotPassword';
import Profile from '../screens/User/Profile';
import ChangePassword from '../screens/User/ChangePassword';
import UpdateUsers from '../screens/User/UpdateUsers';

const SCREENS_WITH_REDUX = {
  Login,
  Home,
  SignUp,
  ForgotPassword,
  Profile,
  ChangePassword,
  UpdateUsers,
};
const SCREENS = {};

function registerScreens(store, persistor) {
  const PersistProvider = (props) => {
    const { children } = props;

    return (
      <Provider {...props}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    );
  };

  Object.keys(SCREENS_WITH_REDUX).map((screenName) => {
    Navigation.registerComponentWithRedux(
      screenName,
      () => gestureHandlerRootHOC(SCREENS_WITH_REDUX[screenName]),
      PersistProvider,
      store,
    );
  });

  Object.keys(SCREENS).map((screenName) => {
    Navigation.registerComponent(screenName, () => SCREENS[screenName]);
  });
}

export default registerScreens;
