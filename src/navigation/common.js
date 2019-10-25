import { Navigation } from 'react-native-navigation';

export const switchToTab = (componentId, index) => {
  Navigation.mergeOptions(componentId, {
    bottomTabs: {
      currentTabIndex: index,
    },
  })
}