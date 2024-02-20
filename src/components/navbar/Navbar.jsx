import { Fragment, useContext, useState } from 'react'
import myContext from '../../context/data/myContext'
import { Dialog, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'

import logoImg from '../../../public/logo-eSagom.png'
import { RxCross2 } from 'react-icons/rx'
import { TiThMenu } from 'react-icons/ti'
import { FiSun } from 'react-icons/fi'
import { BsFillCloudSunFill } from 'react-icons/bs'
import { IoMdCart } from 'react-icons/io'

function Navbar () {
  const context = useContext(myContext)
  const { mode, toggleMode } = context

  const [open, setOpen] = useState(false)

  return (
    <div className='bg-white sticky top-0 z-50'>
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as='div' className='relative z-40 lg:hidden' onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 z-40 flex'>
            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <Dialog.Panel className='relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl' style={{ backgroundColor: mode === 'dark' ? 'rgb(40, 44, 52)' : '', color: mode === 'dark' ? 'white' : '' }}>
                <div className='flex px-4 pb-2 pt-28'>
                  <button
                    type='button'
                    className='-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400'
                    onClick={() => setOpen(false)}
                  >
                    <span className='sr-only'>Close menu</span>
                    <RxCross2 />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className='space-y-6 border-t border-gray-200 px-4 py-6 font-medium text-gray-900' style={{ color: mode === 'dark' ? 'white' : '' }}>
                  <Link to='/allproducts' className='text-sm hover:text-orange-600'>
                    All Products
                  </Link>
                  <div className='flow-root hover:text-orange-600'>
                    <Link to='/order' className='-m-2 block p-2'>
                      Order
                    </Link>
                  </div>

                  <div className='flow-root'>
                    <Link to='/dashboard' className='-m-2 block p-2 hover:text-orange-600'>
                      admin
                    </Link>
                  </div>

                  <div className='flow-root'>
                    <a className='-m-2 block p-2 hover:text-orange-600 cursor-pointer'>
                      Logout
                    </a>
                  </div>
                  <div className='flow-root'>
                    <Link to='/' className='-m-2 block p-2 cursor-pointer'>
                      <img
                        className='inline-block w-10 h-10 rounded-full'
                        src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png'
                        alt='Profile picture'
                      />
                    </Link>
                  </div>
                </div>

                <div className='border-t border-gray-200 px-4 py-6'>
                  <a href='#' className='-m-2 flex items-center p-2'>
                    <img
                      src='https://s1.1zoom.me/b5050/706/339091-Berserker_2560x1440.jpg'
                      alt=''
                      className='block h-auto w-5 flex-shrink-0'
                    />
                    <span className='ml-3 block text-base font-medium text-gray-900' style={{ color: mode === 'dark' ? 'white' : '' }}>MEXICO</span>
                    <span className='sr-only'>, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Desktop  */}
      <header className='relative bg-white'>
        <p className='flex h-10 items-center justify-center bg-orange-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8' style={{ backgroundColor: mode === 'dark' ? 'rgb(120, 53, 15)' : '', color: mode === 'dark' ? 'white' : '' }}>
          Get free delivery on orders over $15
        </p>

        <nav aria-label='Top' className='bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl ' style={{ backgroundColor: mode === 'dark' ? 'rgb(40, 44, 52)' : '', color: mode === 'dark' ? 'white' : '' }}>
          <div className=''>
            <div className='flex h-16 items-center'>
              {/* Hamburger icon */}
              <button
                type='button'
                className='rounded-md bg-white p-2 text-gray-400 lg:hidden'
                onClick={() => setOpen(true)} style={{ backgroundColor: mode === 'dark' ? 'rgb(80, 82, 87)' : '', color: mode === 'dark' ? 'white' : '' }}
              >
                <span className='sr-only'>Open menu</span>
                <TiThMenu className='w-6 h-6' />
              </button>

              {/* Logo */}
              <div className='ml-4 flex lg:ml-0'>
                <Link to='/' className='flex'>
                  <div className='flex '>
                    <img src={logoImg} alt='Logo eSagom' className='w-16 h-12' />
                    <h1 className=' text-2xl font-bold text-orange-600 py-1 rounded'>eSagom</h1>
                  </div>
                </Link>
              </div>

              {/* Navigation Links */}
              <div className='ml-auto flex items-center'>
                <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 text-sm font-medium text-gray-700' style={{ color: mode === 'dark' ? 'white' : '' }}>
                  <Link to='/allproducts' className='hover:text-orange-600'>
                    All Products
                  </Link>
                  <Link to='/order' className='hover:text-orange-600'>
                    Order
                  </Link>
                  <Link to='/dashboard' className='hover:text-orange-600'>
                    Admin
                  </Link>

                  <a className='hover:text-orange-600 cursor-pointer'>
                    Logout
                  </a>
                </div>

                {/* Profile */}
                <div className='hidden lg:ml-8 lg:flex'>
                  <a href='#' className='flex items-center text-gray-700 '>
                    <img
                      src='https://s1.1zoom.me/b5050/706/339091-Berserker_2560x1440.jpg'
                      alt='Mexico flag'
                      className='block h-auto w-5 flex-shrink-0'
                    />
                    <span className='ml-3 block text-sm font-medium' style={{ color: mode === 'dark' ? 'white' : '' }}>MEXICO</span>
                  </a>
                </div>
                <div className='hidden lg:ml-8 lg:flex'>
                  <a href='#' className='flex items-center text-gray-700 '>
                    <img
                      className='inline-block w-10 h-10 rounded-full'
                      src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png'
                      alt='Profile picture'
                    />
                  </a>
                </div>

                {/* Toggle Buttom */}
                <div className='flex lg:ml-6'>
                  <button className='' onClick={toggleMode}>
                    {/* <MdDarkMode size={35} style={{ color: mode === 'dark' ? 'white' : '' }} /> */}
                    {mode === 'light'
                      ? (<FiSun className='hover:text-orange-600' size={30} />
                        )
                      : mode === 'dark'
                        ? (<BsFillCloudSunFill className='hover:text-orange-600' size={30} />
                          )
                        : ''}
                  </button>
                </div>

                {/* Cart */}
                <div className='ml-4 flow-root lg:ml-6'>
                  <Link to='/cart' className='group -m-2 flex items-center p-2 hover:text-orange-600' style={{ color: mode === 'dark' ? 'white' : '' }}>
                    <IoMdCart className='w-6 h-6' />

                    <span className='ml-2 text-sm font-medium text-gray-700' style={{ color: mode === 'dark' ? 'white' : '' }}>0</span>
                    <span className='sr-only'>items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
