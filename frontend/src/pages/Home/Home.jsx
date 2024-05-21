import React from 'react'
import Gallery from './Gallery/Gallery'
import { HeroContainer } from './Hero/HeroContainer'
import { PopularClasses } from './PopularClasses/PopularClasses'
import { PopularTeacher } from './PopularTeacher/PopularTeacher'


export const Home = () => {
  return (
    <section>
      <HeroContainer/>
      <div className='max-w-screen-xl mx-auto'>
        <Gallery/>
        <PopularClasses/>
        <PopularTeacher/>

      </div>
    </section>
  )
}
