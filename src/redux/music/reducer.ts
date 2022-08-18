import { IMusic } from "./interface";
import { createReducer, createSelector } from "@reduxjs/toolkit";
import { getMusic } from "./action";
import { AppState } from "..";

const initialState: IMusic = {
  name: "",
  url: "",
};

export default createReducer(initialState, (builder) =>
  builder
    .addCase(getMusic.pending, (state, action) => {
      console.log(state, action.payload);
    })
    .addCase(getMusic.fulfilled, (state, action) => {
      console.log(action,'test')
      // state.name = action.payload.name;
      // state.url = action.payload.url;
    })
    .addCase(getMusic.rejected, (state, action) => {
      console.log(state, action.payload);
    })
);

const selectSelf = (state: AppState) => state.music
const stateUrl = createSelector(selectSelf, state => state.url)
const stateSong = createSelector(selectSelf, state => state.name)

export const userSelectors = {
  stateUrl,
  stateSong
}
