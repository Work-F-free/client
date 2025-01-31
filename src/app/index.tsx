import "./style/global.css";
import {AppProvider} from "@/app/provider.tsx";
import {AppRouter} from "@/app/routing.tsx";

export const App = () => {
  return (
    <AppProvider>
      <AppRouter/>
    </AppProvider>
  );
};
