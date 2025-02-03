import { combineReducers } from "redux";
import UiReducer from "./slice/ui/ui-slice.ts";

export const rootReducer = combineReducers({
  ui: UiReducer,
});
