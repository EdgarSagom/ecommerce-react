import { useContext } from 'react'
import myContext from '../../../context/data/myContext'
import Layout from '../../../components/layout/Layout'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../variants'
import DashboardTab from './DashboardTab'

import { FaUserTie } from 'react-icons/fa'

function Dashboard () {
  const context = useContext(myContext)
  const { mode, product, order, user } = context
  // console.log(product, order, user)

  return (
    <Layout>
      <section className='text-gray-600 py-10 my-10'>
        <motion.div
          variants={fadeIn('up', 0.2)} initial='hidden'
          whileInView='show'
          className='container px-5 mx-auto mb-10'
        >
          <div className='flex flex-wrap -m-4 text-center'>
            <div className='p-4 md:w-1/3 sm:w-1/2 w-full'>
              <div
                className=' border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300 px-4 py-3 rounded-xl'
                style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}
              >
                <div className='text-purple-600 w-12 h-12 mb-3 inline-block'>
                  <FaUserTie size={50} />
                </div>
                <h2
                  className='title-font font-medium text-3xl text-black fonts1'
                  style={{ color: mode === 'dark' ? 'white' : '' }}
                >{product.length}
                </h2>
                <p className=' text-purple-600 font-bold'>Total Products</p>
              </div>
            </div>

            <div className='p-4 md:w-1/3 sm:w-1/2 w-full'>
              <div
                className=' border-2 hover:shadow-pink-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300 px-4 py-3 rounded-xl'
                style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}
              >
                <div className='text-pink-600 w-12 h-12 mb-3 inline-block'>
                  <FaUserTie size={50} />
                </div>
                <h2
                  className='title-font font-medium text-3xl text-black fonts1'
                  style={{ color: mode === 'dark' ? 'white' : '' }}
                >{order.length}
                </h2>
                <p className=' text-pink-600  font-bold'>Total Orders</p>
              </div>
            </div>

            <div className='p-4 md:w-1/3 sm:w-1/2 w-full'>
              <div
                className=' border-2 hover:shadow-green-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300 px-4 py-3 rounded-xl'
                style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}
              >
                <div className='text-green-600 w-12 h-12 mb-3 inline-block'>
                  <FaUserTie size={50} />
                </div>
                <h2
                  className='title-font font-medium text-3xl text-black fonts1'
                  style={{ color: mode === 'dark' ? 'white' : '' }}
                >{user.length}
                </h2>
                <p className='text-green-600  font-bold'>Total Users</p>
              </div>
            </div>
          </div>
        </motion.div>

        <DashboardTab />
      </section>
    </Layout>
  )
}

export default Dashboard
