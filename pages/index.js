import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from "../components/Layout"
import About from "../components/SectionAbout"
import Studios from "../components/SectionStudios"

export default function Home() {
  return (
   <Layout>
      <About />

      {/* <section className='relative container h-96 w-full my-32'>
        <div>
          <div className=''>
          <Image className='object-cover' src="/studioInt.jpeg" alt="another studio" layout='fill'/>
          </div>
        </div>
      </section> */}

      <Studios/>
    </Layout>
  )
}
