import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { getData, addProduct, removeProduct } from '../../redux/actions'


const App = () => {
  const dispatch = useDispatch()
  const [products, setProducts] = useState([])

  useEffect(() => {
    dispatch(getData())
  }, [dispatch])




  const data = useSelector(state => state.product.allProducts)
  const cart = useSelector(state => state.product.inCart)

  const store = localStorage.getItem('state')
  const storeData = JSON.parse(store)
  console.log('storeData--', storeData.product.inCart)



  const handleAdd = (product) => {
    dispatch(addProduct(product))
  }

  const handleRemove = (product) => {
    dispatch(removeProduct(product))
  }

  return (
    <div>
      <h1>{`Cart: ${cart.length}`}</h1>
      {data && data.map(product =>
        <div>
          <h3>{product.title}</h3>
          <button onClick={() => handleAdd(product)} >add</button>
          <button onClick={() => handleRemove(product)}>remove</button>
        </div>)}
    </div>
  );
}

export default App;
