import { useContext } from 'react'
import myContext from '../../context/data/myContext'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

import { IoSearch } from 'react-icons/io5'

function Filter () {
  const context = useContext(myContext)
  const { mode, searchKey, setSearchKey, filterType, setFilterType, filterPrice, setFilterPrice, product } = context

  const arrayCategory = product.map((item) => {
    return item.category
  })

  const removeDuplicatesCategory = (arrayCategory) => {
    const uniqueArray = []
    for (let i = 0; i < arrayCategory.length; i++) {
      if (uniqueArray.indexOf(arrayCategory[i]) === -1) {
        uniqueArray.push(arrayCategory[i])
      }
    }
    return uniqueArray
  }
  // console.log(removeDuplicates(arrayCategory))

  const arrayPrice = product.map((item) => {
    return item.price
  })

  const removeDuplicatesPrice = (arrayPrice) => {
    const uniqueArray = []
    for (let i = 0; i < arrayPrice.length; i++) {
      if (uniqueArray.indexOf(arrayPrice[i]) === -1) {
        uniqueArray.push(arrayPrice[i])
      }
    }
    const orderPrice = uniqueArray.sort((a, b) => {
      return a - b
    })
    return orderPrice
  }
  // console.log(removeDuplicatesPrice(arrayPrice))

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
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
            type='text'
            name='searchkey'
            id='searchkey'
            placeholder='Search here'
            className='px-8 py-3 w-full rounded-md border-transparent outline-0 text-sm'
            style={{ backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '', color: mode === 'dark' ? 'white' : '' }}
          />
        </div>

        <div className='flex items-center justify-between mt-4'>
          <p className='font-medium'>
            Filters
          </p>
          <button
            className='px-4 py-2 bg-gray-50hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md'
            style={{ color: mode === 'dark' ? 'white' : '' }}
            onClick={() => {
              setSearchKey('')
              setFilterType('')
              setFilterPrice('')
            }}
          >
            Reset Filter
          </button>
        </div>

        <div>
          <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4'>
            <label>
              <h2 className='px-4 py-1'>Category</h2>

              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className='px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm'
                style={{ backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '', color: mode === 'dark' ? 'white' : '' }}
              >
                {removeDuplicatesCategory(arrayCategory).map((item, index) => {
                  return (
                    <option
                      key={index}
                      value={item}
                    >{item}
                    </option>
                  )
                })}
              </select>
            </label>

            <label>
              <h2 className='px-4 py-1'>Price</h2>

              <select
                value={filterPrice}
                onChange={(e) => setFilterPrice(e.target.value)}
                className='px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0  focus:border-gray-500 focus:bg-white focus:ring-0 text-sm'
                style={{ backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '', color: mode === 'dark' ? 'white' : '' }}
              >
                {removeDuplicatesPrice(arrayPrice).map((item, index) => {
                  return (
                    <option
                      key={index}
                      value={item}
                    >{item}
                    </option>
                  )
                })}
              </select>
            </label>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Filter
