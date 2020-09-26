import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { getData } from '../../redux/actions'

const App = () => {
  const dispatch = useDispatch()
  const [products, setProducts] = useState([])

  useEffect(() => {
    dispatch(getData())
  }, [dispatch])



  console.log('in app', products)

  const data = useSelector(state => state.product.allProducts)
  console.log('data--', data)

  return (
    <div>
      <h1>Hellooo</h1>
    </div>
  );
}

export default App;
