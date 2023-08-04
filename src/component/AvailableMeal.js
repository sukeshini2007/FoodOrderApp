import React, { Fragment } from 'react'
import { DummyMeal } from './DummyMealItem'
import '../style/AvailableMeal.css'
import { MealItem } from './MealItem'
export const AvailableMeal = (props) => {
  const item = DummyMeal.map((items) => {
    return (
      <MealItem
        key={items.index}
        name={items.name}
        id={items.id}
        description={items.description}
        price={items.price}
      />
    )
  })
  return (
    <Fragment>
      <section className="meals">
        <card className="card">
          <ul>{item}</ul>
        </card>
      </section>
    </Fragment>
  )
}
