import React, { Fragment } from 'react'
import { MealSummary } from './MealSummary'
import { AvailableMeal } from './AvailableMeal'
import '../App.test/Meal.css'

export const Meal = () => {
  return (
    <Fragment>
      <MealSummary />
      <AvailableMeal />
    </Fragment>
  )
}
