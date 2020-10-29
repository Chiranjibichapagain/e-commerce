import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import CircularProgress from "@material-ui/core/CircularProgress";

import Thead from "./Thead";
import Tbody from "./Tbody";
import Nav from "../Nav";
import ProductAdd from "./ProductAdd";
import {Product} from '../../../types/types'
import { useGetProductsApi } from "../../../hook/useProductApi";
import { useProductsApi } from "../../../hook/useProductApi";
import useStyles from "./styles";

Modal.setAppElement("#root");
const Products = () => {
  const classes = useStyles();
  const [products] = useGetProductsApi();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log('getting products')
  }, [products])

  const {
    handleProductUpdate,
    handleProductDelete,
    handleProductCreate,
    error
  } = useProductsApi();

  return (
    <div>
      <Nav />
      {products.length === 0 && (
        <div className={classes.loading}>
          <CircularProgress size="10rem" />
          <h4>Loading data...</h4>
        </div>
      )}
      {products.length > 0 && 
      <div>
        <table>
        <Thead />
        {products.map((product:Product) => (
          <Tbody
            key={product._id}
            data={product}
            handleProductUpdate={handleProductUpdate}
            handleProductDelete={handleProductDelete}
            error={error}
          />
        ))}
        </table>
      <span onClick={() => setOpen(true)} className={classes.addBtn}>
        +
      </span>
      <Modal className={classes.modal} isOpen={open}>
        <ProductAdd
          closeIt={setOpen}
          handleProductCreate={handleProductCreate}
          error={error}
        />
      </Modal>
      </div>
      }
    </div>
  );
};

export default React.memo(Products);
