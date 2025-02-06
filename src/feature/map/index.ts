import { lazy } from "react";

export const CoworkingChunk = lazy(() => import("./coworking-map").then((module) => ({ default: module.CoworkingMapFC })));

