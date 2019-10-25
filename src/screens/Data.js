import React from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import CodePush from 'react-native-code-push';
import { Navigation } from 'react-native-navigation';

import navigation from '../navigation';

export class Data extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      logs: []
    }
  }

  codePushSync = () => {
    Navigation.setRoot(navigation.Test());
  }

  render() {
    console.log('state logs', JSON.stringify(this.state.logs));
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => this.codePushSync()} style={{ height: 90, width: 200, backgroundColor: 'green', borderRadius: 10, justifyContent: 'center' }}>
          <Text style={{ textAlign: 'center' }}>
            {'Ini Data screen'}
          </Text>
        </TouchableOpacity>
      </View >
    );
  };
};

// let codePushOptions = { checkFrequency: CodePush.CheckFrequency.MANUAL };

export default Data;
