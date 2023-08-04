import React, { Fragment, useContext } from 'react'

import '../style/Cart.css'
import CartContext from '../store/CartContext'
import { Modal } from '../component/Modal'
import { CartItemDis } from './CartItemDis'

export const Cart = (props) => {
  const crt = useContext(CartContext)

  const totalAmount = crt.totalAmount
 // console.log('totalAmount:', totalAmount)
  const hasitem = crt.items.length > 0
  //console.log('crt.items:', crt.items)
  const cartaddItemToCartHandler = (item) => {
    crt.addItem(item)
  }

  const cartRemoveItemToCartHandler = (id) => {
    crt.removeItem(id);
  };

  const CartItem = (
    <ul className="cartItem">
      {crt.items.map((cartitem) => (
        <CartItemDis
        key={cartitem.id}
        id={cartitem.id}
        name={cartitem.name}
        price={cartitem.price}
        amount={cartitem.amount}
        onAdd={() => cartaddItemToCartHandler(cartitem)}
        onRemove={cartRemoveItemToCartHandler}  
        />
      ))}
    </ul>
  )
  return (
    <Fragment>
      <Modal>
        {CartItem}
        <div className="total">
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className="action">
          <button className="btn-alt" onClick={props.onHide}>
            close
          </button>
          {hasitem && <button className="btn-ord">order</button>}
        </div>
      </Modal>
    </Fragment>
  )
}
