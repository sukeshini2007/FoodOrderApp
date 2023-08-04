import React, { Fragment } from 'react'
import img1 from '../assests/img.jpeg'
import { HeaderBtn } from './HeaderBtn'
import '../style/Header.css'

export const Header = (props) => {
  return (
    <Fragment>
      <header>
        <h1>FoodMeal</h1>
        <HeaderBtn onClick={props.onShow} />
      </header>
      <div>
        <img src={img1} alt=""></img>
      </div>
    </Fragment>
  )
}
