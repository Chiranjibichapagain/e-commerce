import React, {useState, useContext, useEffect} from "react";
import { useDispatch } from "react-redux";

import ProductTile from "../ProductTile";
import Nav from "../Nav";
import Notfound from '../Notfound'
import useStore from "../../hook/useStore";
import { getData } from "../../redux/actions";
import useStyles from "./styles";
import image from '../../ASSETS/image.png'
import { ThemeContext} from "../contextAPI/context";

const LandingPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {theme} = useContext(ThemeContext)
  const [data] = useStore();
  const [style, setStyle] = useState({ display: false });


  // useEffect(() => {
  // }, [data])
  
   const handleDisplay = () => {
     setStyle((prevState) => ({
       display: !prevState.display,
     }));
   };

  const handlePages = (page: number) => {
    const newUrl = `https://fast-depths-21544.herokuapp.com/api/products?page=${page}&limit=6`;
    dispatch(getData(newUrl));
  };

  const handleSearch = (e: any) => {
    const query = e.target.value;
    const newUrl = `https://fast-depths-21544.herokuapp.com/api/products?name=${query}`;
    dispatch(getData(newUrl));
  };

  const handleSort = (category: string, minPrice: number, maxPrice: number) => {
    if (category) {
      const newUrl = `https://fast-depths-21544.herokuapp.com/api/products?category=${category}&pricelt=${maxPrice}&pricegt=${minPrice}`;
      dispatch(getData(newUrl));
    }
    setStyle({ display: false });
  };

  const mainStyle = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundColor:theme
  }

  return (
    <div style={mainStyle}>
      <Nav
        style={style}
        handleDisplay={handleDisplay}
        handleSort={handleSort}
        handleSearch={handleSearch}
      />
      
      <div className={classes.root}>
        {data.length > 0 &&
          <div className={classes.pagination}>
            <div onClick={() => handlePages(1)} className={classes.page}>1</div>
            <div onClick={() => handlePages(2)} className={classes.page}>2</div>
            <div onClick={() => handlePages(3)} className={classes.page}>3</div>
            <div onClick={() => handlePages(3)} className={classes.page}>4</div>
          </div>
        }

        {data.map((product: any) => (
          <ProductTile key={product._id} product={product} />
        ))} 

       {data&& data.length === 0 && <Notfound />}
      </div>
    </div>
  );
};

export default React.memo(LandingPage);
