import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Weekend } from '../components/Weekend'
import { Venues } from '../components/Venues'
import { Budget } from '../components/Budget'
import { PortalShowcase } from '../components/PortalShowcase'
import { About } from '../components/About'
import { Editorial } from '../components/Editorial'
import { Process } from '../components/Process'
import { Faq } from '../components/Faq'
import { Inquiry } from '../components/Inquiry'
import { Footer } from '../components/Footer'

export function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Weekend />
        <Venues />
        <Budget />
        <PortalShowcase />
        <About />
        <Editorial />
        <Process />
        <Faq />
        <Inquiry />
      </main>
      <Footer />
    </>
  )
}
