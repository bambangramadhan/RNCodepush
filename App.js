import React from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import CodePush from 'react-native-code-push';

export class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      logs: []
    }
  }

  codePushSync = () => {
    this.setState({ logs: ['Started at ' + new Date()] });
    CodePush.sync({
      updateDialog: true,
      installMode: CodePush.InstallMode.IMMEDIATE
    }, (status) => {
      for (var key in CodePush.SyncStatus) {
        if (status === CodePush.SyncStatus[key]) {
          this.setState(prevState => ({ logs: [...prevState.logs, key.replace(/_/g, '')] }));
          break;
        }
      }
    });
  }

  render() {
    console.log('state logs', JSON.stringify(this.state.logs));
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => this.codePushSync()} style={{ height: 40, width: 250, backgroundColor: 'green', borderRadius: 10, justifyContent: 'center' }}>
          <Text style={{ textAlign: 'center' }}>
            {'Klik untuk mengupdate app using CODEPUSH'}
          </Text>
        </TouchableOpacity>
        <View>
          <Text>
            {"Ayo bisa, berhasil kuy, kamu bisa"}
          </Text>
          <Text style={{ marginTop: 150 }}>
            {JSON.stringify(this.state.logs)}
          </Text>
        </View>
      </View >
    );
  };
};

let codePushOptions = { checkFrequency: CodePush.CheckFrequency.MANUAL };

export default CodePush(codePushOptions)(App);
