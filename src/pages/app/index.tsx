import React, { useEffect } from "react";
import { setStatus, getStatus } from "../../store/slices/app";
import { useDispatch, useSelector } from "react-redux";
import style from "./index.module.scss";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  const status = useSelector(getStatus);

  const handleClick = () => {
    dispatch(setStatus());
    setStatus();
  };

  return (
    <div className={[style.component].join(" ")} onClick={handleClick}>
      {status}
    </div>
  );
}

export default App;
