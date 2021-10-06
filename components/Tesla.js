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

const Tesla = ({navigation}) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=tesla&from=2021-09-06&sortBy=publishedAt&apiKey=${config.API_KEY}`,
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

  const TeslaNews = () => {
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

            <Text style={styles.newsTitle} numberOfLines={2}>
              {element.title}
            </Text>
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
          {TeslaNews()}
        </ScrollView>
      )}
    </View>
  );
};

export default Tesla;

const styles = StyleSheet.create({
  ScrollView: {
    // backgroundColor: '#fff',
  },
  newsWrapper: {
    padding: 12,
    marginHorizontal: 8,
    marginVertical: 8,
    borderRadius: 22,
    backgroundColor: '#FAF4FF',
    shadowColor: '#000',
    elevation: 1,
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
    color: '#2400FF',
    opacity: 0.7,
    fontWeight: 'bold',
    fontSize: 24,
  },
  publishedAt: {
    color: '#2400FF',
    opacity: 0.5,
    fontWeight: 'bold',
    marginTop: 12,
    marginHorizontal: 8,
  },
});
