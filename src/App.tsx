import React, { useEffect } from "react";
import { setStatus, getStatus } from "./store/slices/app";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  const status = useSelector(getStatus);

  const handleClick = () => {
    console.log("click");
    dispatch(setStatus());
    setStatus();
  };

  return (
    <div className="App" onClick={handleClick}>
      {status}
    </div>
  );
}

export default App;
