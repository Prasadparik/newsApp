import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollViewBase,
  ScrollView,
  ActivityIndicator,
  Image,
  StyleSheet,
} from 'react-native';
import config from '../config/config';

const Bbc = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${config.API_KEY}`,
    )
      .then(res => res.json())
      .then(response => {
        setNews(response.articles);
        console.log(news.length);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const TrendingNews = () => {
    return news.map((element, index) => {
      return (
        <View key={index} style={styles.newsWrapper}>
          <Image
            source={{uri: `${element.urlToImage}`}}
            style={styles.newsImage}
          />
          <Text style={styles.newsTitle}>{element.title}</Text>
        </View>
      );
    });
  };

  return (
    <View>
      {news.length === 0 ? (
        <ActivityIndicator color="red" size="large" />
      ) : (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {TrendingNews()}
        </ScrollView>
      )}
    </View>
  );
};

export default Bbc;

const styles = StyleSheet.create({
  newsWrapper: {
    padding: 8,
    backgroundColor: '#fff',
    marginHorizontal: 8,
    marginVertical: 8,
    borderRadius: 35,
  },
  newsImage: {
    height: 200,
    width: 200,
    borderRadius: 35,
    marginHorizontal: 8,
    marginVertical: 12,
    backgroundColor: '#333',
  },
  newsTitle: {
    maxWidth: 200,
    textAlign: 'justify',
    marginHorizontal: 8,
  },
});
