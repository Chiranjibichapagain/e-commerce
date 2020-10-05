import React from "react";

const ProductEdit = ({ closeIt }: any) => {
  return (
    <div>
      <h4 onClick={() => closeIt(false)}>X</h4>
      <p>this is product edit</p>
    </div>
  );
};

export default ProductEdit;
