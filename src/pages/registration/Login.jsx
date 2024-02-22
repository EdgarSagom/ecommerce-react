import { Link } from 'react-router-dom'

function Login () {
  return (
    <div className=' flex justify-center items-center h-screen bg-orange-800'>
      <div className=' bg-gray-800 px-10 py-10 rounded-xl hover:shadow-orange-600 hover:shadow-2xl transition-shadow duration-300 ease-in-out'>
        <div className=''>
          <h1 className='text-center text-white text-xl mb-4 font-bold'>Login</h1>
        </div>
        <div>
          <input
            type='email'
            name='email'
            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
            placeholder='Email'
          />
        </div>
        <div>
          <input
            type='password'
            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
            placeholder='Password'
          />
        </div>
        <div className=' flex justify-center mb-3'>
          <button
            className='w-full text-white font-bold  px-2 py-2 rounded-lg bg-orange-600 hover:bg-orange-800'
          >
            Login
          </button>
        </div>
        <div>
          <h2 className='text-white'>Don't have an account <Link className='font-bold text-orange-600 hover:text-orange-800' to='/signup'>Signup</Link></h2>
        </div>
      </div>
    </div>
  )
}

export default Login