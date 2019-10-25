/**
 * @format
 */

import { Navigation } from "react-native-navigation";
import { registerScreen } from './src/navigation/config';
import navigation from './src/navigation';
import { AppRegistry } from 'react-native';
import Data from './src/screens/Data'

import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Data);

registerScreen();
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot(navigation.Data())
});
