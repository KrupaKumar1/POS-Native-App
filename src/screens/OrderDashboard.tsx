import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchIcon from 'react-native-vector-icons/EvilIcons';
import OrderBottomTabBar from './OrdersBottomTab';

import GlobalButton from '../components/GlobalButton';
import MenuItemCard from '../components/MenuItemCard';
import Header from '../components/Header';

const OrderDashboard = () => {
  const handleButtonPress = () => {
    // Your button press logic here
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.header}>
        <Text style={styles.menuText}>Orders</Text>
        <View style={styles.filterIconContainer}>
          <TouchableOpacity onPress={() => console.log('Filter pressed')}>
            <SearchIcon
              style={styles.searchIcon}
              name="search"
              size={30}
              color="black"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Filter pressed')}>
            <Icon name="filter" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <GlobalButton
        style={styles.newOrderButton}
        label="+ New Order"
        onPress={handleButtonPress}
        disabled={false}
      />
      <MenuItemCard />
      {/*Recieved */}
      {/* Preparing*/}
      {/* Completed */}
      <OrderBottomTabBar />
    </SafeAreaView>
  );
};

export default OrderDashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  menuText: {
    fontSize: 20,
    fontWeight: '500',
    paddingLeft: 15,
  },
  filterIconContainer: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  searchIcon: {
    paddingRight: 10,
  },
  newOrderButton: {
    backgroundColor: '#ff9500',
    padding: 10,
    borderRadius: 25,
    alignItems: 'center',
    margin: 13,
  },
});
