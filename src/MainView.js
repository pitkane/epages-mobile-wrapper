import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native'

class MainView extends Component {

  constructor(props) {
    super(props)

    this.state = {
      // url: 'http://mikko.omaverkkokauppa.fi/epages/mikko.mobile',
      url: 'http://www.puuilo.fi/epages/puuilo.mobile',
      status: 'No Page Loaded',
      // backButtonEnabled: false,
      // forwardButtonEnabled: false,
      loading: false,
      scalesPageToFit: true,
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <WebView
          ref='webview'
          automaticallyAdjustContentInsets={false}
          style={styles.webView}
          source={{uri: this.state.url}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          startInLoadingState={true}
          scalesPageToFit={this.state.scalesPageToFit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  webView: {
    flex: 1,
  },
  // welcome: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10,
  // },
  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5,
  // },
});

export default MainView
