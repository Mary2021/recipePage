"use client"
import * as React from 'react';
import { useState, useEffect } from 'react'
import styles from "./meal.module.css";
import { Outfit } from "next/font/google";
import { young_serif } from './../../../../../styles/fonts'
import { Button, Box, Paper, Divider, Grid, List, ListItem, ListItemIcon } from '@mui/material';
import { Circle } from '@mui/icons-material';

const outfit = Outfit({ subsets: ["latin"] });

export default function MeatMeal({ params }: { params: { categoryName: string, mealName: string } }) {
  const [meals, setMeals] = useState({})
  const [isLoading, setLoading] = useState(true)
  let link = '/meat/category/' + params.categoryName

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.mealName}`)
      .then((res) => res.json())
      .then((meals) => {
        setMeals(meals)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!meals) return <p>No profile data</p>

  const RecipePaper = () => {
    let obj = Object.entries(meals)[0]
    let mealThumb = ''
    let instructions = ''
    let ingredients = []

    if (obj !== undefined) {
      let key1 = obj[1]
      let i
      let obj2 = Object.values(key1 || {})
      let lng = obj2.length

      for (i = 0; i < lng; ++i) {
        let obj3 = Object.values(key1 || {})[i]
        params.mealName = obj3['strMeal']
        mealThumb = obj3['strMealThumb']
        instructions = obj3['strInstructions']

        for (i = 1; i < 21; ++i) {
          let str1 = 'strIngredient' + i.toString()
          let ingredient = obj3[str1]
          let str2 = 'strMeasure' + i.toString()
          let measure = obj3[str2]
          if (ingredient !== '') {
            let element = <ListItem disablePadding key={str1} className={outfit.className}><ListItemIcon><Circle /></ListItemIcon>{measure} {ingredient}</ListItem>
            ingredients.push(element)
          }
        }
      }
    }
    if (screen.width > 525) {
      return (
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 500,
              borderRadius: 5,
            },
          }}
        >
          <Paper className={styles.paper} elevation={3}>
            <img
              className={styles.image}
              src={mealThumb}
              alt={params.mealName}
              width={'100%'}
              height={'250rem'}
            ></img>
            <h1 className={young_serif.className}>{params.mealName}</h1>
            <h2 className={young_serif.className} style={{ color: 'hsl(14, 45%, 36%)' }}>Ingredients</h2>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <List>
                  {ingredients}
                </List>
              </Grid>
            </Grid>
            <Divider />
            <h2 className={young_serif.className} style={{ color: 'hsl(14, 45%, 36%)' }}>Instructions</h2>
            <p className={outfit.className} style={{ textAlign: 'justify', paddingTop: '0.5rem', paddingBottom: '1rem' }}>{instructions}</p>
            <div className={styles.bntCenter}>
              <Button variant="outlined"><a href={link} className={young_serif.className} style={{ color: 'hsl(332, 51%, 32%)' }}>Go back</a></Button>
            </div>
          </Paper>
        </Box>
      )
    } else {
      return (
        <div>
          <img
            src={mealThumb}
            alt={params.mealName}
            width={'100%'}
            height={'250rem'}
          ></img>
          <div className={styles.mobileContentPadding}>
            <h1 className={young_serif.className}>{params.mealName}</h1>
            <h2 className={young_serif.className} style={{ color: 'hsl(14, 45%, 36%)' }}>Ingredients</h2>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <List>
                  {ingredients}
                </List>
              </Grid>
            </Grid>
            <Divider />
            <h2 className={young_serif.className} style={{ color: 'hsl(14, 45%, 36%)' }}>Instructions</h2>
            <p className={outfit.className} style={{ textAlign: 'justify', paddingTop: '0.5rem', paddingBottom: '1rem' }}>{instructions}</p>
            <div className={styles.bntCenter}>
              <Button variant="outlined"><a href={link} className={young_serif.className} style={{ color: 'hsl(332, 51%, 32%)' }}>Go back</a></Button>
            </div>
          </div>
        </div>
      )
    }

  }
  if (screen.width > 525) {
    return (
      <div className={styles.center}>
        {RecipePaper()}
      </div>
    )
  } else {
    return (
      <div className={styles.mobileBackground}>
        {RecipePaper()}
      </div>
    )
  }
}