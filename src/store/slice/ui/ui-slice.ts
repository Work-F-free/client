import {UIState} from "./type";
import {createSlice} from "@reduxjs/toolkit";

const initialUiState: UIState = {
  authModalOpen: false,
}

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    toggleAuthModalOpen: (state) => {
      state.authModalOpen = !state.authModalOpen;
      console.log(state.authModalOpen);
    }
  }
})

export const {toggleAuthModalOpen} = uiSlice.actions;
export default uiSlice.reducer;
