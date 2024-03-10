// Trong HomeScreen.tsx
import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { AppHeader, Menu } from '../Components';

interface HomeScreenProps {
  navigation: NavigationProp<any>;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <AppHeader title="Trang Chủ" />
      <Text style={styles.screenTitle}>Màn Hình Home</Text>
      {/* Thêm View để bọc Button */}
      <View style={styles.bottomLeftButton}>
        <Button
          title="Đến trang Bookmark"
          onPress={() => navigation.navigate('Bookmark')}
        />
      </View>
      <Menu />
      <Text style={styles.bottomRightText}>Trang Chính</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenTitle: {
    fontSize: 50,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  bottomLeftButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  bottomRightText: {
    position: 'absolute',
    bottom: 115,
    right: 15,
  },
});

export default HomeScreen;
