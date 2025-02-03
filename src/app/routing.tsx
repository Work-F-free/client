import {createBrowserRouter, RouterProvider} from "react-router-dom";

import {paths} from "@/config/paths/paths.ts";
import {AggregationLayout} from "@/components/layout";


export const CreateAppRouter = () =>
    createBrowserRouter([
      {
        path: paths.lending.path,
        element: <AggregationLayout/>,
        children: [
          {
            path: paths.lending.path,
            lazy: async () => {
              const module = await import("./router/landing.tsx")
              return {element: <module.default/>}
            }
          },
          {
            path: "*",
            lazy: async () => {
              const module = await import("./router/not-found.tsx")
              return {element: <module.default/>}
            }
          }
        ]
      }
    ])

export const AppRouter  = () => {
  const router = CreateAppRouter();

  return (
      <RouterProvider router={router}/>
  )
}
