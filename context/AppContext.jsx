import { createContext } from "react";

const AppContext = createContext({
  stuff: [],
  bag: [],
  addthing: () => {},
  removething: () => {},
  changequantity: () => {},
  clearbag: () => {},
  gettotal: () => 0,
  countstuff: () => 0,
});

export default AppContext;