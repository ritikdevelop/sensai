
import { serve } from "inngest/next";

import { inngest } from "@/lib/inngest/client";
import { generateIndustryInsights } from "@/lib/inngest/function";
import { helloWorld } from "@/lib/inngest/function";
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [helloWorld],
});
