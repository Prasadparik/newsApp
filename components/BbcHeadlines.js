import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import config from '../config/config';

const Bbc = ({navigation}) => {
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
        console.log('ERROR [ GET BBC News ] ', error);
      });
  }, []);

  const TrendingNews = () => {
    return news.map((element, index) => {
      return (
        <TouchableOpacity
          key={index}
          style={styles.newsWrapper}
          onPress={() =>
            navigation.navigate('WebView', {
              url: element.url,
            })
          }>
          <View>
            {/* <Image
            source={{uri: `${element.urlToImage}`}}
            style={styles.newsImage}
          /> */}

            <Text style={styles.newsTitle}>{element.title}</Text>
            <Text style={styles.publishedAt}>{element.publishedAt}</Text>
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
        <ScrollView
          style={styles.ScrollView}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {TrendingNews()}
        </ScrollView>
      )}
    </View>
  );
};

export default Bbc;

const styles = StyleSheet.create({
  ScrollView: {
    // backgroundColor: '#fff',
  },
  newsWrapper: {
    padding: 12,
    marginHorizontal: 8,
    marginVertical: 8,
    borderRadius: 22,
    backgroundColor: '#6B53FF',
    shadowColor: '#000',
    elevation: 6,
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
    maxWidth: 300,
    marginTop: 12,
    marginHorizontal: 12,
    marginVertical: 12,
    color: '#eee',
    fontWeight: 'bold',
    fontSize: 24,
  },
  publishedAt: {
    color: '#fff',
    opacity: 0.8,
    fontWeight: 'bold',
    marginTop: 12,
    marginHorizontal: 8,
  },
});
