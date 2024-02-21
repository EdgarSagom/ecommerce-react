import { useContext } from 'react'
import myContext from '../../context/data/myContext'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

function Testimonial () {
  const context = useContext(myContext)
  const { mode } = context
  return (
    <motion.section
      variants={fadeIn('up', 0.3)} initial='hidden'
      whileInView='show'
      className='text-gray-600 body-font mb-10'
    >
      <div className='container px-5 py-10 mx-auto'>
        <h1
          className=' text-center text-3xl font-bold text-black'
          style={{ color: mode === 'dark' ? 'white' : '' }}
        >Testimonial
        </h1>

        <h2
          className=' text-center text-2xl font-semibold mb-10'
          style={{ color: mode === 'dark' ? 'white' : '' }}
        >What our <span className=' text-orange-600'>customers</span> are saying
        </h2>

        <div className='flex flex-wrap -m-4'>
          <div className='lg:w-1/3 lg:mb-0 mb-6 p-4'>
            <div className='h-full text-center'>
              <img src='https://cdn-icons-png.flaticon.com/128/4202/4202831.png' alt='testimonial' className='w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100' />
              <p
                className='leading-relaxed'
                style={{ color: mode === 'dark' ? 'white' : '' }}
              >Excellent laptop, I have been using it for AutoCAD and it works excellent, I like its design, it is comfortable and fast, 100% recommended for gaming or studying.
              </p>
              <span className='inline-block h-1 w-10 rounded bg-orange-600 mt-6 mb-4' />
              <h2
                className='font-medium title-font tracking-wider text-sm uppercase'
                style={{ color: mode === 'dark' ? '#ea580c' : '' }}
              >Jose Sánchez
              </h2>
              <p
                className='text-gray-500'
                style={{ color: mode === 'dark' ? 'white' : '' }}
              >Architecture Student
              </p>
            </div>
          </div>

          <div className='lg:w-1/3 lg:mb-0 mb-6 p-4'>
            <div className='h-full text-center'>
              <img alt='testimonial' className='w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100' src='https://cdn-icons-png.flaticon.com/128/2763/2763444.png' />
              <p
                className='leading-relaxed'
                style={{ color: mode === 'dark' ? 'white' : '' }}
              >After reviewing several reviews, they were all accurate in relation to the fact that the device offers a little more than a mid-range device, at a very good price. The device doesn't jam at all, the battery charges from 0 to 100 in just under 40 min. The screen is of good quality and it is dual sim, which is what I was looking for to bring my personal line and that of working on the same computer.
              </p>
              <span className='inline-block h-1 w-10 rounded bg-orange-600 mt-6 mb-4' />
              <h2
                className='text-gray-900 font-medium title-font tracking-wider text-sm uppercase'
                style={{ color: mode === 'dark' ? '#ea580c' : '' }}
              >Rocio Gómez
              </h2>
              <p
                className='text-gray-500'
                style={{ color: mode === 'dark' ? 'white' : '' }}
              >Trader
              </p>
            </div>
          </div>

          <div className='lg:w-1/3 lg:mb-0 p-4'>
            <div className='h-full text-center'>
              <img alt='testimonial' className='w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100' src='https://cdn-icons-png.flaticon.com/128/11107/11107521.png' />
              <p
                className='leading-relaxed'
                style={{ color: mode === 'dark' ? 'white' : '' }}
              >I was very eager to try it and hesitated to ask for it, the truth is that I have loved the cell phone, I have been buying it for a month and it has fascinated me from everything to everything, there are multiple functions and what stands out the most is the speed and the dual Dolby Atmos speakers, the battery lasts me a whole day and that making it work without rest I loved it a lot.
              </p>
              <span className='inline-block h-1 w-10 rounded bg-orange-600 mt-6 mb-4' />
              <h2
                className='text-gray-900 font-medium title-font tracking-wider text-sm uppercase'
                style={{ color: mode === 'dark' ? '#ea580c' : '' }}
              >Lizeth
              </h2>
              <p
                className='text-gray-500'
                style={{ color: mode === 'dark' ? 'white' : '' }}
              >Psychologist
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Testimonial
