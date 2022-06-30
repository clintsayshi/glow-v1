import Head from 'next/head'
import Hero from '../components/HeroSection'
import Layout from "../components/Layout"
import About from "../components/SectionAbout"
import Contact from '../components/SectionContact'
import Gear from '../components/SectionGear'
import Studios from "../components/SectionStudios"

export default function Home() {
  return (
   <Layout>
      <Hero />

      <About />

      <Studios />

      <Gear />

      <Contact />
    </Layout>
  )
}
