import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

import Features from './components/features'
import Hero from './components/hero'
import Newsletter from './components/newsletter'
import Testimonials from './components/testimonials'
import Zigzag from './components/zigzag'

// import Footer from './components/ui/footer'

/*
  src: https://github.com/cruip/open-react-template
  https://open.cruip.com/
 */
export const Home = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })
  })
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      <Newsletter />

      {/*<Footer />*/}
    </>
  )
}
