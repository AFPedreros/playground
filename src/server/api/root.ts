import { postRouter } from "@/server/api/routers/post";
import { topicRouter } from "@/server/api/routers/topic";
import { tutorialRouter } from "@/server/api/routers/tutorial";
import { createTRPCRouter } from "@/server/api/trpc";

export const appRouter = createTRPCRouter({
  post: postRouter,
  topic: topicRouter,
  tutorial: tutorialRouter,
});

export type AppRouter = typeof appRouter;
