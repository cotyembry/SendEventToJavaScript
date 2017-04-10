import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  NativeEventEmitter,
  NativeModules
} from 'react-native';

var SwiftEventEmitter = NativeModules.SwiftEventEmitter;

export default class App extends React.Component {
  constructor(props) {
    super(props);

    //create the instance of the event emitter so I can listen to the native events that get sent to the js side
    this.eventEmitter = new NativeEventEmitter(SwiftEventEmitter);
    // this.subscription = this.eventEmitter.addListener('deviceList', this.deviceListCallback.bind(this));
    this.subscription1 = this.eventEmitter.addListener('test', (body) => { console.log('in test event listener callback', body)});
    
  }
  componentWillUnmount() {
    this.subscription1.remove()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
