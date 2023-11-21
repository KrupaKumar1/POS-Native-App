import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';

const MenuItemCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Image
          source={{
            uri: 'https://www.freepik.com/premium-photo/shahi-paneer_41622825.htm#query=food&position=18&from_view=keyword&track=sph&uuid=4303a787-79b4-40d5-9934-a72926502677',
          }}
          style={styles.cardImage}
          resizeMode="cover"
        />
        <Text style={styles.cardTitle}>Title</Text>
        <Text style={styles.cardDescription}>Description</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 16,
  },
  cardImage: {
    width: 80,
    height: 80,
  },
  cardContent: {
    flex: 1,
    flexDirection: 'row',
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    marginBottom: 8,
  },
  addButton: {
    backgroundColor: '#333',
    paddingVertical: 16,
    paddingHorizontal: 20,
    width: 10,
    height: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 6,
  },
});

export default MenuItemCard;
