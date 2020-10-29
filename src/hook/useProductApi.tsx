import { useState, useEffect } from "react";

import {
  getAllProducts,
  updateProduct,
  deleteProduct,
  createProduct,
} from "../services/productService";

// Hook to get all products
export const useGetProductsApi = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const data = await getAllProducts("https://fast-depths-21544.herokuapp.com/api/products").then(
      (response) => response.data
    );
    setProducts(data);
  };

  return [products];
};

//Hook to Create, update and delete products
export const useProductsApi = () => {
  const [error, setError] = useState('')
  const handleProductUpdate = async (id: string, values:any) => {
    await updateProduct(id, values).then((response: any) => {
      if (response.data.error) {
        setError(response.data.error)
      }
    })
    window.location.reload();
  };

  const handleProductDelete = async (id: string) => {
    await deleteProduct(id).then((response: any) => {
      if (response.data.error) {
        setError(response.data.error)
      }
    })
    window.location.reload();
  };

  const handleProductCreate = async (values:any) => {
    const LS = await localStorage.getItem("loginInfo");
    const parsedData = typeof LS === "string" && JSON.parse(LS);
    const UserToken = `bearer ${parsedData.token}`;
    const config = { headers: { authorization: UserToken } };

    await createProduct(values, config).then((response: any) => {
      if (response.data.error) {
        setError(response.data.error)
      }
    })
    window.location.reload();
  };

  return {
    handleProductUpdate,
    handleProductDelete,
    handleProductCreate,
    error
  };
};
