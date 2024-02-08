import { z } from "zod";

import { adminProcedure, createTRPCRouter } from "@/server/api/trpc";

export const topicRouter = createTRPCRouter({
  create: adminProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.topic.create({
        data: {
          name: input.name,
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      });
    }),
});
