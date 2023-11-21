import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MenuItems = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => console.log('Back pressed')}>
        <Icon name="arrow-back" size={30} color="black" />
      </TouchableOpacity>
      <Text style={styles.menuText}>Menu Items</Text>
      <View style={styles.filterIconContainer}>
        <TouchableOpacity onPress={() => console.log('Filter pressed')}>
          <Icon name="filter" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MenuItems;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  menuText: {
    fontSize: 20,
    paddingLeft: 15,
  },
  filterIconContainer: {
    marginLeft: 'auto',
  },
});
