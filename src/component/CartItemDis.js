import React, { Fragment } from 'react'
import '../style/CartItemDis.css'
export const CartItemDis = (props) => {
  const handleAddClick = () => {
    props.onAdd(props.id)
  }

  const handleRemoveClick = () => {
    props.onRemove(props.id)
  }
  return (
    <Fragment>
      <li className="cart-item">
        <div>
          <h2>{props.name}</h2>
        </div>
        <div className="summ">
          <span>{props.price}</span>
        </div>
        <div className="act">
          <button onClick={handleRemoveClick}>−</button>
          <span className="amount">{props.amount}</span>
          <button onClick={handleAddClick}>+</button>
        </div>
      </li>
    </Fragment>
  )
}
