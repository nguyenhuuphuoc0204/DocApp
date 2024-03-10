import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Menu = () => {
  // Giả định đây là các mục menu
  const menuItems = ['Hot Trong Ngày', 'Tin Tức', 'Báo Tuổi Trẻ'];

  return (
    <View style={styles.menu}>
      {menuItems.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => Alert.alert(`${item} clicked`)}>
          <Text style={styles.menuItem}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    marginTop: 100,
  },
  menuItem: {
    padding: 12,
    fontSize: 23,
  },
});

export default Menu;
