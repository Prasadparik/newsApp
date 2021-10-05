import React from 'react';
import {View, Text} from 'react-native';
import {WebView} from 'react-native-webview';

const ViewWeb = ({route}) => {
  const {url} = route.params;

  return <WebView source={{uri: `${url}`}} />;
};

export default ViewWeb;
