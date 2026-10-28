import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppContext from './context/AppContext';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [stuff, setstuff] = useState([
    { id: '1', name: 'Wireless Headphones', price: 59.99, tag: 'popular', image: '', is_sold: false, quantity: 0 },
    { id: '2', name: 'Smart Watch', price: 79.99, tag: 'new', image: '', is_sold: false, quantity: 0 },
  ]);

  const [bag, setbag] = useState([]);

  const addthing = (item) => {
    setbag(prev => {
      const found = prev.find(thing => thing.id === item.id);
      if (found) {
        return prev.map(thing =>
          thing.id == item.id
            ? { ...thing, quantity: thing.quantity + 1 }
            : thing
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const removething = (id) => {
    setbag(prev => prev.filter(thing => thing.id !== id));
  };

  const changequantity = (id, newqty) => {
    if (newqty == 0) {
      removething(id);
    } else {
      setbag(prev =>
        prev.map(thing =>
          thing.id == id ? { ...thing, quantity: newqty } : thing
        )
      );
    }
  };

  const clearbag = () => {
    setbag([]);
  };

  const gettotal = () => {
    return bag.reduce((sum, thing) => sum + (thing.price * thing.quantity), 0);
  };

  const countstuff = () => {
    return bag.reduce((total, thing) => total + thing.quantity, 0);
  };

  const data = {stuff,bag,addthing,removething,changequantity,clearbag,gettotal,countstuff};

  return (
    <AppContext.Provider value={data}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}