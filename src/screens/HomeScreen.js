import React, {useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Bbc from '../../components/BbcHeadlines';
import Categories from '../../components/Categories';
import Trending from '../../components/Trending';
import config from '../../config/config';
import GetNews from './GetNews';

const HomeScreen = ({navigation}) => {
  //   useEffect(() => {
  //     console.log(config.API_KEY);
  //   }, []);

  return (
    <ScrollView>
      <Categories navigation={navigation} />
      <Trending />
      <Text>BBC HEADLINES</Text>
      <Bbc />
    </ScrollView>
  );
};

export default HomeScreen;

// 1. Clear watchman watches: watchman watch-del-all
// 2. Delete node_modules and run yarn install
// 3. Reset Metro's cache: yarn start --reset-cache
// 4. Remove the cache: rm -rf /tmp/metro-*
