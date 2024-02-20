"use client"
import * as React from 'react';
import { useState, useEffect } from 'react'
import Image from "next/image";
import styles from "./../../page.module.css";
import { Button } from '@mui/material';

export default function Category({ params }: { params: { slug: string } }) {
  const [meals, setMeals] = useState({})
  const [isLoading, setLoading] = useState(true)
  //const [categories, setCategories] = useState({})

  // //fetch meals and categories
  // useEffect(() => {
  //   const request1 = fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.slug}`).then((res) => res.json());
  //   const request2 = fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`).then((res) => res.json());
  //   Promise.all([request1, request2])
  //     .then(([meals, categories]) => {
  //       setMeals(meals)
  //       setCategories(categories)
  //       setLoading(false)
  //     })
  // }, [])

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.slug}`)
      .then((res) => res.json())
      .then((meals) => {
        setMeals(meals)
        setLoading(false)
      })
  }, [])


  if (isLoading) return <p>Loading...</p>
  if (!meals) return <p>No profile data</p>
  
  const CategoryThumb = () => {
    if (params.slug != 'Meat') {
      let path = 'https://www.themealdb.com/images/category/' + params.slug + '.png'
      return (<Image
        className={styles.logo}
        src={path}
        alt="Fresh vegetables"
        width={450}
        height={250}
        priority
      />)
    } else {
      let path = '/meat.jpeg'
      return (<Image
        className={styles.logo}
        src={path}
        alt="Fresh vegetables"
        width={550}
        height={350}
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
        let link = '/meal/' + params.slug
        let element = <div key={i}><a href={link}><li >{val}</li></a></div>
        elements.push(element)
      }
    }

    return (
      <div>
        <ol>
          {elements}
        </ol>
      </div>)
  }
  //console.log(meals)
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        {CategoryThumb()}
      </div>
      <Button variant="outlined"><a href='/'>Go Back</a></Button>
      <h1>{params.slug}</h1>
      {MealsList()}
    </main>
  )
}