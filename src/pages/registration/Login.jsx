import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import myContext from '../../context/data/myContext'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/FirebaseConfig'
import { toast, ToastContainer } from 'react-toastify'
import Loader from '../../components/loader/Loader'

import logoImg from '../../../public/logo-eSagom.png'

function Login () {
  const context = useContext(myContext)
  const { loading, setLoading } = context

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const login = async () => {
    setLoading(true)
    try {
      const result = await signInWithEmailAndPassword(auth, email, password)
      toast.success('Login successful', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored'
      })
      localStorage.setItem('user', JSON.stringify(result))
      navigate('/')
      setLoading(false)
    } catch (error) {
      toast.error('Sigin Failed', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored'
      })
      setLoading(false)
      console.log(error)
    }
  }

  return (
    <div className=' flex justify-center items-center h-screen bg-orange-800'>
      {loading && <Loader />}
      <div className=' bg-gray-800 px-10 py-10 rounded-xl hover:shadow-orange-600 hover:shadow-2xl transition-shadow duration-300 ease-in-out'>
        <Link to='/' className='flex justify-center mb-4'>
          <img src={logoImg} alt='Logo eSagom' className='w-16 h-12' />
          <h1 className=' text-2xl font-bold text-orange-600 py-1 rounded'>eSagom</h1>
        </Link>
        <div className=''>
          <h1 className='text-center text-white text-xl mb-4 font-bold'>Login</h1>
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
            onClick={login}
            className='w-full text-white font-bold  px-2 py-2 rounded-lg bg-orange-600 hover:bg-orange-800'
          >
            Login
          </button>
        </div>
        <div>
          <h2 className='text-white'>Don't have an account <Link className='font-bold text-orange-600 hover:text-orange-800' to='/signup'>Signup</Link></h2>
        </div>
      </div>

      <ToastContainer />
    </div>
  )
}

export default Login
