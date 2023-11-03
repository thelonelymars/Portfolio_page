import React from 'react'
import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel-react'
import '../css/base.css'
import '../css/sandbox.css'
import '../css/embla.css'

const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const App_Carousel: React.FC = () => (
  <main className="sandbox">
    
    <section className="sandbox__carousel">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
    
  </main>
)
export default App_Carousel