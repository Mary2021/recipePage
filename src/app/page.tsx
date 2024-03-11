"use client"
import * as React from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import { young_serif } from './styles/fonts'

export default function Home() {
  const categories = [
    { label: 'Breakfast', text: 'Breakfast is the first meal of a day.' },
    { label: 'Starter', text: 'Is a dish served before the main course of a meal' },
    { label: 'Pasta', text: 'Pasta is a staple food of traditional Italian cuisine' },
    { label: 'Seafood', text: 'Seafood is any form of sea life regarded as food by humans.' },
    { label: 'Meat', text: 'Meat is valued as a complete protein food containing all the amino acids necessary for the human body.' },
    { label: 'Side', text: 'Side dishes such as salad, potatoes and bread are commonly used with main courses.' },
    { label: 'Vegetarian', text: 'Vegetarianism is the practice of abstaining from the consumption of meat.' },
    { label: 'Dessert', text: 'Dessert is a course that concludes a meal.' },
  ]

  const CategoryList = () => {
    let elements = []
    let i: number
    let lng = categories.length
    for (i = 0; i < lng; ++i) {
      let route = categories[i].label === 'Meat' ? '/meat/' : '/category/' + categories[i].label
      let element = (
        <a
          key={i}
          href={route}
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2 className={young_serif.className}>
            {categories[i].label}
          </h2>
          <p>
            {categories[i].text}
          </p>
        </a>)
      elements.push(element)
    }

    return (
      <div className={styles.grid}>
        {elements}
      </div>
    )
  }
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/assets/images/cookbook.jpg"
          alt="Fresh vegetables"
          width={350}
          height={200}
          priority
        />
      </div>
      {CategoryList()}
    </main>
  );
}
