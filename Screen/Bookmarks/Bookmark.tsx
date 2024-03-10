// Trong BookmarkScreen.tsx
import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Định nghĩa kiểu cho route.params
type BookmarkScreenRouteProp = RouteProp<{ Bookmark: { news?: string[] } }, 'Bookmark'>;

const BookmarkScreen: React.FC = () => {
  // Lấy dữ liệu từ route
  const route = useRoute<BookmarkScreenRouteProp>();
  const { news } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Báo Mới</Text>
      <View style={styles.newsContainer}>
        {news &&
          news.map((item: string, index: number) => (
            <Text key={index} style={styles.newsItem}>
              {`${index + 1}. ${item}`}
            </Text>
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  newsContainer: {
    alignItems: 'flex-start',
  },
  newsItem: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default BookmarkScreen;
