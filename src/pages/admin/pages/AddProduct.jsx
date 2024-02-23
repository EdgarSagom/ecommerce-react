import { useContext } from 'react'
import myContext from '../../../context/data/myContext'

import { ToastContainer } from 'react-toastify'

function AddProduct () {
  const context = useContext(myContext)
  const { products, setProducts, addProduct } = context

  return (
    <div>
      <div className='flex justify-center items-center h-screen bg-orange-800'>
        <div className=' bg-gray-800 px-10 py-10 rounded-xl hover:shadow-orange-600 hover:shadow-2xl transition-shadow duration-300 ease-in-out'>
          <div>
            <h1 className='text-center text-white text-xl mb-4 font-bold'>Add Product</h1>
          </div>

          <div>
            <input
              value={products.title}
              onChange={(e) => setProducts({ ...products, title: e.target.value })}
              type='text'
              name='title'
              className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
              placeholder='Product title'
            />
          </div>

          <div>
            <input
              value={products.price}
              onChange={(e) => setProducts({ ...products, price: e.target.value })}
              type='text'
              name='price'
              className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
              placeholder='Product price'
            />
          </div>

          <div>
            <input
              value={products.imageUrl}
              onChange={(e) => setProducts({ ...products, imageUrl: e.target.value })}
              type='text'
              name='imageurl'
              className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
              placeholder='Product imageUrl'
            />
          </div>

          <div>
            <input
              value={products.category}
              onChange={(e) => setProducts({ ...products, category: e.target.value })}
              type='text'
              name='category'
              className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
              placeholder='Product category'
            />
          </div>

          <div>
            <textarea
              value={products.description}
              onChange={(e) => setProducts({ ...products, description: e.target.value })}
              cols='30' rows='10' name='description'
              className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
              placeholder='Product description'
            />
          </div>

          <div className=' flex justify-center mb-3'>
            <button
              onClick={addProduct}
              className='w-full text-white font-bold px-2 py-2 rounded-lg bg-orange-800 hover:bg-orange-600'
            >
              Add Product
            </button>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  )
}

export default AddProduct
