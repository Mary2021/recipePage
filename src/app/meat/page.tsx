"use client"
import * as React from 'react';
import Image from "next/image";
import styles from "./../page.module.css";
import { young_serif } from './../styles/fonts'
import { Button } from '@mui/material';

export default function Meat() {
  const categories = [
    { label: 'Beef', text: 'Beef is the culinary name for meat from cattle.' },
    { label: 'Chicken', text: 'Chicken is a type of domesticated fowl, a subspecies of the red junglefowl.' },
    { label: 'Lamb', text: 'Lamb, hogget, and mutton are the meat of domestic sheep (species Ovis aries) at different ages.' },
    { label: 'Pork', text: 'Pork is the culinary name for meat from a domestic pig (Sus scrofa domesticus).' }
  ]

  const CategoryList = () => {
    let path = '/recipePage/meat/category/'
    let elements = []
    let i: number
    let lng = categories.length
    for (i = 0; i < lng; ++i) {
      let element = (
        <a
          key={i}
          href={path + categories[i].label}
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
      <div className={styles.grid} style={{marginBottom: '2%'}}>
        {elements}
      </div>
    )
  }
  return (
    <main>
      <div className={styles.center}>
        <Image
          className={styles.image}
          src="/recipePage/assets/images/meat.jpeg"
          alt="Meat"
          width={350}
          height={200}
          priority
        />
      </div>
      {CategoryList()}
      <Button variant="outlined"><a href='/recipePage/' className={young_serif.className} style={{color: 'hsl(332, 51%, 32%)'}}>Go Back</a></Button>
    </main>
  );
}
