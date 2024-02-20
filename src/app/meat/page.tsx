"use client"
import * as React from 'react';
import Image from "next/image";
import styles from "./../page.module.css";
import { Button } from '@mui/material';

export default function Meat() {
  const categories = [
    { label: 'Beef', text: '' },
    { label: 'Chicken', text: '' },
    { label: 'Lamb', text: '' },
    { label: 'Pork', text: '' }
  ]

  const CategoryList = () => {
    let path = '/meat/meatCategory/'
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
          <h2>
            {categories[i].label} <span>-&gt;</span>
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
          src="/cookbook.jpg"
          alt="Fresh vegetables"
          width={550}
          height={350}
          priority
        />
      </div>
      <Button variant="outlined"><a href='/'>Go Back</a></Button>
      {CategoryList()}
    </main>
  );
}
