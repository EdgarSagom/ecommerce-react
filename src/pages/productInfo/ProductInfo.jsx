import { useContext, useState } from 'react'
import myContext from '../../context/data/myContext'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

import Layout from '../../components/layout/Layout'

import { FaStar, FaRegStar, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import { FaXTwitter, FaHeartCirclePlus, FaHeartCircleMinus } from 'react-icons/fa6'

function ProductInfo () {
  const context = useContext(myContext)
  const { mode } = context
  const [like, setLike] = useState(false)

  const handlerLike = () => {
    setLike(!like)
  }

  return (
    <Layout>
      <section className='body-font overflow-hidden'>
        <div className='container px-5 py-20 mx-auto'>
          <motion.div
            variants={fadeIn('down', 0.3)} initial='hidden'
            whileInView='show'
            className='lg:w-4/5 mx-auto flex flex-wrap'
          >
            <img
              src='https://dummyimage.com/400x400'
              alt='Image Product'
              className='lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-2xl hover:scale-110 transition-scale-110 duration-300 ease-in-out'
            />

            <motion.div
              variants={fadeIn('up', 0.7)} initial='hidden'
              whileInView='show'
              className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'
            >
              <h2 className='text-md title-font text-gray-600 tracking-widest'>
                BRAND NAME: Apple
              </h2>

              <h1
                style={{ color: mode === 'dark' ? 'white' : '' }}
                className='text-gray-900 text-3xl title-font font-medium mb-1'
              >
                Title: Apple iPhone 15 Pro (128 GB) - Titanio Natural - Distribuidor autorizado
              </h1>

              <div className='flex mb-4'>
                <span className='flex items-center'>
                  <FaStar className='w-4 h-4 fill-orange-600' />
                  <FaStar className='w-4 h-4 fill-orange-600' />
                  <FaStar className='w-4 h-4 fill-orange-600' />
                  <FaStar className='w-4 h-4 fill-orange-600' />
                  <FaRegStar className='w-4 h-4 fill-orange-600' />
                  <span className='text-gray-600 ml-3'>4 Reviews</span>
                </span>

                <span className='flex ml-3 pl-3 py-2 border-l-2 border-gray-400 text-gray-600'>
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

              <p
                style={{ color: mode === 'dark' ? 'white' : '' }}
                className='leading-relaxed border-b-2 mb-5 pb-5'
              >
                Diseño resistente y ligero.
                Pantalla Super Retina XDR con ProMotion con frecuencia de actualización hasta 120 Hz.
                La Dynamic Island muestra alertas y actividades en vivo al instante.
                Sistema de cámaras pro de super alta resolución.
                Botón de acción personalizable para ir a tu funcionalidad favorita.
                Con conector USB-C y WiFi 6 con el doble de velocidad.
                Funcionalidad esencial de seguridad con detección de choques para pedir ayuda.
                Con tecnologías de privacidad que te ayudan a mantener el control de tus datos.
              </p>

              <div className='flex'>
                <span
                  style={{ color: mode === 'dark' ? 'white' : '' }}
                  className='title-font font-medium text-2xl text-gray-900'
                >
                  $1,407.54
                </span>

                <button className='flex ml-auto text-white bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-orange-800 rounded'>
                  Add To Cart
                </button>

                <button className='rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4'>
                  {like ? <FaHeartCircleMinus onClick={handlerLike} className='w-8 h-8 fill-orange-600' /> : <FaHeartCirclePlus onClick={handlerLike} className='w-7 h-7' />}
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}

export default ProductInfo
