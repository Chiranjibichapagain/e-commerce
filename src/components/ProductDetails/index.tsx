import React from "react";

import useStyles from "./styles";

const ProductEdit = ({ closeIt, data }: any) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.actions}>
        <span className={classes.closeBtn} onClick={() => closeIt(false)}>
          X
        </span>
        <button className={classes.checkoutBtn}>Add to Cart</button>
      </div>
      <div className={classes.infoBox}>
        <img className={classes.image} src={data.image} />
        <div className={classes.details}>
          <h1 className={classes.name}>{data.name}</h1>
          <h3 className={classes.price}>{`${data.price} $`}</h3>
          <p className={classes.desc}>{data.description}</p>
          <h4 className={classes.sizeHeading} >Available Sizes: </h4>
          <p className={classes.size}>
            {data.sizes.map((item: string) => (
              <li key={item}>{item}</li>
            ))}
          </p>
          <p className={classes.category} style={{ listStyle: "none" }}>
            {data.categories.map((item: string) => (
              <li key={data.id}>{item}</li>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductEdit;
