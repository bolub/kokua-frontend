import { z } from 'zod';
import { procedure, router } from '../../trpc';
import { ResourceService } from './impl';

export const resourceRouter = router({
  all: procedure.query((opts) => {
    return ResourceService.all();
  }),
  findByTagName: procedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .query(({ input }) => {
      return ResourceService.findByTag({
        name: input.name,
      });
    }),
  find: procedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .query(({ input }) => {
      return ResourceService.find({
        name: input.name,
      });
    }),
});
