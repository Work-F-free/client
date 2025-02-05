import { PropsWithChildren, Suspense, FC } from "react";
import { Provider } from "react-redux";

import { store } from "@/store";
import { Toaster } from "@/components/ui/sonner";

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Provider store={store}>
        <Toaster position={"bottom-right"} />
        {children}
      </Provider>
    </Suspense>
  );
};
