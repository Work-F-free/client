import { z } from "zod";

export const searchShema = z.object({
  
});
 
 export type TSearchForm = z.infer<typeof searchShema>;
