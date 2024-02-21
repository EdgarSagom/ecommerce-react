import { useContext } from 'react'
import myContext from '../../context/data/myContext'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

import { IoSearch } from 'react-icons/io5'

function Filter () {
  const context = useContext(myContext)
  const { mode } = context

  return (
    <div className=' container mx-auto px-4 mt-5 '>
      <motion.div
        variants={fadeIn('up', 0.9)} initial='hidden'
        whileInView='show'
        className='p-5 rounded-lg bg-gray-200 drop-shadow-xl border border-gray-300'
        style={{
          backgroundColor: mode === 'dark' ? '#282c34' : '',
          color: mode === 'dark' ? 'white' : ''
        }}
      >
        <div className='relative'>
          <div className='absolute flex items-center ml-2 h-full'>
            <IoSearch />
          </div>
          <input
            type='text'
            name='searchkey'
            id='searchkey'
            placeholder='Search here'
            className='px-8 py-3 w-full rounded-md border-transparent outline-0 text-sm' style={{ backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '', color: mode === 'dark' ? 'white' : '' }}
          />
        </div>

        <div className='flex items-center justify-between mt-4'>
          <p className='font-medium'>
            Filters
          </p>
          <button className='px-4 py-2 bg-gray-50hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md' style={{ color: mode === 'dark' ? 'white' : '' }}>
            Reset Filter
          </button>
        </div>

        <div>
          <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4'>
            <select
              className='px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm'
              style={{ backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '', color: mode === 'dark' ? 'white' : '' }}
            >
              <option value='all'>All</option>
              <option value='desktop'>Desktop</option>
              <option value='mobiles'>Mobiles</option>
              <option value='laptops'>Laptops</option>
            </select>

            <select
              className='px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0  focus:border-gray-500 focus:bg-white focus:ring-0 text-sm'
              style={{ backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '', color: mode === 'dark' ? 'white' : '' }}
            >
              <option value='10'>10</option>
              <option value='20'>20</option>
              <option value='30'>30</option>
              <option value='40'>40</option>
            </select>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Filter
