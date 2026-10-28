import React, { useContext } from 'react';
import { Text, View, ScrollView, StyleSheet, Pressable } from 'react-native';
import AppContext from '../context/AppContext';
import ProductCard from '../components/ProductCard';
import Ionicons from '@expo/vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
  const {stuff, addthing, countstuff} = useContext(AppContext);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headercontent}>
          <Text style={styles.shopname}>Hebron Shop</Text>
          <Text style={styles.shoptagline}>Choose your favorite gadgets</Text>
        </View>
        <Pressable 
          style={styles.cartbutton}
          onPress={() => navigation.navigate('Details')}
        >
          <Ionicons name="cart-outline" size={22} color="#ffffff" />
          <Text style={styles.cartcount}>Cart ({countstuff()})</Text>
        </Pressable>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectiontitle}>Special Deals</Text>
          <Text style={styles.sectionsubtitle}>
            Get the best tech accessories with a smooth shopping experience.
          </Text>
        </View>

        <View style={styles.section}>
          {stuff.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              onaddtocart={addthing}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 18,
    backgroundColor: '#2a2a2a',
    borderRadius: 20,
  },
  shopname: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  shoptagline: {
    color: '#cccccc',
    fontSize: 14,
  },
  cartbutton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartcount: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 6,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    paddingVertical: 16,
  },
  sectiontitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sectionsubtitle: {
    color: '#cccccc',
    fontSize: 14,
    lineHeight: 20,
  },
  divider: {
    height: 1,
    backgroundColor: '#333333',
    marginVertical: 8,
  },
  todayonly: {
    color: '#4a90e2',
    fontSize: 16,
    fontWeight: '600',
  },
  resultstitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  helpsection: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  helptext: {
    color: '#666666',
    fontSize: 14,
  },
});

export default HomeScreen;