import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {getAllProducts} from '../services/productService'

import {getData} from '../redux/actions'

const useStore = () => {
   const dispatch = useDispatch();
   const [allData, setAllData] = useState([])

  useEffect(() => {
     dispatch(getData('https://fast-depths-21544.herokuapp.com/api/products?page=1&limit=6'));
     getAll()
  }, [dispatch]);
   
   const products= useSelector((state:any)=>state.product.allProducts)
   
   const getAll = async() => {
      const data = await getAllProducts('https://fast-depths-21544.herokuapp.com/api/products').then((response) => { return response.data})
      setAllData(data)
   }

  return [products, allData];
};

export default useStore