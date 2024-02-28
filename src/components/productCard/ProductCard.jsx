import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import myContext from '../../context/data/myContext'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'
import { toast, ToastContainer } from 'react-toastify'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

import logoImg from '../../../public/logo-eSagom.png'

function ProductCard () {
  const context = useContext(myContext)
  const { mode, product, searchKey, filterType, filterPrice } = context

  const dispatch = useDispatch()

  const addCart = (product) => {
    dispatch(addToCart(product))
    toast.success('add to cart')
  }

  const cartItems = useSelector((state) => state.cart)
  // console.log(cartItems)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-8 md:py-16 mx-auto'>
        <div className='lg:w-1/2 w-full mb-6 lg:mb-10'>
          <h1
            className='sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900'
            style={{ color: mode === 'dark' ? 'white' : '' }}
          >Our Latest Collection
          </h1>
          <div className='h-1 w-20 bg-orange-600 rounded' />
        </div>

        <div className='flex flex-wrap -m-4'>
          {product.filter((obj) => obj.title.toLowerCase().includes(searchKey)).filter((obj) => obj.category.toLowerCase().includes(filterType)).filter((obj) => obj.price.includes(filterPrice)).map((item, index) => {
            const { imageUrl, title, description, price, id } = item
            return (
              <motion.div
                key={index}
                className='p-4 md:w-1/3 lg:w-1/4 drop-shadow-lg'
                variants={fadeIn('up', 0.3)}
                initial='hidden'
                whileInView='show'
              >
                <div
                  className='h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden'
                  style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}
                >
                  <Link
                    to={`/product/${id}`}
                    className='flex justify-center cursor-pointer'
                  >
                    <img className=' rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out' src={imageUrl} alt={title} />
                  </Link>

                  <div className='p-5 border-t-2'>
                    <div className='flex items-center'>
                      <img src={logoImg} alt='Logo eSagom' className='w-9 h-6' />
                      <h2 className='text-xs font-bold text-orange-600 mb-1'>eSagom</h2>
                    </div>

                    <h1
                      className='text-lg font-medium mb-3'
                      style={{ color: mode === 'dark' ? 'white' : '' }}
                    >{title.length <= 55 ? title : `${title.slice(0, 50)}...`}
                    </h1>

                    <p className='leading-relaxed mb-3'>{description.length <= 140 ? description : `${description.slice(0, 140)}...`}</p>

                    <p className='leading-relaxed mb-3' style={{ color: mode === 'dark' ? 'white' : '' }}>${price}</p>

                    <div className=' flex justify-center'>
                      <button
                        onClick={() => addCart(item)}
                        type='button'
                        className='focus:outline-none text-white bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2'
                      >Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <ToastContainer />
      </div>
    </section>
  )
}

export default ProductCard
