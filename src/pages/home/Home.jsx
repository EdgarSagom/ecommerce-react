import { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import BannerSection from '../../components/bannerSection/BannerSection'

function Home () {
  return (
    <Layout>
      <BannerSection />
    </Layout>
  )
}

export default Home
