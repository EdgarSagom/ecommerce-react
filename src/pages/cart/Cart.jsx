import { useContext, useEffect, useState } from 'react'
import myContext from '../../context/data/myContext'
import Layout from '../../components/layout/Layout'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import Modal from '../../components/modal/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart } from '../../redux/cartSlice'
import { addDoc, collection } from 'firebase/firestore'
import { fireDB } from '../../firebase/FirebaseConfig'

import { IoTrashOutline } from 'react-icons/io5'
import { toast, ToastContainer } from 'react-toastify'

function Cart () {
  const context = useContext(myContext)
  const { mode } = context

  const dispatch = useDispatch()

  const cartItems = useSelector((state) => state.cart)
  // console.log(cartItems)

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item))
    toast.success('Delete Cart')
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  const [totalAmout, setTotalAmout] = useState(0)

  useEffect(() => {
    let temp = 0
    cartItems.forEach((cartItem) => {
      temp = temp + parseInt(cartItem.price)
    })
    setTotalAmout(temp)
    // console.log(temp)
  }, [cartItems])

  const shipping = parseInt(20)

  const grandTotal = shipping + totalAmout
  // console.log(grandTotal)

  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [pincode, setPincode] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const buyNow = async () => {
    // validation
    if (name === '' || address === '' || pincode === '' || phoneNumber === '') {
      return toast.error('All fields are required', {
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored'
      })
    }

    try {
      const addressInfo = {
        name,
        address,
        pincode,
        phoneNumber,
        date: new Date().toLocaleString(
          'en-US',
          {
            month: 'short',
            day: '2-digit',
            year: 'numeric'
          }
        )
      }

      const orderInfo = {
        cartItems,
        addressInfo,
        date: new Date().toLocaleString(
          'en-US',
          {
            month: 'short',
            day: '2-digit',
            year: 'numeric'
          }
        ),
        email: JSON.parse(localStorage.getItem('user')).user.email,
        userid: JSON.parse(localStorage.getItem('user')).user.uid
      }
      const orderRef = collection(fireDB, 'orders')
      addDoc(orderRef, orderInfo)
      // console.log(orderInfo)
      setName('')
      setAddress('')
      setPincode('')
      setPhoneNumber('')
    } catch (error) {
      console.log(error)
    }

    toast.success('Payment Successful')
  }

  return (
    <Layout>
      <div
        className='py-5 my-8'
        style={{ color: mode === 'dark' ? 'white' : '' }}
      >
        <h1 className='mb-10 text-center text-2xl font-bold'>Cart Items</h1>
        <div className='mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 '>
          <div className='rounded-lg md:w-2/3 '>
            {cartItems.map((item, index) => {
              const { imageUrl, title, description, price } = item

              return (
                <motion.div
                  variants={fadeIn('up', 0.4)} initial='hidden'
                  whileInView='show'
                  key={index}
                  className='items-center justify-between mb-6 rounded-lg border drop-shadow-xl bg-white p-6  sm:flex sm:justify-start'
                  style={{ backgroundColor: mode === 'dark' ? 'rgb(32 33 34)' : '', color: mode === 'dark' ? 'white' : '' }}
                >
                  <img
                    src={imageUrl}
                    alt={title}
                    className='w-full rounded-lg sm:w-40 object-cover object-center hover:scale-110 transition-scale-110 duration-300 ease-in-out'
                  />

                  <div className='sm:ml-4 sm:flex sm:w-full sm:justify-between'>
                    <div className='mt-5 sm:mt-0'>
                      <h2
                        className='text-lg font-bold'
                        style={{ color: mode === 'dark' ? 'white' : '' }}
                      >{title}
                      </h2>
                      <h2
                        className='text-sm'
                        style={{ color: mode === 'dark' ? 'white' : '' }}
                      >{description.length <= 225 ? description : `${description.slice(0, 225)}...`}
                      </h2>
                      <p
                        className='mt-1 text-xs font-semibold text-gray-600'
                        style={{ color: mode === 'dark' ? 'white' : '' }}
                      >${price}
                      </p>
                    </div>

                    <div
                      onClick={() => deleteCart(item)}
                      className='mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6'
                    >
                      <IoTrashOutline className='w-6 h-6 text-orange-800 hover:text-orange-600 cursor-pointer' />
                    </div>
                  </div>
                </motion.div>
              )
            })}
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
              >${totalAmout}
              </p>
            </div>

            <div className='flex justify-between'>
              <p style={{ color: mode === 'dark' ? 'white' : '' }}>Shipping</p>
              <p
                className='text-gray-600'
                style={{ color: mode === 'dark' ? 'white' : '' }}
              >{totalAmout === 0 || totalAmout >= 150 ? '$0' : `$${shipping}`}
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
                >{totalAmout === 0 ? '$0' : totalAmout >= 150 ? `$${totalAmout}` : `$${grandTotal}`}
                </p>
              </div>
            </div>

            <Modal
              name={name}
              address={address}
              pincode={pincode}
              phoneNumber={phoneNumber}
              setName={setName}
              setAddress={setAddress}
              setPincode={setPincode}
              setPhoneNumber={setPhoneNumber}
              buyNow={buyNow}
            />
          </motion.div>
        </div>
      </div>

      <ToastContainer />
    </Layout>
  )
}

export default Cart
