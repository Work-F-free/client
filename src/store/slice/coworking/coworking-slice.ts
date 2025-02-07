import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TEditCoworkigShema } from "@/feature/coworking-config";
import { TPlane } from "@/feature/plane";

interface CoworkingState {
  formData: TEditCoworkigShema;
  planeData: TPlane;
  imageFile: File | null;
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
  imageFile: null,
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
    setImageFile: (state, action: PayloadAction<File | null>) => {
      state.imageFile = action.payload;
    },
  },
});

export const { setFormData, setPlaneData, setImageFile } =
  coworkingSlice.actions;
export default coworkingSlice.reducer;
