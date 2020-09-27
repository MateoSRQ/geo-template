import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";
import { AppThunk } from "../store";
import axios from "axios";

let Slice = createSlice({
  name: "app",
  initialState: {
    status: "no_init",
  },
  reducers: {
    _status: (state, action: any) => {
      state.status = action.payload;
      return state;
    },
  },
});

export { Slice };
const { actions } = Slice;

export const setStatus = (): AppThunk => async (dispatch) => {
  console.log("setStatus");
  dispatch(actions._status("on"));
  /*
    try {
        let results = await axios({
            method: "get",
            url: "http://127.0.0.1:3000/position",
        });
        dispatch(actions._readAllAction(results.data));
    } catch (err) {
        //dispatch(getRepoDetailsFailed(err.toString()));
        console.log(err);
    }
 */
};

export const getStatus = (state: RootState): any => {
  return state.app.status;
};
