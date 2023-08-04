import React, { Fragment, useContext } from 'react'
import '../style/MealItem.css'
import { MealItemForm } from './MealItemForm'
import CartContext from '../store/CartContext'

export const MealItem = (props) => {
  const crt = useContext(CartContext)

  const addToCartHandler = (amount) => {
    crt.addItem({
      id: props.id,
      name: props.name,
      amount: props.amount,
      price: props.price,
    })
  }
  return (
    <Fragment>
      <li className="meal">
        <div>
          <h3>{props.name}</h3>
          <div className="description">{props.description}</div>
          <div className="price">{props.price}</div>
        </div>
        <div>
          <MealItemForm onAddToCart={addToCartHandler} />
        </div>
      </li>
    </Fragment>
  )
}
