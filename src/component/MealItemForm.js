import React, { Fragment, useRef, useState } from 'react'
import '../style/MealItemForm.css'
import { Input } from './Input'
export const MealItemForm = (props) => {
  const [amountValid, setAmountValid] = useState(true)
  const amountRef = useRef()
  const submitHandler = (event) => {
    event.preventDefault()
    const enteredAmout = amountRef.current.value
    //convert into no
    const enteredAmoutNum = +enteredAmout
    if (
      enteredAmout.trim().length === 0 ||
      enteredAmoutNum < 1 ||
      enteredAmoutNum > 5
    ) {
      setAmountValid(false)
      return
    }
    props.onAddToCart(enteredAmoutNum)
  }
  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        <Input
          ref={amountRef}
          lable=""
          input={{
            id: 'amount',
            type: 'number',
            //value: 1,
            min: 1,
             max: 5,
            // step: 1,
            // defaultValue: 1,
          }}
        />
        <button>+ ADD</button>
        {!amountValid && <p>please enter valid amount</p>}
      </form>
    </Fragment>
  )
}
