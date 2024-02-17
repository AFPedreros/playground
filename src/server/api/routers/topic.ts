import { z } from "zod";

import { adminProcedure, createTRPCRouter } from "@/server/api/trpc";
import { utapi } from "@/server/uploadthing";

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
  update: adminProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string().min(1).optional(),
        description: z.string().optional(),
        imageUrl: z.string().optional(),
        isPublished: z.boolean().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { id, ...updateData } = input;

      if (input.imageUrl) {
        const imageTopic = await ctx.db.topic.findUnique({
          where: {
            id: id,
          },
        });

        if (imageTopic?.imageUrl) {
          await utapi.deleteFiles(imageTopic.imageUrl.split("/").pop()!);
        }
      }

      return ctx.db.topic.update({
        where: { id },
        data: updateData,
      });
    }),
});
