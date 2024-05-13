"use client"
import * as React from 'react';
import { useState, useEffect } from 'react'
import Image from "next/image";
import styles from "./../category/[categoryName]/meal/[mealName]/meal.module.css";
import { young_serif } from '../styles/fonts'
import { Button } from '@mui/material';

export default function Category({ params }: { params: { categoryName: string }}) {
  const [meals, setMeals] = useState({})
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.categoryName}`)
      .then((res) => res.json())
      .then((meals) => {
        setMeals(meals)
        //console.log(meals)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!meals) return <p>No profile data</p>
  
  const CategoryThumb = () => {
    if (params.categoryName != 'Meat') {
      let path = 'https://www.themealdb.com/images/category/' + params.categoryName + '.png'
      return (<Image
        className={styles.image}
        src={path}
        alt="Fresh vegetables"
        width={350}
        height={200}
        priority
      />)
    }
  }

  const MealsList = () => {
    let elements = []
    let obj = Object.entries(meals)[0]
    let key1
    let val = ''
    let lng
    let obj3
    if (obj !== undefined) {
      key1 = obj[1]
      let i
      obj3 = Object.values(key1 || {})
      lng = obj3.length

      for (i = 0; i < lng; ++i) {
        obj3 = Object.values(key1 || {})[i]
        val = obj3['strMeal']
        let link = '/recipePage/category/' + params.categoryName + '/meal/' + val.replace(/ /g,'_')
        let element = <div key={i} className={styles.listElementPadding}><a href={link}><li>{val}</li></a></div>
        elements.push(element)
      }
    }
    return (
      <div>
        <ol className={styles.listPadding}>
          {elements}
        </ol>
      </div>)
  }
  return (
    <main>
      <div className={styles.center}>
        {CategoryThumb()}
      </div>
      <h1 className={young_serif.className}>{params.categoryName}</h1>
      {MealsList()}
      <Button variant="outlined"><a href='/recipePage' className={young_serif.className} style={{color: 'hsl(332, 51%, 32%)'}}>Go Back</a></Button>
    </main>
  )
}