"use client"
import * as React from 'react';
import { useState, useEffect } from 'react'
import { Button } from '@mui/material';

export default function MeatMeal({ params }: { params: { categoryName : string, mealName: string } } ) {
    const [meals, setMeals] = useState({})
    const [isLoading, setLoading] = useState(true)
    let link = '/meat/category/' + params.categoryName
    useEffect(() => {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.mealName}`)
          .then((res) => res.json())
          .then((meals) => {
            setMeals(meals)
            console.log(meals)
            setLoading(false)
          })
      }, [])
    
      if (isLoading) return <p>Loading...</p>
      if (!meals) return <p>No profile data</p>
    console.log(params.mealName)
    console.log(params.categoryName)
    console.log(link)
    return (<Button variant="outlined"><a href={link}>Go back</a></Button>)
}