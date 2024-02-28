/* eslint-disable react/jsx-closing-tag-location */
import { useContext } from 'react'
import myContext from '../../context/data/myContext'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import { TypeAnimation } from 'react-type-animation'
import { Link, useNavigate } from 'react-router-dom'

import imgBanner1 from '../../assets/banner-shopping-1.jpg'
import imgBanner2 from '../../assets/banner-shopping-2.jpg'

import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function BannerSection () {
  const context = useContext(myContext)
  const { mode } = context

  const user = JSON.parse(localStorage.getItem('user'))
  // console.log(user)

  const navigate = useNavigate()

  const login = () => {
    navigate('/login')
  }

  const signup = () => {
    navigate('/signup')
  }

  const logout = () => {
    localStorage.clear('user')
    navigate('/login')
  }

  return (
    <section className='items-center'>
      <div className='container'>
        {/* Image */}
        <motion.div
          variants={fadeIn('down', 0.5)} initial='hidden'
          whileInView='show'
          className='absolute z-[-1]'
        >
          {mode === 'dark'
            ? (<img src={imgBanner2} alt='' className='w-screen h-[350px] lg:h-[400px] object-cover' />)
            : (<img src={imgBanner1} alt='' className='w-screen h-[350px] lg:h-[400px] object-cover' />)}
        </motion.div>

        {/* Text */}
        <div className='px-10'>
          <div className='text-center lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.3)} initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.7 }}
              className='text-[40px] font-bold lg:text-[80px]'
            >
              ¡WELCOME!
            </motion.h1>

            <motion.div
              variants={fadeIn('up', 0.4)} initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[25px] lg:text-[50px] font-semibold leading-[1]'
            >
              <TypeAnimation
                sequence={[
                  'HELLO',
                  2000,
                  `${user ? user.user.email : 'Login...'}`,
                  2000,
                  'Explore...',
                  2000,
                  'Check...',
                  2000,
                  'Have fun in...',
                  2000,
                  'eSagom',
                  2000
                ]}
                speed={50}
                className='text-orange-800 font-extrabold'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              variants={fadeIn('up', 0.5)} initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.7 }}
              className='font-bold mb-8 max-w-lg mx-auto lg:mx-0'
            >
              Thousands of new, wonderful, and amazing products in one place.
              <br />
              Join the thousands of people who are shopping here.
            </motion.p>

            {!user
              ? <motion.div
                  variants={fadeIn('up', 0.6)} initial='hidden'
                  whileInView='show'
                  viewport={{ once: false, amount: 0.7 }}
                  className='flex max-w-max gap-x-6 items-center mb-8 mx-auto lg:mx-0'
                >
                <button
                  onClick={login}
                  className='bg-orange-600 hover:bg-orange-800 text-white font-bold py-2 px-4 opacity-70 rounded-full'
                >Login
                </button>

                <button
                  onClick={signup}
                  className='bg-orange-600 hover:bg-orange-800 text-white font-bold py-2 px-4 opacity-70 rounded-full'
                >Signup
                </button>
              </motion.div>
              : <motion.div
                  variants={fadeIn('up', 0.6)} initial='hidden'
                  whileInView='show'
                  viewport={{ once: false, amount: 0.7 }}
                  className='flex max-w-max gap-x-6 items-center mb-8 mx-auto lg:mx-0'
                >
                <button
                  onClick={logout}
                  className='bg-orange-600 hover:bg-orange-800 text-white font-bold py-2 px-4 opacity-70 rounded-full'
                >Logout
                </button>
              </motion.div>}

            {/* Socials */}
            <motion.div
              variants={fadeIn('up', 0.7)} initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[25px] gap-x-6 max-w-max mx-auto lg:mx-0'
            >
              <Link to='https://www.instagram.com/edgarsagom/' className='hover:text-orange-600'>
                <FaInstagram />
              </Link>

              <Link to='https://twitter.com/SagomEdgar' className='hover:text-orange-600'>
                <FaXTwitter />
              </Link>

              <Link to='' className='hover:text-orange-600'>
                <FaLinkedin />
              </Link>

              <Link to='https://github.com/EdgarSagom' className='hover:text-orange-600'>
                <FaGithub />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BannerSection
