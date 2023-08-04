import React, { useReducer } from 'react'
import CartContext from './CartContext'
const defaultCartState = {
  items: [],
  totalAmount: 0,
}
const cartReducer = (state, action) => {
  if (action.type === 'Add') {
    const updatedAmount = state.totalAmount + action.item.price * 1
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id,
    )
    const existingCartItem = state.items[existingCartItemIndex]
    let updatedItems

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + 1,
      }
      updatedItems = [...state.items]
      updatedItems[existingCartItemIndex] = updatedItem
    } else {
      updatedItems = state.items.concat({ ...action.item, amount: 1 })
    }

    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    }
  }
  if (action.type === 'Remove') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id,
    )
    if (existingCartItemIndex === -1) {
      return state
    }
    const existingCartItem = state.items[existingCartItemIndex]
    const updatedAmount = state.totalAmount - existingCartItem.price
    let updatedItems
    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id)
    } else {
      const updatedItem = { ...existingCartItem,
        amount: existingCartItem.amount - 1,}
      updatedItems = [...state.items]
      updatedItems[existingCartItemIndex]=updatedItem
    }
    return{
      items:updatedItems,
      totalAmount:updatedAmount
    }
  }

  return defaultCartState
}

export const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(cartReducer, defaultCartState)
  const addItemToCartHandler = (item) => {
    dispatch({ type: 'Add', item: item })
  }
  const removeItemToCartHandler = (id) => {
    dispatch({ type: 'Remove', id: id })
  }
  const context = {
    items: state.items,
    totalAmount: state.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  }
  return (
    <>
      <CartContext.Provider value={context}>
        {props.children}
      </CartContext.Provider>
    </>
  )
}
