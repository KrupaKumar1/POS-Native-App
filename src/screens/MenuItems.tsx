import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';
import MenuItemCard from '../components/MenuItemCard';

const MenuItems = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log('Back pressed')}>
          <Icon
            name="arrow-back"
            onPress={() => navigation.goBack()}
            size={30}
            color="black"
          />
        </TouchableOpacity>
        <Text style={styles.menuText}>Menu Items</Text>
        <View style={styles.filterIconContainer}>
          <TouchableOpacity onPress={() => console.log('Filter pressed')}>
            <Icon name="filter" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.orderContainer}>
        <MenuItemCard
          title="Chicken Burger"
          content="Chicken burger with Extra Cheese"
        />
        <MenuItemCard
          title="Paneer Biriyani"
          content="Paneer Biriyani with Extra Cheese"
        />
        <MenuItemCard
          title="Mutton Bitiyani"
          content="Mutton Bitiyani with Extra Cheese"
        />
        <MenuItemCard title="Chicken" content="Chicken with Extra Cheese" />
      </View>
    </SafeAreaView>
  );
};

export default MenuItems;

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
    paddingLeft: 15,
  },
  filterIconContainer: {
    marginLeft: 'auto',
  },
  orderContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
  },
});
