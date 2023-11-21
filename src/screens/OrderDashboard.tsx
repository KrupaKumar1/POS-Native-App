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
import OrderCard from '../components/OrderCard';

const OrderDashboard = ({navigation}) => {
  const handleButtonPress = () => {
    // Your button press logic here
    navigation.navigate('MenuItems');
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
      <View style={styles.orderContainer}>
        <OrderCard
          orderNumber="2023-05-001"
          paid="Paid"
          username="Krupa Kumar"
          preparingTime="20 min"
        />
        <OrderCard
          orderNumber="2023-05-002"
          paid="Unpaid"
          username="Anand Singh"
          preparingTime="20 min"
        />
        <OrderCard
          orderNumber="2023-05-003"
          paid="Paid"
          username="Kumar"
          preparingTime="10 min"
        />
      </View>

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
  orderContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
  },
  newOrderButton: {
    backgroundColor: '#ff9500',
    padding: 10,
    borderRadius: 25,
    alignItems: 'center',
    margin: 13,
  },
});
