import React from "react";

import Thead from "./Thead";
import Tbody from "./Tbody";
import useStyles from "./styles";

const data = [
  {
    id: "1",
    name: "Slim Fit T-Shirts",
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    sizes: ["S", "M", "XL"],
    price: 22.3,
    categories: ["men clothing"],
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
  {
    id: "2",
    name: "Slim Fit T-Shirts",
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    sizes: ["S", "M", "XL"],
    price: 22.3,
    categories: ["men clothing"],
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
  {
    id: "3",
    name: "Slim Fit T-Shirts",
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    sizes: ["S", "M", "XL"],
    price: 22.3,
    categories: ["men clothing"],
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
];

const Products = () => {
  return (
    <table>
      <Thead />
      {data && data.map((product) => <Tbody data={product} />)}
    </table>
  );
};

export default Products;
