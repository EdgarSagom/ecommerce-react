/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import MyContext from './myContext'
import { Timestamp, addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { fireDB } from '../../firebase/FirebaseConfig'

function MyState (props) {
  const [mode, setMode] = useState('light')
  const [loading, setLoading] = useState(false)

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(4,18,38)'
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  const [products, setProducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      'en-US',
      {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
      }
    )
  })

  // **** Add Product Section **** //
  const addProduct = async () => {
    if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.description == null) {
      return toast.error('Please fill all fields')
    }

    setLoading(true)

    try {
      const productRef = collection(fireDB, 'products')
      await addDoc(productRef, products)
      toast.success('Adding products successful')
      getProductData()
      setLoading(false)
    } catch (error) {
      console.log(error)
      toast.error('Adding products unsuccessful')
      setLoading(false)
    }
  }

  // **** get Product Section **** //
  const [product, setProduct] = useState([])

  const getProductData = async () => {
    setLoading(true)

    try {
      const q = query(
        collection(fireDB, 'products'),
        orderBy('time')
      )

      const data = onSnapshot(q, (QuerySnapshot) => {
        const productArray = []
        QuerySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id })
        })

        setProduct(productArray)
        setLoading(false)
      })

      return () => data
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getProductData()
  }, [])

  return (
    <MyContext.Provider value={{ mode, toggleMode, loading, setLoading, products, setProducts, addProduct, product }}>
      {props.children}
    </MyContext.Provider>
  )
}

export default MyState
