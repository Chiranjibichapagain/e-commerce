import React, { useEffect, useState, useContext } from 'react';

import UserRoutes from '../../routes/UserRoutes'
import AdminRoutes from '../../routes/AdminRoutes'
import { ThemeContext} from "../contextAPI/context";
import useStyle from './styles'

const App = () => {
  const classes = useStyle();
  const [admin, setAdmin] = useState(false);
  const { info } = useContext(ThemeContext);// login info 
  
  useEffect(() => {
    getLS()
  }, [info])

  const getLS = async() => {
    const LS = await localStorage.getItem("loginInfo");
    const loginInfo = typeof LS === "string" && JSON.parse(LS);
    loginInfo && loginInfo.admin? setAdmin(true):setAdmin(false)
  }

  return (
    <>
      <div className={classes.body}>
            {admin ? (
              <AdminRoutes />
              ) : (
                <div>
                <UserRoutes />
              </div>
            )}
      </div>
    </>
  );
}

export default React.memo(App);
