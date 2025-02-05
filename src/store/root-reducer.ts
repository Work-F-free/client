import { combineReducers } from "redux";
import UiReducer from "./slice/ui/ui-slice.ts";
import coworkingReducer from "./slice/coworking/coworking-slice.ts";

export const rootReducer = combineReducers({
  ui: UiReducer,
  coworking: coworkingReducer,
});
