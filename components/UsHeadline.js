import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Image,
  StyleSheet,
} from 'react-native';
import config from '../config/config';

const UsHeadline = ({navigation}) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${config.API_KEY}`,
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

  const UsHeadlineNews = () => {
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
            <Image
              source={{uri: `${element.urlToImage}`}}
              style={styles.newsImage}
            />
            <Text style={styles.newsTitle} numberOfLines={2}>
              {element.title}
            </Text>
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
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {UsHeadlineNews()}
        </ScrollView>
      )}
    </View>
  );
};

export default UsHeadline;

const styles = StyleSheet.create({
  ScrollView: {
    // backgroundColor: '#fff',
  },
  newsWrapper: {
    padding: 0,
    marginHorizontal: 1,
    marginVertical: 8,
    borderRadius: 15,
    // elevation: 5,
    shadowColor: '#888',
  },
  newsImage: {
    height: 140,
    width: 235,
    borderRadius: 15,
    marginHorizontal: 8,
    marginVertical: 12,
    backgroundColor: '#333',
    borderColor: '#FAF4FF',
    borderWidth: 2,
  },
  newsTitle: {
    maxWidth: 235,
    textAlign: 'justify',
    marginHorizontal: 8,
    paddingHorizontal: 8,
  },
});
