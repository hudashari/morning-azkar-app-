import React, { useContext } from 'react';
import { Text, View, ScrollView, StyleSheet, Pressable } from 'react-native';
import AppContext from '../context/AppContext';
import CartItem from '../components/CartItem';
import Ionicons from '@expo/vector-icons/Ionicons';

const DetailsScreen = ({ navigation }) => {
  const { bag, changequantity, removething, clearbag, gettotal } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable 
          style={styles.backbutton}
          onPress={() => navigation.navigate('Home')}>
          <Ionicons name="arrow-back" size={24} color="#ffffff" />
          <Text style={styles.backtext}>Shop</Text>
        </Pressable>
        <Text style={styles.headertitle}>Your Cart</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.subtitle}>Review items before checkout</Text>

        <View style={styles.cartitems}>
          {
            bag.map((item) => (
              <CartItem key={item.id} item={item} onchangeqty={changequantity} onremove={removething}/>
            ))
          }
        </View>

          <View style={styles.totalsection}>
            <View style={styles.totalrow}>
              <Text style={styles.totallabel}>Total</Text>
              <Text style={styles.totalamount}>${gettotal().toFixed(2)}</Text>
            </View>
          </View>
      </ScrollView>

        <View style={styles.footer}>
          <Pressable 
            style={[styles.footerbutton, styles.clearbutton]}
            onPress={clearbag}
          >
            <Text style={styles.clearbuttontext}>Clear Cart</Text>
          </Pressable>
          <Pressable 
            style={[styles.footerbutton, styles.checkoutbutton]}
            onPress={() => alert('Proceeding to checkout...')}
          >
            <Text style={styles.checkoutbuttontext}>Checkout</Text>
          </Pressable>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: '#2a2a2a',
  },
  backbutton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backtext: {
    color: '#ffffff',
    fontSize: 16,
    marginLeft: 8,
  },
  headertitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  placeholder: {
    width: 80,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  subtitle: {
    color: '#cccccc',
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 20,
  },
  cartitems: {
    marginBottom: 20,
  },
  emptycart: {
    color: '#666666',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 40,
  },
  totalsection: {
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  totalrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totallabel: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  totalamount: {
    color: '#4a90e2',
    fontSize: 20,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#2a2a2a',
    gap: 12,
  },
  footerbutton: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  clearbutton: {
    backgroundColor: '#ff4444',
  },
  checkoutbutton: {
    backgroundColor: '#4a90e2',
  },
  clearbuttontext: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  checkoutbuttontext: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default DetailsScreen;