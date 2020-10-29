import React, { useState } from "react";
import { Paper, Slider } from "@material-ui/core";

import {DrawerProps} from '../../types/componentTypes'
import useStyles from "./styles";

const Drawer = ({ style, handleSort }: DrawerProps) => {
  const classes = useStyles();
  const [price, setPrice] = React.useState<number[]>([0, 2000]);
  const [category, setCategory] = useState("");

  const handleChange = (event: any, newValue: number | number[]) => {
    setPrice(newValue as number[]);
  };

  const valuetext = (value: number) => {
    return `${value} $`;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSort(category, price[0], price[1]);
  };

  return (
    <Paper className={style.display ? classes.paper : classes.noPaper}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.categoryBox}>
          <label className={classes.categoryLabel}>Category</label>
          <select
            onChange={({ target }) => setCategory(target.value)}
            name="categories"
            className={classes.dropDown}
          >
            <option value="">Select a category</option>
            <option value="men clothing">Men clotings</option>
            <option value="women clothing">Women clotings</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
          </select>
        </div>
        <div className={classes.priceBox}>
          <label className={classes.priceLabel}>Price range</label>
          <Slider
            className={classes.slider}
            value={price}
            onChange={handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}
            min={0}
            max={1200}
          />
        </div>

        <button className={classes.button} type="submit">
          Search
        </button>
      </form>
    </Paper>
  );
};

export default React.memo(Drawer);
