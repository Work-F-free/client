import {PropsWithChildren, Suspense, FC} from "react";
import {Provider} from "react-redux";

import {store} from "@/store";


export const AppProvider: FC<PropsWithChildren> = ({children}) => {
  return (
      <Suspense fallback={<div>loading...</div>}>
        <Provider store={store}>
          {children}
        </Provider>
      </Suspense>
  )
}
