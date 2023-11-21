import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

const OrderBottomTabBar = () => {
  const [selectedTab, setSelectedTab] = useState('Tab1');

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
    // Perform any other actions when a tab is pressed
  };

  return (
    <View style={styles.bottomTabBar}>
      <TouchableOpacity
        style={[styles.tabButton, selectedTab === 'Tab1' && styles.selectedTab]}
        onPress={() => handleTabPress('Tab1')}>
        <Text
          style={[
            styles.tabText,
            selectedTab === 'Tab1' && styles.tabTextSelected,
          ]}>
          Recieved
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tabButton, selectedTab === 'Tab2' && styles.selectedTab]}
        onPress={() => handleTabPress('Tab2')}>
        <Text
          style={[
            styles.tabText,
            selectedTab === 'Tab2' && styles.tabTextSelected,
          ]}>
          Preparing
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tabButton, selectedTab === 'Tab3' && styles.selectedTab]}
        onPress={() => handleTabPress('Tab3')}>
        <Text
          style={[
            styles.tabText,
            selectedTab === 'Tab3' && styles.tabTextSelected,
          ]}>
          Completed
        </Text>
      </TouchableOpacity>
      {/* Add more tab buttons as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomTabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    margin: 20,
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#ff9500', // Set the background color as needed
    zIndex: 2, // Adjust the z-index as needed
    elevation: 5, // For Android elevation
    borderRadius: 40,
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  selectedTab: {
    height: 40,
    width: 20,
    backgroundColor: '#fff', // Set the selected tab color as needed
    borderRadius: 40,
    margin: 5,
  },
  tabText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  tabTextSelected: {
    fontSize: 16,
    color: '#ff9500',
    fontWeight: 'bold',
  },
});

export default OrderBottomTabBar;
