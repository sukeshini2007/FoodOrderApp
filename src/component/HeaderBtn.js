import React, { Fragment, useContext } from 'react'
import * as Icon from 'react-bootstrap-icons'
import '../style/HeaderBtn.css'
import CartContext from '../store/CartContext'
export const HeaderBtn = (props) => {
  const crt = useContext(CartContext)
  const numberOfCartItems = crt.items.length
  return (
    <Fragment>
      <button className="btn" onClick={props.onClick}>
        <span className="icon">
          <Icon.Cart />
        </span>
        <span>Your cart</span>
        <span className="badge">{numberOfCartItems}</span>
      </button>
    </Fragment>
  )
}
