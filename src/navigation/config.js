import { Navigation } from 'react-native-navigation';
import Test from '../screens/Test';
import Bams from '../screens/Bams';
import Data from '../screens/Data';

export function registerScreen() {
  Navigation.registerComponent(`Test`, () => Test);
  Navigation.registerComponent(`Bams`, () => Bams);
  Navigation.registerComponent(`Data`, () => Data);
}