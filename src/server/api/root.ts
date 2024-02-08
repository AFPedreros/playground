import { postRouter } from "@/server/api/routers/post";
import { topicRouter } from "@/server/api/routers/topic";
import { createTRPCRouter } from "@/server/api/trpc";

export const appRouter = createTRPCRouter({
  post: postRouter,
  topics: topicRouter,
});

export type AppRouter = typeof appRouter;
