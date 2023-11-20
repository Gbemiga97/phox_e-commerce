import { createContext, useContext, useEffect, useState } from 'react'
import {toast} from 'react-hot-toast'






const ShopContext = createContext()

export const useShopContext = () => useContext(ShopContext)

export const ShopContextProvider = ({children}) => {

  //cart state
    const [cart, setCart] = useState([])
    const [itemAmount, setItemAmount] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    


  //add to cart button


  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount
    }, 0)
    setTotalPrice(total)
  },)

  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount
      }, 0)
      setItemAmount(amount)
    }
  }, [cart])
 
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 }

    //check if the item is already in the cart
    const cartItem = cart.find((item) => item.id === id)

    //if cartitem is already in the cart increase the amount
    if(cartItem) {
      const newCart = [...cart].map(item => {
        if(item.id === id) {
          return { ...item, amount: cartItem.amount + 1 }
        } else {
          return item
        }
      });
      setCart(newCart)
    } else {
      setCart([...cart, newItem])
    }

    toast.success(`${product.name} added to cart`)
  } 
  // cart amount

  //remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter(item => item.id !== id)
    setCart(newCart)
  }


  //clear cart
  const clearCart = () => {
    setCart([])
  }
  console.log(cart)


  //increase amount of product
  const increaseAmount = (id) => {
    const cartItem = cart.find(item => item.id === id)

    addToCart(cartItem, id)
  }

  const decreaseAmount = (id) => {
    const cartItem = cart.find(item => item.id === id)
  
    if(cartItem) {
      const newCart = cart.map(item => {
        if(item.id === id) {
          return { ...item, amount: cartItem.amount - 1 }
        } else {
          return item
        }
      });
      setCart(newCart);
    } 
      if (cartItem.amount < 2) {
        removeFromCart(id)
    }
    
  }

  

const contextValue = {addToCart, cart, removeFromCart, clearCart, increaseAmount, decreaseAmount, itemAmount, totalPrice}



  return (
   <ShopContext.Provider value={contextValue}>
    {children}
   </ShopContext.Provider>
  )
}

export default ShopContext