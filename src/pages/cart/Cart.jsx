import { useContext } from 'react'
import myContext from '../../context/data/myContext'
import Layout from '../../components/layout/Layout'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import Modal from '../../components/modal/Modal'

import { IoTrashOutline } from 'react-icons/io5'

function Cart () {
  const context = useContext(myContext)
  const { mode } = context

  return (
    <Layout>
      <div
        className='h-screen pt-5 mb-[60%] lg:mb-[30%]'
        style={{ color: mode === 'dark' ? 'white' : '' }}
      >
        <h1 className='mb-10 text-center text-2xl font-bold'>Cart Items</h1>
        <div className='mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 '>
          <div className='rounded-lg md:w-2/3 '>
            <motion.div
              variants={fadeIn('up', 0.4)} initial='hidden'
              whileInView='show'
              className='justify-between mb-6 rounded-lg border  drop-shadow-xl bg-white p-6  sm:flex  sm:justify-start'
              style={{ backgroundColor: mode === 'dark' ? 'rgb(32 33 34)' : '', color: mode === 'dark' ? 'white' : '' }}
            >
              <img
                src='https://dummyimage.com/400x400'
                alt='product-image'
                className='w-full rounded-lg sm:w-40 object-cover object-center hover:scale-110 transition-scale-110 duration-300 ease-in-out'
              />

              <div className='sm:ml-4 sm:flex sm:w-full sm:justify-between'>
                <div className='mt-5 sm:mt-0'>
                  <h2
                    className='text-lg font-bold'
                    style={{ color: mode === 'dark' ? 'white' : '' }}
                  >This is title:
                  </h2>
                  <h2
                    className='text-sm'
                    style={{ color: mode === 'dark' ? 'white' : '' }}
                  >This is desc:
                  </h2>
                  <p
                    className='mt-1 text-xs font-semibold text-gray-600'
                    style={{ color: mode === 'dark' ? 'white' : '' }}
                  >This is price: $1,407.54
                  </p>
                </div>

                <div className='mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6'>
                  <IoTrashOutline className='w-6 h-6 text-orange-800 hover:text-orange-600 cursor-pointer' />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn('up', 0.7)} initial='hidden'
            whileInView='show'
            className='mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3'
            style={{ backgroundColor: mode === 'dark' ? 'rgb(32 33 34)' : '', color: mode === 'dark' ? 'white' : '' }}
          >
            <div className='mb-2 flex justify-between'>
              <p style={{ color: mode === 'dark' ? 'white' : '' }}>Subtotal</p>
              <p
                className='text-gray-600'
                style={{ color: mode === 'dark' ? 'white' : '' }}
              >$1,407.54
              </p>
            </div>

            <div className='flex justify-between'>
              <p style={{ color: mode === 'dark' ? 'white' : '' }}>Shipping</p>
              <p
                className='text-gray-600'
                style={{ color: mode === 'dark' ? 'white' : '' }}
              >$20
              </p>
            </div>

            <hr className='my-4' />

            <div className='flex justify-between mb-3'>
              <p
                className='text-lg font-bold'
                style={{ color: mode === 'dark' ? 'white' : '' }}
              >Total
              </p>
              <div className>
                <p
                  className='mb-1 text-lg font-bold'
                  style={{ color: mode === 'dark' ? 'white' : '' }}
                >$1,427.54
                </p>
              </div>
            </div>

            <Modal />
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}

export default Cart
