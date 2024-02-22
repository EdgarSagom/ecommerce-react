import { useContext } from 'react'
import myContext from '../../context/data/myContext'
import { Link } from 'react-router-dom'

import logoImg from '../../../public/logo-eSagom.png'
import payImg from '../../assets/payImg.webp'

import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function Footer () {
  const context = useContext(myContext)
  const { mode } = context

  return (
    <footer
      className='text-gray-600 body-font bg-gray-300'
      style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}
    >
      <div className='container px-5 py-5 mx-auto'>
        <div className='flex flex-wrap md:text-left text-center order-first'>
          <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
            <h2
              className='title-font font-medium tracking-widest text-sm mb-3'
              style={{ color: mode === 'dark' ? 'white' : '' }}
            >CATEGORIES
            </h2>

            <nav
              className='list-none mb-10 text-gray-600'
              style={{ color: mode === 'dark' ? 'white' : '' }}
            >
              <li>
                <Link to='/' className='hover:text-orange-600'>Home</Link>
              </li>
              <li>
                <Link to='/order' className='hover:text-orange-600'>Order</Link>
              </li>
              <li>
                <Link to='' className='hover:text-orange-600'>Local For Vocal</Link>
              </li>
              <li>
                <Link to='/cart' className='hover:text-orange-600'>Cart</Link>
              </li>
            </nav>
          </div>

          <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
            <h2
              className='title-font font-medium tracking-widest text-sm mb-3 uppercase'
              style={{ color: mode === 'dark' ? 'white' : '' }}
            >Customer Service
            </h2>

            <nav
              className='list-none mb-10 text-gray-600'
              style={{ color: mode === 'dark' ? 'white' : '' }}
            >
              <li>
                <Link to='/returnpolicy' className='hover:text-orange-600'>Return Policy</Link>
              </li>
              <li>
                <Link to='/about' className='hover:text-orange-600'>About</Link>
              </li>
              <li>
                <Link to='/contact' className='hover:text-orange-600'>Contact Us</Link>
              </li>
            </nav>
          </div>

          <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
            <h2
              className='title-font font-medium tracking-widest text-sm mb-3'
              style={{ color: mode === 'dark' ? 'white' : '' }}
            >Services
            </h2>

            <nav
              className='list-none mb-10 text-gray-600'
              style={{ color: mode === 'dark' ? 'white' : '' }}
            >
              <li>
                <Link
                  to='/privacypolicy'
                  className='hover:text-orange-600'
                >Privacy
                </Link>
              </li>
            </nav>
          </div>

          <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
            <h2
              className='title-font font-medium tracking-widest text-sm mb-3 text-center'
              style={{ color: mode === 'dark' ? 'white' : '' }}
            >We Accept
            </h2>

            <img src={payImg} alt='Picture of which ones we accept to pay' />
          </div>
        </div>
      </div>

      <div
        className='bg-gray-200'
        style={{ backgroundColor: mode === 'dark' ? 'rgb(55 57 61)' : '', color: mode === 'dark' ? 'white' : '' }}
      >
        <div className='container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col'>
          <Link to='/' className='flex'>
            <div className='flex '>
              <img src={logoImg} alt='Logo eSagom' className='w-16 h-12' />
              <h1 className=' text-2xl font-bold text-orange-600 py-1'>eSagom</h1>
            </div>
          </Link>

          <p
            className='text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4'
            style={{ color: mode === 'dark' ? 'white' : '' }}
          >© 2023 eSagom — www.esagom.com
          </p>

          <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-gray-500'>
            <Link to='https://www.instagram.com/edgarsagom/'>
              <FaInstagram className='w-5 h-5 hover:text-orange-600' />
            </Link>

            <Link to='https://twitter.com/SagomEdgar'>
              <FaXTwitter className='w-5 h-5 ml-3 hover:text-orange-600' />
            </Link>

            <Link to=''>
              <FaLinkedin className='w-5 h-5 ml-3 hover:text-orange-600' />
            </Link>

            <Link to='https://github.com/EdgarSagom'>
              <FaGithub className='w-5 h-5 ml-3 hover:text-orange-600' />
            </Link>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
