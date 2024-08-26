import express from 'express';
import cors from 'cors';
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import { trpcRouter } from './server';

const app = express();
app.use(cors({ origin: '*' }));
app.use('/trpc', createExpressMiddleware({ router: trpcRouter }));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
