import React, { FC, PropsWithChildren, useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const [start, setStart] = useState(false);

  return <div>{start ? <div>{children}</div> : <Navigate to="/login" />}</div>;
};

export default PrivateRoute;
