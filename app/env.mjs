import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";
 
export const env = createEnv({
  server: {
    API_KEY: z.string().min(1).optional(),
  },
  client: {
    NEXT_PUBLIC_APP_NAME: z.string().optional(),
  },
  runtimeEnv: {
    API_KEY: process.env.API_KEY,
	NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
  },
});