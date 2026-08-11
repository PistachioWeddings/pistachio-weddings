import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { OurStory } from './components/OurStory'
import { Services } from './components/Services'
import { Destinations } from './components/Destinations'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-charcoal focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-cream"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <OurStory />
        <Services />
        <Destinations />
        <Faq />
      </main>

      <Footer />
    </>
  )
}
