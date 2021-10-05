import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import config from '../../config/config';

const GetNews = ({route, navigation}) => {
  const {category} = route.params;

  let CATEGORY = category.toLowerCase();
  const [news, setNews] = useState([]);
  useEffect(() => {
    //   Page Title
    navigation.setOptions({
      title: category,
    });

    // API DATA FETCH
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${CATEGORY}&apiKey=${config.API_KEY}`,
    )
      .then(res => res.json())
      .then(response => {
        setNews(response.articles);
        console.log('LENGTH :: ', news.length);
        console.log(category.toLowerCase());
      })
      .catch(error => {
        console.log('ERROR [[ ', error);
      });
  }, []);

  //   GET CATEGORY NEWS
  const CategoryNews = () => {
    return news.map((news, index) => {
      return (
        <TouchableOpacity
          key={index}
          onPress={() =>
            navigation.navigate('WebView', {
              url: news.url,
            })
          }>
          <View style={styles.newsWrapper}>
            <Image
              style={styles.newsImage}
              source={{uri: `${news.urlToImage}`}}
            />
            <Text style={styles.newsTitle}>{news.title}</Text>
          </View>
        </TouchableOpacity>
      );
    });
  };

  return (
    <View>
      {news.length === 0 ? (
        <ActivityIndicator color="red" size="large" />
      ) : (
        <ScrollView>{CategoryNews()}</ScrollView>
      )}
    </View>
  );
};

export default GetNews;

const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: '#f8f6fe',
    padding: 8,
  },
  newsWrapper: {
    padding: 8,
    backgroundColor: '#fff',
    marginHorizontal: 8,
    marginVertical: 8,
    borderRadius: 22,
    elevation: 5,
    // shadowColor: '#bfcce0',
  },
  newsImage: {
    height: 200,
    borderRadius: 22,
    marginHorizontal: 8,
    marginVertical: 12,
    backgroundColor: '#333',
  },
  newsTitle: {
    textAlign: 'justify',
    marginHorizontal: 8,
    fontSize: 16,
    letterSpacing: 1.2,
  },
  newspublishedAt: {
    paddingHorizontal: 6,
    paddingVertical: 12,
    textAlign: 'right',
    opacity: 0.7,
  },
});
