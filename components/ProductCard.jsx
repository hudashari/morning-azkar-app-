import React from 'react';
import { Text, View, Pressable, StyleSheet, Image } from 'react-native';

const ProductCard = ({ item, onaddtocart }) => {
  const productImages = {
    '1': 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
    '2': 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
  };

  return (
    <View style={styles.productcard}>
      <Image 
        source={{ uri: productImages[item.id] }}
        style={styles.productImage}
      />
      
      <View style={styles.content}>
        <View style={styles.iteminfo}>
          <Text style={styles.itemname}>{item.name}</Text>
          <Text style={styles.itemprice}>${item.price.toFixed(2)}</Text>
        </View>
        <Pressable 
          style={styles.addbutton}
          onPress={() => onaddtocart(item)}
        >
          <Text style={styles.addbuttontext}>Add to Cart</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productcard: {
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    marginVertical: 8,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: 400,
  },
  content: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  addbutton: {
    backgroundColor: '#28a745',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  addbuttontext: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default ProductCard;