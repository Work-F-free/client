import { lazy } from "react";

export const BunnerChunk = lazy(() => import("./banner").then((module) => ({ default: module.BannerFC })));

