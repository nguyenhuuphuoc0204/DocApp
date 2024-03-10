import React from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface AppHeaderProps {
  title: string; // Khai báo kiểu dữ liệu cho title là string
}

const AppHeader: React.FC<AppHeaderProps> = ({ title }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => Alert.alert('Menu clicked')}>
      <Image
          source={require('../../assets/Logo.png')} // Đường dẫn đến ảnh
          style={styles.menuIcon} // Kiểu dáng của ảnh
        />
        <Text style={styles.menu}>☰</Text>
        <Text>
          NGuyễn Hữu Phước
        </Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 100,
    backgroundColor: '#f4f4f4',
  },
  title: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  menu: {
    fontSize: 10,
  },
  menuIcon: {
    width: 30, // Độ rộng của ảnh
    height: 30, // Độ cao của ảnh
    marginRight: 50, // Khoảng cách từ ảnh đến văn bản
  },  
});

export default AppHeader;
