import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import myContext from '../../context/data/myContext'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, fireDB } from '../../firebase/FirebaseConfig'
import { addDoc, collection, Timestamp } from 'firebase/firestore'

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Loader from '../../components/loader/Loader'

import logoImg from '../../../public/logo-eSagom.png'

function Signup () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const context = useContext(myContext)
  const { loading, setLoading } = context

  const signup = async () => {
    if (name === '' || email === '' || password === '') {
      return toast.error('All fields are required')
    }

    try {
      const users = await createUserWithEmailAndPassword(auth, email, password)

      console.log(users)

      const user = {
        name,
        uid: users.user.uid,
        email: users.user.email,
        time: Timestamp.now()
      }

      const userRef = collection(fireDB, 'users')
      await addDoc(userRef, user)
      toast.success('Signup Succesfully')
      setName('')
      setEmail('')
      setPassword('')
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  return (
    <div className=' flex justify-center items-center h-screen bg-orange-600'>
      {loading && <Loader />}
      <div className=' bg-gray-800 px-10 py-10 rounded-xl hover:shadow-orange-800 hover:shadow-2xl transition-shadow duration-300 ease-in-out'>
        <Link to='/' className='flex justify-center mb-4'>
          <img src={logoImg} alt='Logo eSagom' className='w-16 h-12' />
          <h1 className=' text-2xl font-bold text-orange-600 py-1 rounded'>eSagom</h1>
        </Link>
        <div className=''>
          <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup</h1>
        </div>
        <div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type='text'
            name='name'
            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
            placeholder='Name'
          />
        </div>
        <div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            name='email'
            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
            placeholder='Email'
          />
        </div>
        <div>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
            placeholder='Password'
          />
        </div>
        <div className=' flex justify-center mb-3'>
          <button
            onClick={signup}
            className='w-full text-white font-bold px-2 py-2 rounded-lg bg-orange-800 hover:bg-orange-600'
          >
            Signup
          </button>
        </div>
        <div>
          <h2 className='text-white'>Have an account <Link className='font-bold text-orange-800 hover:text-orange-600' to='/login'>Login</Link></h2>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Signup
