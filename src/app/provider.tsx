import {PropsWithChildren, Suspense, FC} from "react";

export const AppProvider: FC<PropsWithChildren> = ({children}) => {
  return (
      <Suspense fallback={<div>loading...</div>}>
        {children}
      </Suspense>
  )
}