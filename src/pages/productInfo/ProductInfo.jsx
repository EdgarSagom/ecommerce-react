import { useContext, useEffect, useState } from 'react'
import myContext from '../../context/data/myContext'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { doc, getDoc } from 'firebase/firestore'
import { fireDB } from '../../firebase/FirebaseConfig'
import { addToCart } from '../../redux/cartSlice'
import { toast, ToastContainer } from 'react-toastify'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

import Layout from '../../components/layout/Layout'

import { FaStar, FaRegStar, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import { FaXTwitter, FaHeartCirclePlus, FaHeartCircleMinus } from 'react-icons/fa6'

function ProductInfo () {
  const context = useContext(myContext)
  const { mode, setLoading } = context
  const [like, setLike] = useState(false)

  const handlerLike = () => {
    setLike(!like)
  }

  const [idProduct, setIdProduct] = useState('')
  const params = useParams()

  const getIdProductData = async () => {
    setLoading(true)

    try {
      const productTemp = await getDoc(doc(fireDB, 'products', params.id))
      // console.log(productTemp)
      setIdProduct(productTemp.data())
      // console.log(productTemp.data())
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getIdProductData()
  }, [])

  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart)
  // console.log(cartItems)

  const addCart = (products) => {
    dispatch(addToCart(products))
    toast.success('add to cart')
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <Layout>
      <section className='body-font overflow-hidden'>
        <div className='container px-5 py-20 mx-auto'>
          {idProduct &&
            <motion.div
              variants={fadeIn('down', 0.3)} initial='hidden'
              whileInView='show'
              className='lg:w-4/5 mx-auto flex flex-wrap'
            >
              <img
                src={idProduct.imageUrl}
                alt={idProduct.title}
                className='lg:w-1/2 w-full lg:h-1/2 py-5 h-64 object-cover object-center rounded-2xl hover:scale-110 transition-scale-110 duration-300 ease-in-out'
              />

              <motion.div
                variants={fadeIn('up', 0.7)} initial='hidden'
                whileInView='show'
                className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'
              >
                <h2 className='text-md title-font text-gray-600 tracking-widest'>
                  BRAND NAME
                </h2>

                <h1
                  style={{ color: mode === 'dark' ? 'white' : '' }}
                  className='text-gray-900 text-3xl title-font font-medium mb-1'
                >
                  {idProduct.title}
                </h1>

                <div className='flex mb-4'>
                  <span className='flex items-center'>
                    <FaStar className='w-4 h-4 fill-orange-600' />
                    <FaStar className='w-4 h-4 fill-orange-600' />
                    <FaStar className='w-4 h-4 fill-orange-600' />
                    <FaStar className='w-4 h-4 fill-orange-600' />
                    <FaRegStar className='w-4 h-4 fill-orange-600' />
                    <span className='text-gray-600 ml-3'>4 Reviews</span>
                  </span>

                  <span className='flex ml-3 pl-3 py-2 border-l-2 border-gray-400 text-gray-600'>
                    <Link to='https://www.instagram.com/edgarsagom/'>
                      <FaInstagram className='w-5 h-5 hover:text-orange-600' />
                    </Link>
                    <Link to='https://twitter.com/SagomEdgar'>
                      <FaXTwitter className='w-5 h-5 ml-3 hover:text-orange-600' />
                    </Link>
                    <Link to=''>
                      <FaLinkedin className='w-5 h-5 ml-3 hover:text-orange-600' />
                    </Link>
                    <Link to='https://github.com/EdgarSagom'>
                      <FaGithub className='w-5 h-5 ml-3 hover:text-orange-600' />
                    </Link>
                  </span>
                </div>

                <p
                  style={{ color: mode === 'dark' ? 'white' : '' }}
                  className='leading-relaxed border-b-2 mb-5 pb-5'
                >
                  {idProduct.description}
                </p>

                <div className='flex'>
                  <span
                    style={{ color: mode === 'dark' ? 'white' : '' }}
                    className='title-font font-medium text-2xl text-gray-900'
                  >
                    ${idProduct.price}
                  </span>

                  <button
                    onClick={() => addCart(idProduct)}
                    className='flex ml-auto text-white bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-orange-800 rounded'
                  >
                    Add To Cart
                  </button>

                  <button className='rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4'>
                    {like ? <FaHeartCircleMinus onClick={handlerLike} className='w-8 h-8 fill-orange-600' /> : <FaHeartCirclePlus onClick={handlerLike} className='w-7 h-7' />}
                  </button>
                </div>
              </motion.div>
            </motion.div>}
        </div>

        <ToastContainer />
      </section>
    </Layout>
  )
}

export default ProductInfo
