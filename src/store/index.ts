import {configureStore} from "@reduxjs/toolkit";

import {rootReducer} from "./root-reducer.ts";

export const store = configureStore({
  reducer: rootReducer,
})


export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;


import {toggleAuthModalOpen} from "./slice/ui/ui-slice.ts";
export {toggleAuthModalOpen};