import React from "react";

import OrderItem from '../OrderItem'
import useStyles from "./styles";

const ViewOrder = ({
  closeIt,
  data,
  name
}: any) => {
  const classes = useStyles();
  
    return (
      <div className={classes.root}>
      <div className={classes.actions}>
      <span className={classes.closeBtn} onClick={() => closeIt(false)}>
        X
      </span>
          <h2 className={classes.heading}>Orders </h2>
      </div>
        <h4 className={classes.userName}>{name}</h4>
        {data.length === 0 && <h4 className={classes.noOrderMsg}>This user doesn't have any active orders</h4>}
        {data.length > 0 && 
          data.map((item:any)=><OrderItem key={item._id} data={item.checkout} />)
        }

      </div>
    )
};

export default React.memo(ViewOrder);
