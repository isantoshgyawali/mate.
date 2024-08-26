import { initTRPC } from '@trpc/server';
import superjson from "superjson"
import { Context } from 'vm';

const t = initTRPC.context<Context>().create({
    transformer: superjson,
});

export const trpcRouter = t.router({
    sayHi: t.procedure.query(() => {
        return 'Hello';
    }),

    LogToServer: t.procedure
    .input((v) => {
        if (typeof v === 'string') return v;
        throw new Error('Invalid type detected.');
    })
    .mutation(async (opts) => {
        // Destructure input and context
        const { input, ctx } = opts;

        // Log the input and context
        console.log(1, 'input:', input);
        console.log(2, 'context:', ctx);

        // Return a meaningful result
        return true;
    }),
});

export type tRPC_Router = typeof trpcRouter;
