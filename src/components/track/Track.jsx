import { useContext } from 'react'
import myContext from '../../context/data/myContext'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

import { IoBagCheck } from 'react-icons/io5'
import { FaTruck } from 'react-icons/fa6'
import { AiFillDollarCircle } from 'react-icons/ai'

function Track () {
  const context = useContext(myContext)
  const { mode } = context

  return (
    <motion.section
      variants={fadeIn('up', 0.3)} initial='hidden'
      whileInView='show'
      className='text-gray-600 body-font'
    >
      <div className='container px-5 md:py-5  mx-auto'>
        <div className='flex flex-wrap -m-4 text-center'>

          <div className='p-4 md:w-1/3 sm:w-1/2 w-full'>
            <div className='border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg' style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
              <IoBagCheck className='text-orange-600 w-12 h-12 mb-3 inline-block' />
              <h2 className='title-font font-medium text-lg text-gray-900' style={{ color: mode === 'dark' ? 'white' : '' }}>Premium Products</h2>
              <p className='leading-relaxed'>Our products are of excellent quality.</p>
            </div>
          </div>

          <div className='p-4 md:w-1/3 sm:w-1/2 w-full'>
            <div className='border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg' style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
              <FaTruck className='text-orange-600 w-12 h-12 mb-3 inline-block' />
              <h2 className='title-font font-medium text-lg text-gray-900' style={{ color: mode === 'dark' ? 'white' : '' }}>Free Shipping</h2>
              <p className='leading-relaxed'>We ship all over Mexico for FREE.
              </p>
            </div>
          </div>

          <div className='p-4 md:w-1/3 sm:w-1/2 w-full'>
            <div className='border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg' style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
              <AiFillDollarCircle className='text-orange-600 w-12 h-12 mb-3 inline-block' />
              <h2 className='title-font font-medium text-lg text-gray-900' style={{ color: mode === 'dark' ? 'white' : '' }}>Exciting Offers</h2>
              <p className='leading-relaxed'>We provide amazing offers & discounts</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Track
