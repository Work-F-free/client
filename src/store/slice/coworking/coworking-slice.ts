import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TEditCoworkigShema } from "@/feature/coworking-config";
import { TPlane } from "@/feature/plane";

interface CoworkingState {
  formData: TEditCoworkigShema;
  planeData: TPlane;
}

const initialState: CoworkingState = {
  formData: {
    name_coworking: "",
    address: "",
    description: "",
  },
  planeData: {
    id: "",
    background: "",
    seats: [],
  },
};

const coworkingSlice = createSlice({
  name: "coworking",
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<TEditCoworkigShema>) => {
      state.formData = action.payload;
    },
    setPlaneData: (state, action: PayloadAction<TPlane>) => {
      state.planeData = action.payload;
    },
  },
});

export const { setFormData, setPlaneData } = coworkingSlice.actions;
export default coworkingSlice.reducer;
