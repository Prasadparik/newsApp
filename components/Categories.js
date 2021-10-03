import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Categories = () => {
  const categories = [
    'Entertainment',
    'Business',
    'Politics',
    'Health',
    'Technology',
    'Sports',
  ];

  const Categories = navigation => {
    const navigations = useNavigation();
    return categories.map((category, index) => {
      return (
        <TouchableOpacity
          key={index}
          onPress={() => navigations.navigate('GetNews', {category})}>
          <View style={styles.category}>
            <Text style={styles.categoryName}>{category}</Text>
          </View>
        </TouchableOpacity>
      );
    });
  };

  return (
    <ScrollView
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      {Categories()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  category: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 50,
    borderColor: '#9047ff',
    backgroundColor: '#fcfaff',
    borderWidth: 2,
    margin: 4,
    marginVertical: 18,
  },
  categoryName: {
    color: '#9047ff',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
export default Categories;
