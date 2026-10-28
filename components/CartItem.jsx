import React from 'react';
import { Text, View, Pressable, StyleSheet, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const CartItem = ({ item, onchangeqty, onremove }) => {
  // Product images
  const productImages = {
    '1': 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150&h=150&fit=crop', // Headphones
    '2': 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150&h=150&fit=crop', // Smart Watch
  };

  return (
    <View style={styles.cartitem}>
      {/* Added Image - that's the only change */}
      <Image 
        source={{ uri: productImages[item.id] }}
        style={styles.productImage}
      />
      
      <View style={styles.iteminfo}>
        <Text style={styles.itemname}>{item.name}</Text>
        <Text style={styles.itemprice}>${item.price.toFixed(2)} x {item.quantity}</Text>
      </View>
      <View style={styles.qtycontrols}>
        <Pressable 
          style={styles.qtybutton}
          onPress={() => onchangeqty(item.id, item.quantity - 1)}
        >
          <Ionicons name="remove" size={16} color="#ffffff" />
        </Pressable>
        <Text style={styles.qtytext}>{item.quantity}</Text>
        <Pressable 
          style={styles.qtybutton}
          onPress={() => onchangeqty(item.id, item.quantity + 1)}
        >
          <Ionicons name="add" size={16} color="#ffffff" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartitem: {
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  // Added this style for the image
  productImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
  },
  iteminfo: {
    flex: 1,
  },
  itemname: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  itemprice: {
    color: '#4a90e2',
    fontSize: 14,
  },
  qtycontrols: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3a3a3a',
    borderRadius: 8,
    padding: 4,
  },
  qtybutton: {
    backgroundColor: '#4a90e2',
    borderRadius: 6,
    padding: 8,
    marginHorizontal: 4,
  },
  qtytext: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 12,
    minWidth: 20,
    textAlign: 'center',
  },
});

export default CartItem;