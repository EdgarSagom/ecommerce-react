import { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import BannerSection from '../../components/bannerSection/BannerSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/cartSlice'

function Home () {
  const dispatch = useDispatch()
  const cartItem = useSelector((state) => state.cart)

  console.log(cartItem)

  const addCart = () => {
    dispatch(addToCart('mobile'))
  }

  const deleteCart = () => {
    dispatch(deleteFromCart('mobile'))
  }

  return (
    <Layout>
      <div className='flex gap-5 justify-center'>
        <button className='bg-green-400 p-5' onClick={() => addCart()}>add</button>
        <button className='bg-red-400 p-5' onClick={() => deleteCart()}>delete</button>
      </div>
      <BannerSection />
      <Filter />
      <ProductCard />
      <Track />
      <Testimonial />
    </Layout>
  )
}

export default Home
