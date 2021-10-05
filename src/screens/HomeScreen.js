import React, {useEffect} from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';
import Bbc from '../../components/BbcHeadlines';
import Categories from '../../components/Categories';
import Trending from '../../components/Trending';

const HomeScreen = ({navigation}) => {
  //   useEffect(() => {
  //     console.log(config.API_KEY);
  //   }, []);

  return (
    <ScrollView>
      <Categories navigation={navigation} />

      <Text style={styles.Heading}>BBC HEADLINES</Text>
      <Bbc navigation={navigation} />

      <Text style={styles.Heading}>TRENDING</Text>
      <Trending navigation={navigation} />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  Heading: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 12,
    marginVertical: 8,
    marginTop: 12,
  },
});

// 1. Clear watchman watches: watchman watch-del-all
// 2. Delete node_modules and run yarn install
// 3. Reset Metro's cache: yarn start --reset-cache
// 4. Remove the cache: rm -rf /tmp/metro-*
