import { initTRPC } from '@trpc/server';
import { abort } from 'process';
import superjson from "superjson"
import { Context } from 'vm';
import z from "zod"


const t = initTRPC.context<Context>().create({
    transformer: superjson,
});

export const trpcRouter = t.router({
    sayHi: t.procedure.query(() => {
            return 'Hello';
        }),

    message: t.procedure
        .input(
            z.object({
                text: z.string().nullish()
            }).nullish()
        )
        .query(opts => {
            return {
            greeting:`hello ${opts.input?.text}`,
        }
        }),
        
    LogToServer: t.procedure
    .input(
        z.object({
            message: z.string().nullish()
        }).nullish()
    )
    .mutation(opts => {
        // Destructure input and context
        const { input, ctx } = opts;
        // Log the input and context
        console.log(1, 'input:', input);
        console.log(2, 'context:', ctx);

        // Return a meaningful result
        return {
            message: input?.message ?? "No Meesage Found",
        };
    }),
});

export type tRPC_Router = typeof trpcRouter;
