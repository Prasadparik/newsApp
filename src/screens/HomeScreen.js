import React, {useEffect} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import Apple from '../../components/AppleNews';
import Bbc from '../../components/BbcHeadlines';
import Categories from '../../components/Categories';
import Tesla from '../../components/Tesla';
import Trending from '../../components/Trending';
import UsHeadline from '../../components/UsHeadline';

const HomeScreen = ({navigation}) => {
  //   useEffect(() => {
  //     console.log(config.API_KEY);
  //   }, []);

  return (
    <ScrollView style={styles.ScrollView}>
      <Categories navigation={navigation} />

      <Text style={styles.Heading}>TRENDING</Text>
      <Trending navigation={navigation} />
      <View style={styles.divider} />

      <Text style={styles.Heading}>BBC HEADLINES</Text>
      <Bbc navigation={navigation} />
      <View style={styles.divider} />

      <Text style={styles.Heading}>US HEADLINES</Text>
      <UsHeadline navigation={navigation} />
      <View style={styles.divider} />

      <Text style={styles.Heading}>Tesla News</Text>
      <Tesla navigation={navigation} />
      <View style={styles.divider} />

      <Text style={styles.Heading}>Apple News</Text>
      <Apple navigation={navigation} />

      <View style={styles.BottomSpace} />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  ScrollView: {
    backgroundColor: '#fff',
  },
  Heading: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 9,
    paddingTop: 12,
  },
  divider: {
    height: 0.5,
    backgroundColor: '#ccc',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  BottomSpace: {
    height: 40,
  },
});

// 1. Clear watchman watches: watchman watch-del-all
// 2. Delete node_modules and run yarn install
// 3. Reset Metro's cache: yarn start --reset-cache
// 4. Remove the cache: rm -rf /tmp/metro-*
