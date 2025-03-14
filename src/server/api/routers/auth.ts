import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { passwordSchema } from "~/schemas/auth";
import { supabaseAdminClient } from "~/lib/supabase/client";
import { generateFromEmail } from "unique-username-generator";

export const authRouter = createTRPCRouter({
  register: publicProcedure
  
    // validate input users
    .input(
      z.object({
        email: z.string().email().toLowerCase(),
        password: passwordSchema,
      }),
    )

    // add data to supabase
    .mutation(async ({ ctx, input }) => {
      const { db } = ctx;
      const { email, password } = input;

      await db.$transaction(async (tx) => {
        let userId = "";

        try {

          // create auth users
          const { data, error } =
            await supabaseAdminClient.auth.admin.createUser({
              email,
              password,
            });
          if (data.user) {
            userId = data.user.id;
          }
          if (error) throw error;

          const generatedUsername = generateFromEmail(email);

          // add profile users
          await tx.profile.create({
            data: {
              email,
              userId: data.user.id,
              username: generatedUsername,
            },
          });
        } catch (error) {
          console.log(error);
          await supabaseAdminClient.auth.admin.deleteUser(userId);
        }
      });
    }),
});
