import { useContext } from "react";

import { PropTypes } from "prop-types";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const PrivetRout = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (loading) return <>loading</>;

  if (user) return children;

  return <Navigate state={location.pathname} replace={true} to="/login" />;
};

export default PrivetRout;
PrivetRout.propTypes = {
  children: PropTypes.node,
};
