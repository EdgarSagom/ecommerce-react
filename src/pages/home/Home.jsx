import { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import BannerSection from '../../components/bannerSection/BannerSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'

function Home () {
  return (
    <Layout>
      <BannerSection />
      <Filter />
      <ProductCard />
    </Layout>
  )
}

export default Home
