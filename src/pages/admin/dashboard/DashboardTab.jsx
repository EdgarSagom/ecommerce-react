import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import myContext from '../../../context/data/myContext'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../variants'
import { ToastContainer } from 'react-toastify'

import { MdOutlineProductionQuantityLimits } from 'react-icons/md'
import { AiFillShopping } from 'react-icons/ai'
import { FaUser, FaCartPlus } from 'react-icons/fa'
import { IoTrashOutline } from 'react-icons/io5'
import { FiEdit } from 'react-icons/fi'

function DashboardTab () {
  const context = useContext(myContext)
  const { mode, product, editHandle, deleteProduct, order } = context
  // console.log(product)
  const navigate = useNavigate()

  const add = () => {
    navigate('/addproduct')
  }

  return (
    <>
      <div className='container mx-auto'>
        <div className='container mx-auto '>
          <Tabs defaultIndex={0} className=''>
            <TabList
              className='md:flex md:space-x-8 grid grid-cols-2 text-center gap-4 md:justify-center mb-10 '
            >
              <Tab>
                <motion.button
                  variants={fadeIn('up', 0.4)} initial='hidden'
                  whileInView='show'
                  type='button'
                  className='font-medium border-b-2 text-purple-600 border-purple-600 hover:shadow-purple-800 rounded-lg text-xl shadow-[inset_0_0_8px_rgba(0,0,0,0.6)] px-5 py-1.5 text-center bg-[#605d5d12]'
                >
                  <div className='flex gap-2 items-center'>
                    <MdOutlineProductionQuantityLimits />Products
                  </div>
                </motion.button>
              </Tab>

              <Tab>
                <motion.button
                  variants={fadeIn('up', 0.4)} initial='hidden'
                  whileInView='show'
                  type='button'
                  className='font-medium border-b-2 text-pink-600 border-pink-600 hover:shadow-pink-800 rounded-lg text-xl shadow-[inset_0_0_8px_rgba(0,0,0,0.6)] px-5 py-1.5 text-center bg-[#605d5d12]'
                >
                  <div className='flex gap-2 items-center'>
                    <AiFillShopping /> Order
                  </div>
                </motion.button>
              </Tab>

              <Tab>
                <motion.button
                  variants={fadeIn('up', 0.4)} initial='hidden'
                  whileInView='show'
                  type='button'
                  className='font-medium border-b-2 text-green-600 border-green-600 hover:shadow-green-700 rounded-lg text-xl shadow-[inset_0_0_8px_rgba(0,0,0,0.6)] px-5 py-1.5 text-center bg-[#605d5d12]'
                >
                  <div className='flex gap-2 items-center'>
                    <FaUser /> Users
                  </div>
                </motion.button>
              </Tab>
            </TabList>

            {/* product  */}
            <TabPanel>
              <motion.div
                variants={fadeIn('up', 0.6)} initial='hidden'
                whileInView='show'
                className='  px-4 md:px-0 mb-16'
              >
                <h1 className=' text-center mb-5 text-3xl font-semibold underline text-purple-600'>Product Details</h1>

                <div className=' flex justify-end'>
                  <button
                    onClick={add}
                    type='button'
                    className='focus:outline-none text-white bg-orange-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] border hover:bg-orange-800 outline-0 font-medium rounded-lg text-sm px-5 py-2.5 mb-2'
                  >
                    <div className='flex gap-2 items-center'>
                      Add Product <FaCartPlus size={20} />
                    </div>
                  </button>
                </div>

                <div className='relative overflow-x-auto '>
                  <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400  '>
                    <thead
                      className='text-xs border border-gray-600 text-black uppercase bg-gray-200 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]'
                      style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}
                    >
                      <tr>
                        <th scope='col' className='px-6 py-3'>
                          S.No
                        </th>
                        <th scope='col' className='px-6 py-3'>
                          Image
                        </th>
                        <th scope='col' className='px-6 py-3'>
                          Title
                        </th>
                        <th scope='col' className='px-6 py-3'>
                          Price
                        </th>
                        <th scope='col' className='px-6 py-3'>
                          Category
                        </th>
                        <th scope='col' className='px-6 py-3'>
                          Date
                        </th>
                        <th scope='col' className='px-6 py-3'>
                          Description
                        </th>
                        <th scope='col' className='px-6 py-3'>
                          Action
                        </th>
                      </tr>
                    </thead>

                    {product.map((item, index) => {
                      const { title, price, imageUrl, category, description, date } = item
                      return (
                        <tbody className='' key={index}>
                          <tr
                            className='bg-gray-50 border-b dark:border-gray-700'
                            style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}
                          >
                            <td
                              className='px-6 py-4 text-black'
                              style={{ color: mode === 'dark' ? 'white' : '' }}
                            >
                              {index + 1}.
                            </td>
                            <th scope='row' className='px-6 py-4 font-medium text-black whitespace-nowrap'>
                              <img className='w-16' src={imageUrl} alt={title} />
                            </th>
                            <td
                              className='px-6 py-4 text-black'
                              style={{ color: mode === 'dark' ? 'white' : '' }}
                            >
                              {title}
                            </td>
                            <td
                              className='px-6 py-4 text-black'
                              style={{ color: mode === 'dark' ? 'white' : '' }}
                            >
                              ${price}
                            </td>
                            <td
                              className='px-6 py-4 text-black'
                              style={{ color: mode === 'dark' ? 'white' : '' }}
                            >
                              {category}
                            </td>
                            <td
                              className='px-6 py-4 text-black'
                              style={{ color: mode === 'dark' ? 'white' : '' }}
                            >
                              {date}
                            </td>
                            <td
                              className='px-6 py-4 text-black'
                              style={{ color: mode === 'dark' ? 'white' : '' }}
                            >
                              {description.slice(0, 20)}...
                            </td>
                            <td className='px-6 py-4'>
                              <div className=' flex gap-2'>
                                <div
                                  className='flex gap-2 cursor-pointer text-black'
                                  style={{ color: mode === 'dark' ? 'white' : '' }}
                                >
                                  <div
                                    className='hover:text-orange-600'
                                    onClick={() => deleteProduct(item)}
                                  >
                                    <IoTrashOutline className='w-6 h-6' />
                                  </div>

                                  <Link to='/updateproduct'>
                                    <div
                                      className='hover:text-orange-600'
                                      onClick={() => editHandle(item)}
                                    >
                                      <FiEdit className='w-6 h-6' />
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      )
                    })}

                    <ToastContainer />
                  </table>
                </div>
              </motion.div>
            </TabPanel>

            {/* order */}
            <TabPanel>
              <motion.div
                variants={fadeIn('up', 0.6)} initial='hidden'
                whileInView='show'
                className='relative overflow-x-auto mb-16'
              >
                <h1 className='text-center mb-5 text-3xl font-semibold underline text-pink-600'>Order Details</h1>

                {order.map((allOrder, index) => {
                  return (
                    <table
                      key={index}
                      className='w-full text-sm text-left text-gray-500 dark:text-gray-400'
                    >
                      <thead
                        className='text-xs text-black uppercase bg-gray-200'
                        style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}
                      >
                        <tr>
                          <th scope='col' className='px-6 py-3'>
                            Payment Id
                          </th>
                          <th scope='col' className='px-6 py-3'>
                            Image
                          </th>
                          <th scope='col' className='px-6 py-3'>
                            Title
                          </th>
                          <th scope='col' className='px-6 py-3'>
                            Price
                          </th>
                          <th scope='col' className='px-6 py-3'>
                            Category
                          </th>
                          <th scope='col' className='px-6 py-3'>
                            Name
                          </th>
                          <th scope='col' className='px-6 py-3'>
                            Address
                          </th>
                          <th scope='col' className='px-6 py-3'>
                            Pincode
                          </th>
                          <th scope='col' className='px-6 py-3'>
                            Phone Number
                          </th>
                          <th scope='col' className='px-6 py-3'>
                            Email
                          </th>
                          <th scope='col' className='px-6 py-3'>
                            Date
                          </th>
                        </tr>
                      </thead>

                      {allOrder.cartItems.map((item, index) => {
                        // console.log(allOrder)
                        const { imageUrl, title, price, category } = item
                        return (
                          <tbody key={index}>
                            <tr
                              className='bg-gray-50 border-b dark:border-gray-700'
                              style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}
                            >
                              <td
                                className='px-6 py-4 text-black'
                                style={{ color: mode === 'dark' ? 'white' : '' }}
                              >
                                pay_{`${parseInt(allOrder.addressInfo.pincode * 500 / 3.5)}${allOrder.addressInfo.name.slice(0, 2)}`}
                              </td>
                              <th scope='row' className='px-6 py-4 font-medium text-black whitespace-nowrap'>
                                <img
                                  className='w-16'
                                  src={imageUrl}
                                  alt={title}
                                />
                              </th>
                              <td
                                className='px-6 py-4 text-black'
                                style={{ color: mode === 'dark' ? 'white' : '' }}
                              >
                                {title.length <= 55 ? title : `${title.slice(0, 50)}...`}
                              </td>
                              <td
                                className='px-6 py-4 text-black'
                                style={{ color: mode === 'dark' ? 'white' : '' }}
                              >
                                ${price}
                              </td>
                              <td
                                className='px-6 py-4 text-black'
                                style={{ color: mode === 'dark' ? 'white' : '' }}
                              >
                                {category}
                              </td>
                              <td
                                className='px-6 py-4 text-black'
                                style={{ color: mode === 'dark' ? 'white' : '' }}
                              >
                                {allOrder.addressInfo.name}
                              </td>
                              <td
                                className='px-6 py-4 text-black'
                                style={{ color: mode === 'dark' ? 'white' : '' }}
                              >
                                {allOrder.addressInfo.address}
                              </td>
                              <td
                                className='px-6 py-4 text-black'
                                style={{ color: mode === 'dark' ? 'white' : '' }}
                              >
                                {allOrder.addressInfo.pincode}
                              </td>
                              <td
                                className='px-6 py-4 text-black'
                                style={{ color: mode === 'dark' ? 'white' : '' }}
                              >
                                {allOrder.addressInfo.phoneNumber}
                              </td>
                              <td
                                className='px-6 py-4 text-black'
                                style={{ color: mode === 'dark' ? 'white' : '' }}
                              >
                                {allOrder.email}
                              </td>
                              <td
                                className='px-6 py-4 text-black'
                                style={{ color: mode === 'dark' ? 'white' : '' }}
                              >
                                {allOrder.date}
                              </td>
                            </tr>
                          </tbody>
                        )
                      })}
                    </table>
                  )
                })}
              </motion.div>
            </TabPanel>

            {/* user */}
            <TabPanel>
              <motion.div
                variants={fadeIn('up', 0.6)} initial='hidden'
                whileInView='show'
                className='relative overflow-x-auto mb-10'
              >
                <h1 className=' text-center mb-5 text-3xl font-semibold underline text-green-600'>User Details</h1>

                <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                  <thead
                    className='text-xs text-black uppercase bg-gray-200'
                    style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}
                  >
                    <tr>
                      <th scope='col' className='px-6 py-3'>
                        S.No
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Name
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Address
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Pincode
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Phone Number
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Email
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Date
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr
                      className='bg-gray-50 border-b  dark:border-gray-700'
                      style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}
                    >
                      <td
                        className='px-6 py-4 text-black'
                        style={{ color: mode === 'dark' ? 'white' : '' }}
                      >
                        1.
                      </td>
                      <td
                        className='px-6 py-4 text-black'
                        style={{ color: mode === 'dark' ? 'white' : '' }}
                      >
                        Name
                      </td>
                      <td
                        className='px-6 py-4 text-black'
                        style={{ color: mode === 'dark' ? 'white' : '' }}
                      >
                        Address
                      </td>
                      <td
                        className='px-6 py-4 text-black '
                        style={{ color: mode === 'dark' ? 'white' : '' }}
                      >
                        75757
                      </td>
                      <td
                        className='px-6 py-4 text-black'
                        style={{ color: mode === 'dark' ? 'white' : '' }}
                      >
                        555555555555
                      </td>
                      <td
                        className='px-6 py-4 text-black'
                        style={{ color: mode === 'dark' ? 'white' : '' }}
                      >
                        example@gmail.com
                      </td>
                      <td
                        className='px-6 py-4 text-black'
                        style={{ color: mode === 'dark' ? 'white' : '' }}
                      >
                        22 Feb 2024
                      </td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  )
}

export default DashboardTab
