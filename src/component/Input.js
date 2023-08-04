import React, { Fragment } from 'react'

export const Input = React.forwardRef((props, ref) => {
  return (
    <Fragment>
      <div>
        <label htmlFor={props.input.id}>{props.lable}</label>
        <input ref={ref} {...props.input}></input>
      </div>
    </Fragment>
  )
})
