import { useContext } from 'react'
import myContext from '../../context/data/myContext'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

import logoImg from '../../../public/logo-eSagom.png'

function ProductCard () {
  const context = useContext(myContext)
  const { mode } = context
  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-8 md:py-16 mx-auto'>
        <div className='lg:w-1/2 w-full mb-6 lg:mb-10'>
          <h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900' style={{ color: mode === 'dark' ? 'white' : '' }}>Our Latest Collection</h1>
          <div className='h-1 w-20 bg-orange-600 rounded' />
        </div>

        <motion.div
          variants={fadeIn('up', 0.3)} initial='hidden'
          whileInView='show'
          className='flex flex-wrap -m-4'
        >
          <div className='p-4 md:w-1/4  drop-shadow-lg '>
            <div
              className='h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden'
              style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}
            >
              <div className='flex justify-center cursor-pointer'>
                <img className=' rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out' src='https://dummyimage.com/720x400' alt='blog' />
              </div>

              <div className='p-5 border-t-2'>
                <div className='flex items-center'>
                  <img src={logoImg} alt='Logo eSagom' className='w-9 h-6' />
                  <h2 className='text-xs font-bold text-orange-600 mb-1'>eSagom</h2>
                </div>

                <h1 className='text-lg font-medium mb-3' style={{ color: mode === 'dark' ? 'white' : '' }}>This is title: Lorem ipsum dolor sit amet</h1>

                <p className='leading-relaxed mb-3'>This is description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatem sit animi quas</p>

                <p className='leading-relaxed mb-3' style={{ color: mode === 'dark' ? 'white' : '' }}>This is price: $50</p>

                <div className=' flex justify-center'>
                  <button type='button' className='focus:outline-none text-white bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2'>Add To Cart</button>
                </div>
              </div>
            </div>
          </div>

          <div className='p-4 md:w-1/4  drop-shadow-lg '>
            <div
              className='h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden'
              style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}
            >
              <div className='flex justify-center cursor-pointer'>
                <img className=' rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out' src='https://dummyimage.com/720x400' alt='blog' />
              </div>

              <div className='p-5 border-t-2'>
                <div className='flex items-center'>
                  <img src={logoImg} alt='Logo eSagom' className='w-9 h-6' />
                  <h2 className='text-xs font-bold text-orange-600 mb-1'>eSagom</h2>
                </div>

                <h1 className='text-lg font-medium mb-3' style={{ color: mode === 'dark' ? 'white' : '' }}>This is title: Lorem ipsum dolor sit amet</h1>

                <p className='leading-relaxed mb-3'>This is description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatem sit animi quas</p>

                <p className='leading-relaxed mb-3' style={{ color: mode === 'dark' ? 'white' : '' }}>This is price: $50</p>

                <div className=' flex justify-center'>
                  <button type='button' className='focus:outline-none text-white bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2'>Add To Cart</button>
                </div>
              </div>
            </div>
          </div>

          <div className='p-4 md:w-1/4  drop-shadow-lg '>
            <div
              className='h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden'
              style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}
            >
              <div className='flex justify-center cursor-pointer'>
                <img className=' rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out' src='https://dummyimage.com/720x400' alt='blog' />
              </div>

              <div className='p-5 border-t-2'>
                <div className='flex items-center'>
                  <img src={logoImg} alt='Logo eSagom' className='w-9 h-6' />
                  <h2 className='text-xs font-bold text-orange-600 mb-1'>eSagom</h2>
                </div>

                <h1 className='text-lg font-medium mb-3' style={{ color: mode === 'dark' ? 'white' : '' }}>This is title: Lorem ipsum dolor sit amet</h1>

                <p className='leading-relaxed mb-3'>This is description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatem sit animi quas</p>

                <p className='leading-relaxed mb-3' style={{ color: mode === 'dark' ? 'white' : '' }}>This is price: $50</p>

                <div className=' flex justify-center'>
                  <button type='button' className='focus:outline-none text-white bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2'>Add To Cart</button>
                </div>
              </div>
            </div>
          </div>

          <div className='p-4 md:w-1/4  drop-shadow-lg '>
            <div
              className='h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden'
              style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}
            >
              <div className='flex justify-center cursor-pointer'>
                <img className=' rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out' src='https://dummyimage.com/720x400' alt='blog' />
              </div>

              <div className='p-5 border-t-2'>
                <div className='flex items-center'>
                  <img src={logoImg} alt='Logo eSagom' className='w-9 h-6' />
                  <h2 className='text-xs font-bold text-orange-600 mb-1'>eSagom</h2>
                </div>

                <h1 className='text-lg font-medium mb-3' style={{ color: mode === 'dark' ? 'white' : '' }}>This is title: Lorem ipsum dolor sit amet</h1>

                <p className='leading-relaxed mb-3'>This is description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatem sit animi quas</p>

                <p className='leading-relaxed mb-3' style={{ color: mode === 'dark' ? 'white' : '' }}>This is price: $50</p>

                <div className=' flex justify-center'>
                  <button type='button' className='focus:outline-none text-white bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2'>Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductCard
