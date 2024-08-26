// trpc.ts
import { createTRPCReact } from '@trpc/react-query';
import { tRPC_Router } from 'server/server';
 
export const trpc = createTRPCReact<tRPC_Router>();
