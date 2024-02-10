import { topicRouter } from "@/server/api/routers/topic";
import { tutorialRouter } from "@/server/api/routers/tutorial";
import { createTRPCRouter } from "@/server/api/trpc";

export const appRouter = createTRPCRouter({
  topic: topicRouter,
  tutorial: tutorialRouter,
});

export type AppRouter = typeof appRouter;
