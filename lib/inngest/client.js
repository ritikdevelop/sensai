import { Inngest } from "inngest";

// ! Create a client to send and receive events from Inngest

export const inngest = new Inngest({
  id: "career-coach", // Unique app ID
  name: "Career Coach",
  credentials: {
    gemini: {
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY,
    },
  },
});