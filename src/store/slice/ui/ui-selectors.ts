import { AppState } from "@/store";

export const selectAuthModalOpen = (state: AppState) => state.ui.authModalOpen;
