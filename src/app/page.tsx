import Image from 'next/image'
import styles from './page.module.css'
import Hero from './components/hero/Hero'
import Product from './components/products/Product'
import Categories from './components/categories/Categories'


export const dynamic = 'force-dynamic'
export default function Home() {
  return (
    <div>
      <Hero/>
      <Product/>
      <Categories/>
      </div>
  )
}
